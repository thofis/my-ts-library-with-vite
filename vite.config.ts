import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
// @ts-expect-error vite-plugin-eslint has no type definitions available
import eslintPlugin from "vite-plugin-eslint"

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'my-ts-library-with-vite',
            fileName: 'my-ts-library-with-vite',
        },
    },
    plugins: [
        dts({
            exclude: [
                '**/*.test.ts',
                '**/test/**',
                '**/tests/**',
                '**/__tests__/**'
            ]
        }),
        eslintPlugin(),
    ],
})
