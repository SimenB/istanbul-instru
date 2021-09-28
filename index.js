const { readInitialCoverage: v4 } = require('istanbul-lib-instrument4');
const { readInitialCoverage: v5 } = require('istanbul-lib-instrument5');
const { transformSync } = require('@babel/core');

const code = `
const thing = 42;

function fn() {
 if (true) {
   console.log('wat!!!');
 }
}
`;

const cwd = process.cwd();

const transformedCode = transformSync(code, {
  filename: 'file.js',
  plugins: [[require.resolve('babel-plugin-istanbul'), { cwd, exclude: [] }]],
  root: cwd,
}).code;

console.log(v4(transformedCode));
console.log(v5(transformedCode));
