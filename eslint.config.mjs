import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='className'] > Literal[value=/text-(xs|\\[(10|11|12|13)px\\])/]",
          message: "Avoid text-xs and sub-14px font sizes (text-[10px], text-[11px], text-xs) for readability. Use text-sm (14px) or larger."
        },
        {
          selector: "JSXAttribute[name.name='className'] > JSXExpressionContainer TemplateLiteral[quasis.0.value.raw=/text-(xs|\\[(10|11|12|13)px\\])/]",
          message: "Avoid text-xs and sub-14px font sizes (text-[10px], text-[11px], text-xs) for readability. Use text-sm (14px) or larger."
        }
      ]
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
