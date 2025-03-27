import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  documents: ["lib/commerce/**/*.graphql"],
  schema: {
    [`${process.env.COMMERCE_DOMAIN ?? "https://api.headlesstrade.com"}/storefront/graphql?sdl`]: {
      handleAsSDL: true,
    },
  },
  ignoreNoDocuments: true,
  generates: {
    "lib/commerce/__generated__/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
        dedupeFragments: true
      },
      config: {
        documentMode: 'string'
      }
    },
  },
};

export default config;