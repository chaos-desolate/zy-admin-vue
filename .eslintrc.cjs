module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier', 'plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs,vue}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],

    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': 'error',
        'vue/no-template-key': 'off',
    },
}
