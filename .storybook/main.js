const path = require('path');
const patchNextCSSWithLess = require('next-with-less').patchNext;

patchNextCSSWithLess();

// add support for less and .module.less
const lessRegex = /\.less$/;

// from next-with-less
const addLessToRegExp = (rx) =>
  new RegExp(rx.source.replace("|sass", "|sass|less"), rx.flags);

const addLessToRuleTest = (test) => {
  if (Array.isArray(test)) {
    return test.map((rx) => addLessToRegExp(rx));
  } else {
    return addLessToRegExp(test);
  }
};

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    },
  ],
  'features': {
    'storyStoreV7': true,
  },
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5',
    'options': {
      'lazyCompilation': true,
      'fsCache': true,
    },
  },
  'staticDirs': ['../public'],
  reactOptions: {
    legacyRootApi: true,
  },
  // other config omitted for brevity
  webpackFinal: async config => {
    const sassRule = config.module.rules.find(rule => rule.test.test('.sass'));
    // rules for less
    config.module.rules.push({
      test: lessRegex,
      use: [
        ...sassRule.use.slice(0, sassRule.use.length - 1),
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            lessOptions: {
              javascriptEnabled: true,
              math: 'always',   // 此处指定为兼容 less-loader 3.x 的默认选项
            },
          },
        },
      ],
    });
    const assetRules = config.module.rules.filter(rule => 
      (rule.issuer?.not?.test('.sass') || rule.issuer?.test('.sass')));
    assetRules.forEach(rule => {
      if (rule.issuer.not) {
        rule.issuer.not = addLessToRuleTest(rule.issuer.not);
        return;
      }
      rule.issuer = addLessToRuleTest(rule.issuer);
    })

    // rules for svgr
    // this modifies the existing image rule to exclude .svg files
    // since we want to handle those files with @svgr/webpack
    // const imageRule = config.module.rules.find(rule => rule.test.test('.svg'))
    // imageRule.exclude = /\.svg$/
    //
    // // configure .svg files to be loaded with @svgr/webpack
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack']
    // })

    return config;
  }
};
