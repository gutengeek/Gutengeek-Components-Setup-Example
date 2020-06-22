```# Gutengeek - Components Reference```

@gutengeek/components example setup via npmjs.org

## Installation

### Install the npm package
```bash
cd path/to/your-folder
npm i @gutengeek/components
```

### Webpack configuration
```js
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const path = require('path');
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );

const production = process.env.NODE_ENV === '';

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.css$/i,
                loaders: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
                include: [/node_modules/]
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: ! production,

                        },
                    },
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: ! production,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssPresetEnv( {
                                    stage: 3,
                                    features: {
                                        'custom-media-queries': {
                                            preserve: false,
                                        },
                                        'custom-properties': {
                                            preserve: true,
                                        },
                                        'nesting-rules': true,
                                    },
                                } ),
                            ],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: ! production,
                            sassOptions: {
                                outputStyle: 'compressed'
                            }
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader', // this need file-loader
                    options: {
                        limit: 50000

                    }
                }
            }
        ]
    },
    plugins: [
        ...defaultConfig.plugins,
    ],
    externals: {
        'wp': 'window.wp',
        '@wordpress/element': {
            commonjs: [ 'wp', 'element' ],
            commonjs2: [ 'wp', 'element' ],
            amd: [ 'wp', 'element' ],
            root: [ 'wp', 'element' ]
        },
        '@wordpress/components': {
            commonjs: ['wp', 'components'],
            commonjs2: ['wp', 'components'],
            amd: ['wp', 'components'],
            root: ['wp', 'components']
        },//['wp', 'components']
        '@wordpress/i18n': {
            commonjs: ['wp', 'i18n'],
            commonjs2: ['wp', 'i18n'],
            amd: ['wp', 'i18n'],
            root: ['wp', 'i18n']
        },//['wp', 'i18n'],
        '@wordpress/element': {
            commonjs: ['wp', 'element'],
            commonjs2: ['wp', 'element'],
            amd: ['wp', 'element'],
            root: ['wp', 'element']
        },//['wp', 'element'],
        '@babel/runtime/regenerator': {
            commonjs: ['wp', 'polyfill'],
            commonjs2: ['wp', 'polyfill'],
            amd: "wp.polyfill",
            root: "wp.polyfill"
        },//['wp', 'polyfill'],
        '@wordpress/block-editor': {
            commonjs: ['wp', 'blockEditor'],
            commonjs2: ['wp', 'blockEditor'],
            amd: ['wp', 'blockEditor'],
            root: ['wp', 'blockEditor']
        },//['wp', 'blockEditor'],
        '@wordpress/rich-text': {
            commonjs: ['wp', 'richText'],
            commonjs2: ['wp', 'richText'],
            amd: ['wp', 'richText'],
            root: ['wp', 'richText']
        },//['wp', 'richText'],
        '@wordpress/data': {
            commonjs: ['wp', 'data'],
            commonjs2: ['wp', 'data'],
            amd: ['wp', 'data'],
            root: ['wp', 'data']
        },//['wp', 'data'],
        '@wordpress/compose': {
            commonjs: ['wp', 'compose'],
            commonjs2: ['wp', 'compose'],
            amd: ['wp', 'compose'],
            root: ['wp', 'compose']
        },//['wp', 'compose']
        'react': {
            commonjs: ['react'],
            commonjs2: ['react'],
            amd: ['React'],
            root: ['React']
        },
        'react-dom': 'ReactDom'
    }
};
```

## Usage

```jsx

// import via npm
import Components from "@gutengeek/components";
import '@gutengeek/components/build/core.css';
import '@gutengeek/components/build/index.css';
```