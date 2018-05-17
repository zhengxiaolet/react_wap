export default {
  component: require('./index').default,
  childRoutes: [
    {
      path: '/planList',
      getComponent(state, cb){
        require.ensure([], require => cb(null, require('./PlanList').default))
      }
    }
  ]
}