const { execSync } = require('child_process');

module.exports = function (config) {
  config.addPassthroughCopy("./build/assets");
  config.addWatchTarget("./src/sites/");
  // config.addWatchTarget("./build/");
  config.addWatchTarget("./src/app/");
  // config.addWatchTarget("./src/_js/");
  config.on('eleventy.beforeWatch', async (changedFiles) => {
    console.log('changedFiles');
    console.log(changedFiles);
    const file = changedFiles[0];

    // cp -r src/sites/ build/
    // TODO: handle multiple files
    if(changedFiles[0].indexOf('.md') !== -1 && changedFiles[0].indexOf('/sites/') !== -1){
      console.log(file);
      console.log(file.replace('/src/sites/', '/build/'));
      execSync(`cp -v ${file} ${file.replace('/src/sites', '/build/')}`);
    }

    if(changedFiles[0].indexOf('.ts') !== -1){
      try {
        execSync('npm run build:webpack');
        console.log('\x1b[42m\x1b[30m  OK  \x1b[0m Typescript transpiled');
      } catch (error) {
        console.error(`\x1b[41mError\x1b[0m running another npm task: ${error}`);
      }
    } 
  });
    return {
      passthroughFileCopy: true,
      dir: {
        // input: 'src/_js', // <-- This bit
        input: 'build', // <-- This bit
        output: 'dist',
        layouts: 'layouts',
        includes: '_includes',
      },
    };
  };