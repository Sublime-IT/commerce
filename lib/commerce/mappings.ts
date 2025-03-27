import { CartFragment, MoneyFragment } from "./__generated__/graphql";
import { Cart, Connection, Money } from "./types";

export function mapEdgesToItems<T>(
  data?: Connection<T> | undefined | null
): T[] {
  return data?.edges?.map(({ node }) => node) ?? [];
}

const commerceMoneyToVercelMoney = (money?: MoneyFragment): Money => {
  if (!money) {
    return {
      amount: "0",
      currencyCode: "USD",
    };
  }
  return {
    amount: (money.centAmount / 10 ** money.fractionDigits).toString(),
    currencyCode: money.currencyCode,
  };
};

export const commerceCartToVercelCart = (cart: CartFragment): Cart => {
  return {
    id: cart.id,
    checkoutUrl: "",
    totalQuantity: cart.totalQuantity,
    cost: {
      subtotalAmount: commerceMoneyToVercelMoney(cart.subtotalPrice),
      totalAmount: commerceMoneyToVercelMoney(cart.totalPrice),
      totalTaxAmount: commerceMoneyToVercelMoney(cart.taxedPrice?.totalTax),
    },
    lines: mapEdgesToItems(cart.lineItems).map((lineItem) => ({
      id: lineItem.id,
      quantity: lineItem.quantity,
      cost: {
        totalAmount: {
          amount: (lineItem.total.centAmount / 100).toString(),
          currencyCode: lineItem.total.currencyCode,
        },
      },
      merchandise: {
        id: lineItem.variant?.id ?? "",
        title: lineItem.variantName,
        selectedOptions:
          lineItem.variant?.selectedAttributes?.map((attr) => ({
            name: attr.name,
            value: attr.value,
          })) ?? [],
        product: {
          id: lineItem.product?.id ?? "",
          handle: lineItem.productSlug,
          title: lineItem.productName,
          featuredImage: {
            url: lineItem.variant?.image?.src ?? "",
            altText: "",
            width: 128,
            height: 128,
          },
        },
      },
    })),
  };
};
