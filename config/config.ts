import { defineConfig } from 'umi';
//所有的组件需要在config中配置,导航栏跳转需要配置url路径加Link组件

export default  {
    singular: true,

     dva: {},
     antd: {},
     
     //path 表示页面访问路径，component 表示 page 下的文件名===component: 不区分大小写===
     routes: [{
      //展示layout下index.js的布局
      path: '/',
      component: '@/layout',
      
      //该routes 配置的子路由用作跳转,
      routes: [
        //需要在绝对路径后加上path路径才可以读到Helloworld.js
        // {
        //   path: '/helloworld',
        //   component: 'Helloworld'
        // },
        {
          //如果path改成'/'那么不需要在后面加其他的路径可以直接访问Helloworld.js
          path: '/',
          component: 'helloworld',
        },
        { path: 'puzzlecards', component: './puzzlecards' },
        {
          //该跳转的路径可以不写绝对路径(dashboard)
          path: '/dashboard',
          routes: [
            //该路径可以做url跳转
            { path: '/dashboard/analysis', component: 'dashboard/analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
            
          ]
        },
        
      ]
    }],
    
};