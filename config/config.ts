import { defineConfig } from 'umi';
export default {
    singular: true,

     dva: {},
     antd: {},

    routes: [{
        // path: '/',
        // component: '../layout',
        routes:[
            { exact: false, path: '/', component: '@/layout/index',
              routes: [
                { exact: true, path: '/', component: '@/Dashboard/Analysis' },
                { exact: true, path: '/users', component: '@/Dashboard/Monitor' },
              ],
            },
          ]
        // routes: [
        //     {
        //         path: '/',
        //         component: 'HelloWorld',
        //     },
        //     {
        //         path: '/helloworld',
        //         Component: 'HelloWorld'
        //     },
        //     {
        //         path: '/dashboard',
        //         //该目录下有三个js
        //         routes: [
        //             { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
        //             { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
        //             { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        //         ]   
        //     }
        // ]
      }],
};