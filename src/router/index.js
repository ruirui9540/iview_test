import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import {routers, otherRouter, appRouter} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history', // 注意: 这个功能只在 HTML5 history 模式下可用。我们还可以设hash来控制滚动行为，定位到某一位置  history去掉了#号，有问题，刷新当前页面会空白，找不到页面，需要服务端配合
    routes: routers
    // linkActiveClass: 'menvscode-active',
    // scrollBehavior (to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    //     // alert(to); // to：要进入的目标路由对象，到哪里去
    //     // alert(from); // from：离开的路由对象，哪里来
    //     // alert(JSON.stringify(savePosition)); // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
    //     if (savePosition) {
    //         return savePosition;
    //     } else {
    //         return {x: 0, y: 0};
    //     }
    // }//已经不支持这个属性了

};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
        next({
            replace: true,
            name: 'locking'
        });
    } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
        next(false);
    } else {
        if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
            next({
                name: 'login'
            });
        } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
            Util.title();
            next({
                name: 'home_index'
            });
        } else {
            const curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name);
            // alert(JSON.stringify(curRouterObj));// eg:{"path":"home","title":{"i18n":"home"},"name":"home_index"}
            if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
                if (curRouterObj.access === parseInt(Cookies.get('access'))) {
                    Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next); // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
                } else {
                    next({
                        replace: true,
                        name: 'error-403'
                    });
                }
            } else { // 没有配置权限的路由, 直接通过
                Util.toDefaultPage([...routers], to.name, router, next);// undefined
                // alert(JSON.stringify(router));
            }
        }
    }
});

router.afterEach((to) => {
    Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
