// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-v-for-key": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-for-template-key": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-loss-of-precision": "off",
    /* eslint-disable-next-line no-undef */
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    parser: "babel-eslint",
  },
};
