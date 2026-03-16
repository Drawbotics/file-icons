const { build } = require('esbuild');
const { cpSync, rmSync } = require('fs');

rmSync('dist', { recursive: true, force: true });

const shared = {
  entryPoints: ['src/index.js'],
  bundle: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  jsx: 'automatic',
};

Promise.all([
  build({ ...shared, format: 'esm', outfile: 'dist/index.mjs' }),
  build({ ...shared, format: 'cjs', outfile: 'dist/index.js' }),
]).then(() => {
  cpSync('src/style.css', 'dist/style.css');
  cpSync('src/index.d.ts', 'dist/index.d.ts');
});
