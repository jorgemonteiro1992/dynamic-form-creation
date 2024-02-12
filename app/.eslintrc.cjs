module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: [  
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    rules: {
        // override/add rules settings here:
        indent: [
            "error", 4, {
                SwitchCase: 1,
                ignoredNodes: [ "TemplateLiteral" ]
            }
        ],
        "space-before-function-paren": [ "error", "always" ],
        "comma-dangle": [ "error", "never" ],
        "arrow-parens": [ "error", "as-needed" ],
        "array-bracket-spacing": [ "error", "always" ],
        "space-in-parens": [ "error", "always", { exceptions: [ "{}" ] } ],
        "no-plusplus": "off",
        semi: [ "error", "always" ],
        "vue/max-attributes-per-line": "off",
        "vue/require-default-prop": "off",
        "vue/html-indent": [ "error", 4 ],
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/attribute-hyphenation": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"]
    }
};