import {resolve} from 'path'
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
// @ts-ignore
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
        dts(),
        eslintPlugin(),
    ],
})
