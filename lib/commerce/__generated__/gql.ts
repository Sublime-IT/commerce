/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment cart on Cart {\n  id\n  subtotalPrice {\n    ...money\n  }\n  totalPrice {\n    ...money\n  }\n  taxedPrice {\n    totalTax {\n      ...money\n    }\n  }\n  lineItems(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        total {\n          ...money\n        }\n        productName\n        productSlug\n        product {\n          id\n        }\n        variantName\n        variant {\n          id\n          name\n          image {\n            src\n          }\n          selectedAttributes {\n            name\n            value\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}": typeof types.CartFragmentDoc,
    "fragment money on Money {\n  centAmount\n  currencyCode\n  fractionDigits\n}": typeof types.MoneyFragmentDoc,
    "query GetCart($id: ID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}": typeof types.GetCartDocument,
    "query GetProducts($channel: String!, $query: String) {\n  products(channel: $channel, query: $query, first: 100) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}": typeof types.GetProductsDocument,
};
const documents: Documents = {
    "fragment cart on Cart {\n  id\n  subtotalPrice {\n    ...money\n  }\n  totalPrice {\n    ...money\n  }\n  taxedPrice {\n    totalTax {\n      ...money\n    }\n  }\n  lineItems(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        total {\n          ...money\n        }\n        productName\n        productSlug\n        product {\n          id\n        }\n        variantName\n        variant {\n          id\n          name\n          image {\n            src\n          }\n          selectedAttributes {\n            name\n            value\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}": types.CartFragmentDoc,
    "fragment money on Money {\n  centAmount\n  currencyCode\n  fractionDigits\n}": types.MoneyFragmentDoc,
    "query GetCart($id: ID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}": types.GetCartDocument,
    "query GetProducts($channel: String!, $query: String) {\n  products(channel: $channel, query: $query, first: 100) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}": types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment cart on Cart {\n  id\n  subtotalPrice {\n    ...money\n  }\n  totalPrice {\n    ...money\n  }\n  taxedPrice {\n    totalTax {\n      ...money\n    }\n  }\n  lineItems(first: 100) {\n    edges {\n      node {\n        id\n        quantity\n        total {\n          ...money\n        }\n        productName\n        productSlug\n        product {\n          id\n        }\n        variantName\n        variant {\n          id\n          name\n          image {\n            src\n          }\n          selectedAttributes {\n            name\n            value\n          }\n        }\n      }\n    }\n  }\n  totalQuantity\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment money on Money {\n  centAmount\n  currencyCode\n  fractionDigits\n}"): typeof import('./graphql').MoneyFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCart($id: ID!) {\n  cart(id: $id) {\n    ...cart\n  }\n}"): typeof import('./graphql').GetCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts($channel: String!, $query: String) {\n  products(channel: $channel, query: $query, first: 100) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
