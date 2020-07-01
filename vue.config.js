module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'components':'@/components',
                'common':'@/common',
                'styles':'@/styles',
                'utils':'@/utils',
                'views':'@/views',
            }
        }
    }
}