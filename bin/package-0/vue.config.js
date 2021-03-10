const baseUrl = process.env.NODE_ENV === 'production' ? './' : './' // font scss资源路径 不同环境切换控制
module.exports = {
    publicPath: baseUrl,
    // outputDir: 'F:\\apache-tomcat-10\\webapps\\ROOT/',
    outputDir: 'dist',
    css: {
        // 启用 CSS modules
        // modules: false,
        requireModuleExtension: true,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                // data: `
                prependData: `
        @import '@/assets/scss/css.scss';
        `
            }
        }
    },
    configureWebpack: {
        externals: {
            AMap: 'AMap'
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '云南省中医药区块链联盟'
                return args
            })
    }
    // devServer: {
    //     disableHostCheck: true, // 启用热更新，不用手动刷新浏览器
    //     open: true, // 本地开发环境启动后自动打开页面
    //     port: 8080,
    //     proxy: {
    //         '/base': {
    //             // target: 'http://49.4.89.232:10061', // target host
    //             target: 'http://49.4.95.203:10051', // target host
    //             ws: false, // proxy websockets
    //             // secure: false, // 如果是https接口，需要配置这个参数
    //             changeOrigin: true, // needed for virtual hosted sites
    //             pathRewrite: {
    //                 // '^/': '' // rewrite path
    //                 '^/api': '/'
    //                 // '^/api': '/'
    //                 // 写'/api'就等于写'http://192.168.65.98:8888'
    //             }
    //         },
    //         '/api': {
    //             // target: 'http://192.168.65.98:7777', // target host
    //             target: 'https://restapi.amap.com', // target host
    //             ws: false, // proxy websockets
    //             secure: false, // 如果是https接口，需要配置这个参数
    //             changeOrigin: true, // needed for virtual hosted sites
    //             pathRewrite: {
    //                 // '^/': '' // rewrite path
    //                 '^/api': 'https://restapi.amap.com'
    //                 // '^/api': '/'
    //                 // 写'/api'就等于写'http://192.168.65.98:8888'
    //             }
    //         },
    //         '/oauth2': {
    //             target: 'http://49.4.95.203:10051', // target host
    //             // target: 'http://49.4.89.232:10061', // target host
    //             ws: false, // proxy websockets
    //             secure: false, // 如果是https接口，需要配置这个参数
    //             changeOrigin: true, // needed for virtual hosted sites
    //             pathRewrite: {
    //                 // '^/': '' // rewrite path
    //                 '^/api': ''
    //                 // '^/api': '/'
    //                 // 写'/api'就等于写'http://192.168.65.98:8888'
    //             }
    //         }
    //     }
    // }
}
