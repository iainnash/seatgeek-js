import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import babelrc from 'babelrc-rollup';

export default {
  format: 'iife',
  moduleName: 'SeatGeek',
  entry: './SeatGeek.js',
  dest: './dist/seatgeek.js',
  plugins: [
    resolve(),
    babel(babelrc())
  ]
};
