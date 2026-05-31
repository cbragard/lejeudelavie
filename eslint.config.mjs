import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        files: ['**/*.{js,mjs,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            }
        },
        rules: {
            'comma-dangle': ['error', 'never'],
            'no-console': ['error'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'vue/html-closing-bracket-newline': ['error'],
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/valid-v-memo': 'off'
        }
    }
]
