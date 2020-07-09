const files = require.context('./modules',false,/\.js$/)

// 遍历接口
files.keys().forEach( key => {
    for( const [k,v] of Object.entries(files(key)))
    exports[k] =v
})
