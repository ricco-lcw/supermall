module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components':'@/components',
                'styles':'@/styles',
                'utils':'@/utils',
                'views':'@/views',
            }
        }
    }
}