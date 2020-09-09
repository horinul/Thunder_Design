//开发环境配置
const path = require('path');
const join = path.join; //拼接路径
const fs = require('fs');

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

function getEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const entries = files.reduce((ret, item) => {
        const itemPath = join(path, item)
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            ret[item] = resolve(join(itemPath, 'index.js'))
        } else {
            const [name] = item.split('.')
            ret[name] = resolve(`${itemPath}`)
        }
        return ret
    }, {})
    return entries
}

const devConfig = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunks-manifest', 'vendor'],
            chunksSortMode: 'manual'
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
                'assets': resolve('src/assets'),
                'views': resolve('src/views'),
            },
        },
    },
    devServer: {
        port: 8888, //固定端口
        hot: true, //开启热更新
        open: 'Google Chrome' //固定打开浏览器
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}
const buildConfig = {
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    },
    outputDir: 'lib',
    productionSourceMap: true,
    configureWebpack: {
        entry: {
            ...getEntries('packages'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
        }
    },
    // css: {
    //     sourceMap: true,
    //     extract: {
    //         filename: 'style/[name].css' //在lib文件夹中建立style文件夹中，生成对应的css文件。
    //     }
    // },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
    },
    chainWebpack: config => {
        config.module
            .rule('fonts')
            .use('url-loader')
            .tap(option => {
                option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
                return option
            })
    },
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;