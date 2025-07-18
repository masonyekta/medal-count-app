module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx"],
  semi: false,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 4,
  useTabs: true,
  trailingComma: "es5",
  bracketSpacing: true,
  importOrder: ["^[./]", "@/components/(.*)$", "@/lib/(.*)$", "@/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
