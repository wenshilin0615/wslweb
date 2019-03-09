import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

import Home from '@/views/home/home'
import Homepage from '@/views/home/homepage/homepage'
import ArticleList from '@/views/home/articleList/articleList'
import Album from '@/views/home/album/album'
import Msgboard from '@/views/home/msgboard/msgboard'
import Game from '@/views/home/game/game'
import Player from '@/views/home/player/player'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Home,
    hidden: true,
    children: [
      {
        path: '/',
        name: 'Homepage',
        component: Homepage
      },
      {
        path: '/articleList',
        name: 'ArticleList',
        component: ArticleList
      },
      {
        path: '/album',
        name: 'Album',
        component: Album
      },
      {
        path: '/msgboard',
        name: 'Msgboard',
        component: Msgboard,
        meta: {
          requireAuth: true,
         },
      },
      {
        path: '/game',
        name: 'Game',
        component: Game,
        meta: {
          requireAuth: true,
         },
      }
    ]
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: '/dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
{
    path: '/adminpages/admin_article',
    component: Layout,
    redirect: '/adminpages/admin_article/myarticles',
    name: '文章管理',
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: '/myarticles',
        name: 'Myarticles',
        component: () => import('@/views/adminpages/admin_article/myarticles/index'),
        meta: { title: '我的文章', icon: 'documentation' }
      },
      {
        path: '/addarticle',
        name: 'Addarticle',
        component: () => import('@/views/adminpages/admin_article/add/index'),
        meta: { title: '新增文章', icon: 'form' }
      },
      {
        path: '/classification',
        name: 'Classification',
        component: () => import('@/views/adminpages/admin_article/a_classification/index'),
        meta: { title: '文章分类', icon: 'tree' }
      }
    ]
  },
  {
    path: '/adminpages/admin_album',
    component: Layout,
    name: '相册管理',
    meta: { title: '相册管理', icon: 'table' },
    children: [
      {
        path: '/add_photo',
        name: 'Add_photo',
        component: () => import('@/views/adminpages/admin_album/add_photo/index'),
        meta: { title: '添加图片', icon: 'form' }
      },
      {
        path: '/photo_list',
        name: 'Photo_list',
        component: () => import('@/views/adminpages/admin_album/photo_list/index'),
        meta: { title: '图片列表', icon: 'list' }
      },
      {
        path: '/photo_classification',
        name: 'Photo_classification',
        component: () => import('@/views/adminpages/admin_album/photo_classification/index'),
        meta: { title: '相册分类', icon: 'tree' }
      }
    ]
  },
  {
    path: '/interzone',
    component: Layout,
    redirect: '/interzone/admin_message',
    name: '互动区',
    meta: { title: '互动区', icon: 'people' },
    children: [
      {
        path: '/admin_message',
        name: 'Admin_message',
        component: () => import('@/views/adminpages/interzone/admin_message/index'),
        meta: { title: '留言区', icon: 'message' }
      },
      {
        path: '/admin_game',
        name: 'Admin_game',
        component: () => import('@/views/adminpages/interzone/admin_game/index'),
        meta: { title: '游戏区', icon: 'bug' }
      }
    ]
  },
  {
    path: '/admin_player',
    component: Layout,
    children: [
      {
        path: '/admin_player',
        name: 'Admin_player',
        component: () => import('@/views/adminpages/admin_player/index'),
        meta: { title: '播放器', icon: 'guide' }
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    children: [
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/views/adminpages/statistics/index'),
        meta: { title: '统计', icon: 'chart' }
      }
    ]
  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
