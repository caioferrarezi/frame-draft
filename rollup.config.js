import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default [{
  input: 'src/index.ts',
  output: {
    name: 'gameEngine',
    file: pkg.browser,
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
}, {
  input: 'src/index.ts',
  external: ['ms'],
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }],
  plugins: [typescript({ tsconfig: './tsconfig.json' })]
}]
