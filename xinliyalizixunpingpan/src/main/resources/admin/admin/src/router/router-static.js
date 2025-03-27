import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import exampapertopic from '@/views/modules/exampapertopic/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import news from '@/views/modules/news/list'
    import xinlijiankang from '@/views/modules/xinlijiankang/list'
    import xinlijiankangCollection from '@/views/modules/xinlijiankangCollection/list'
    import xinlijiankangLiuyan from '@/views/modules/xinlijiankangLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhixunshi from '@/views/modules/zhixunshi/list'
    import zhixunshiChat from '@/views/modules/zhixunshiChat/list'
    import zhixunshiYuyue from '@/views/modules/zhixunshiYuyue/list'
    import config from '@/views/modules/config/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXinlijiankang from '@/views/modules/dictionaryXinlijiankang/list'
    import dictionaryXinlijiankangCollection from '@/views/modules/dictionaryXinlijiankangCollection/list'
    import dictionaryZhixunshiChat from '@/views/modules/dictionaryZhixunshiChat/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZujuan from '@/views/modules/dictionaryZujuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryExampaper',
        name: '心理测评状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '题目类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXinlijiankang',
        name: '心理健康类型',
        component: dictionaryXinlijiankang
    }
    ,{
        path: '/dictionaryXinlijiankangCollection',
        name: '收藏表类型',
        component: dictionaryXinlijiankangCollection
    }
    ,{
        path: '/dictionaryZhixunshiChat',
        name: '数据类型',
        component: dictionaryZhixunshiChat
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZujuan',
        name: '组题方式',
        component: dictionaryZujuan
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '心理测评表',
        component: exampaper
      }
    ,{
        path: '/exampapertopic',
        name: '心理测评选题',
        component: exampapertopic
      }
    ,{
        path: '/examquestion',
        name: '题目表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '心理测评记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/news',
        name: '通知公告',
        component: news
      }
    ,{
        path: '/xinlijiankang',
        name: '心理健康',
        component: xinlijiankang
      }
    ,{
        path: '/xinlijiankangCollection',
        name: '心理健康收藏',
        component: xinlijiankangCollection
      }
    ,{
        path: '/xinlijiankangLiuyan',
        name: '心理健康留言',
        component: xinlijiankangLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhixunshi',
        name: '咨询师',
        component: zhixunshi
      }
    ,{
        path: '/zhixunshiChat',
        name: '心理咨询',
        component: zhixunshiChat
      }
    ,{
        path: '/zhixunshiYuyue',
        name: '咨询师预约',
        component: zhixunshiYuyue
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
