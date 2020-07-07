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
    }
}