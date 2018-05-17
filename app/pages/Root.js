export default {

    path: '/',
    component: require('./App').default,
    indexRoute: {
        getComponent(state, cb){
            require.ensure([], require => cb(null, require('./Error').default))
        }
    },
    childRoutes: [
        require('./Plan/routes').default,
        {
            path: '*',
            getComponent(state, cb){
                require.ensure([], require => cb(null, require('./Error').default))
            }
        }
    ]
}
