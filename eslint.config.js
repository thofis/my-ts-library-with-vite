import * as eslint from "typescript-eslint";
import * as tseslint from "typescript-eslint";

export default tseslint.config({
    files: ['**/*.ts'],
    extends: [
        eslint.configs.recommended,
        tseslint.configs.strict,
    ],
    rules: {
        semi: ["error", "never"],
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
});
//
// export default [
//     {
//         files: [
//             "src/**/*.ts",
//             "test/**/*.ts",
//         ],
//         rules: {
//             semi: ["error", "never"],
//         },
//         plugins: [
//             "typescript",
//         ]
//     }
// ]
