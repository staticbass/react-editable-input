/**
 * Created by supervlad on 30.03.16.
 */

module.exports = {

    entry: './src/editable_input.jsx',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'EditableInput'
    },
    externals: {
        "react": {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

};