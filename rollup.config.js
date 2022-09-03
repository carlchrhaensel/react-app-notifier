import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import scss from 'rollup-plugin-scss';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-app-notifier',
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            scss({
                output: 'dist/styles.css'
            }),
            url({
                destDir: 'dist/assets/',
                publicPath: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/dist/assets/' : './assets/',
                fileName: '[name][extname]',
                include: ['**/*.svg', '**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg'],
            }),
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                extensions: ['.css'],
            }),
            terser(),
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/, /\.s?css$/],
        plugins: [dts()],
    },
];
