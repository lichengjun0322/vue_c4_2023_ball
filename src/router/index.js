import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import Login_test from "../components/Login_test.vue";
//import HeaderPage from "../components/HeaderPage.vue";
import OnePage from "../components/body/OnePage.vue";
import TwoPage from "../components/body/TwoPage.vue";
import FirstPage from "../components/try/FirstPage.vue";
import VideoMange from "../components/body/VideoMange.vue";
import VideoPlay from "../components/body/VideoPlay.vue";
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path: "/",
            component: Login_test,
        },
        {
            path: 'LinkHome',
            name: 'LinkHome',
            meta: {
                // 之后你自己的项目中需要嵌入什么就改link属性值即可。
              title: '哔哩哔哩',
              link: 'https://www.bilibili.com/' 
            },
            // 你的LinkHome.vue组件放的目录位置
            component: resolve => require(['@/components/LinkHome'], resolve)
          },
        {
            path:"/home/num1",
            component: HomePage,
            children:[
                {
                    path:"/home/num1",
                    component:OnePage,
                },{
                    path:"/home/num2",
                    component:VideoMange
                },{
                    path:"/home/num3/:url",
                    component:VideoPlay,
                    props:true
                }
            ]
        },{
            path:"/head",
            component:OnePage
        },{
            path:"/img",
            component:TwoPage
        },{
            path:"/first",
            component:FirstPage
        }
    ]
});