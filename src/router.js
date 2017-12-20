const routers = [
    {
        path: '/',
        meta: {
            title: 'lxp-project'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path:'/music',
        meta:{
            title:'啥玩意儿啊'
        },
        component:(resole) => require(['./views/music.vue'],resole)
    }
];
export default routers;