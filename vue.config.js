
// 代理函数
const setProxy = table => {
    let proxy = Object.create(null)
    for (const [k, v] of table) {
        proxy[k] = {
            changeOrigin: true,
            target: v,
            pathRewrite: { [`^${k}`]: '' }
        }
    }
    return proxy
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components':'@/components',
                'assets': '@/assets',
                'styles':'@/styles',
                'utils':'@/utils',
                'views':'@/views',
                'apis':'@/apis',
            }
        }
    },
    devServer: {    
        open: true,
        host: '',
        port: 8888,
        https: false,
        hotOnly: false,
        proxy: setProxy(
            new Map([
                ['/testOne', 'http://152.136.185.210:8000/api/n3'], //test
                ['/testTwo', 'http://152.136.185.210:8000/api/z8'], //test
            ])
        )
    }
}