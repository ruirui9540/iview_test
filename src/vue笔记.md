#1.vue父组件调用子组件事件 通过ref这个是较为简单的一种

https://www.qdfuns.com/article/16039/730b6df29c0eac2947a364edb202dae1.html
调用子组件

<x-chart :id="id2" :option="option2" class="chartCon contrabandChart" ref="xChart"></x-chart>//子组件

父组件:methods:{
    parent(){
    this.$refs.xChart.childFn()
    }
}

子组件：methods:{
    childFn(){
    alert("父组件调用子组件事件");
    }
}

#2.Spread Operator 展开运算符

ES6中另外一个好玩的特性就是Spread Operator 也是三个点儿...接下来就展示一下它的用途。

组装对象或者数组

    //数组
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    console.log(colorful) //[red, yellow, green, pink]
    
    //对象
    const alp = { fist: 'a', second: 'b'}
    const alphabets = { ...alp, third: 'c' }
    console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"
}
有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项

    //数组
    const number = [1,2,3,4,5]
    const [first, ...rest] = number
    console.log(rest) //2,3,4,5
    //对象
    const user = {
        username: 'lux',
        gender: 'female',
        age: 19,
        address: 'peking'
    }
    const { username, ...rest } = user
    console.log(rest) //{"address": "peking", "age": 19, "gender": "female"}
对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边

    const first = {
        a: 1,
        b: 2,
        c: 6,
    }
    const second = {
        c: 3,
        d: 4
    }
    const total = { ...first, ...second }
    console.log(total) // { a: 1, b: 2, c: 3, d: 4 }

#3.ES6 对象提供了 Object.assign()这个方法来实现浅复制。

Object.assign() 可以把任意多个源对象自身可枚举的属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象。在实际项目中，我们为了不改变源对象。一般会把目标对象传为{}

const objA = { name: 'cc', age: 18 } 
const objB = { address: 'beijing' }
const objC = {} // 这个为目标对象
 const obj = Object.assign(objC, objA, objB) // 我们将 objA objB objC obj 分别输出看看 
 console.log(objA) // { name: 'cc', age: 18 }
 console.log(objB) // { address: 'beijing' } 
 console.log(objC) // { name: 'cc', age: 18, address: 'beijing' } 
 console.log(obj) // { name: 'cc', age: 18, address: 'beijing' } // 是的，目标对象ObjC的值被改变了。 // so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{} Object.assign({}, objC, objA, objB)

 #4.ES6反引号``


 #5.https://blog.csdn.net/lgyaxx/article/details/79277944
而如果在组件中使用了v-html，要为myHtml中的标签添加CSS样式，我们需要在写样式的时候添加>>>：
<div class="foo">
        <div v-html="myHtml"></div>
    </div>
.foo >>> img { max-width: 100%; }

/*有些像Sass之类的预处理器无法正确解析>>>。这种情况下可以使用/deep/操作符取代（/deep/是>>>>>的别名，一样可以正常工作）*/

.a /deep/ .b {color:red; }

#6.vue2.0 click点击事件修饰符

stop阻止单击事件冒泡   prevent阻止默认事件

<a v-on:click.stop.prevent="doThat">//修饰符可以串联

#7.iview Form验证
iview表单验证的步骤：

第一步：给 Form 设置属性 rules :rules
第二步：同时给需要验证的每个 FormItem 设置属性 prop 指向对应字段即可 prop=”“
第三步：注意：Form标签里面是 :model
第四步：注意：在Form标签里面必须添加 ref,相当于id,在此范围内的表单验证有效
第五步：在操作保存按钮时，添加方法，对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败。

iview进行多重验证的写法： 
多重验证包括第一要验不能为空，第二要验证限制的一些长度，写正则表达式等

 ruleValidate: {
             goodsNum: [
                     { required: true, message: '数量不能为空', trigger: 'blur' },
                     { type: 'string',pattern:/^(([1-9]\d{0,3})|0)(\.\d{0,2})?$/, message:'数量应为正浮点数且不超过9999.99', trigger:'blur'},
                        ],
      }


#8. 替换某一个属性
<!-- 
1.循环
2字符串的indexOf
eg: idStr = ‘\"id\":‘+param+‘,‘; /**param是传入的变量，根据id去查找对应的节点*/
let str = JSON.stringify(this.baseData);
let index = str.indexOf(idStr);  /**找出idStr字符串的下标*/
let reg = new RegExp(‘\"id\":‘ + param + ‘,‘);
/**其后插入selected属性，选中该节点*/
let news = str.replace(reg, idStr + ‘\"selected\": true,‘);
this.baseData = JSON.parse(news);
  -->

  #9.router

            router.beforeEach((to, from, next) => { })

            router.afterEach((to, from) => {  // ...})

            router.beforeeach 是进入前触发的 要加上第三个参数的回调的执行 才能往下进行
            
            router.aftereach 是进入后触发的 不用加上第三个参数的回调执行 就可以执行

  ##9.1 router query params传参

  ###params、query是什么？

    params：/router1/:id ，/router1/123，/router1/789 ,这里的id叫做params

    query：/router1?id=123 ,/router1?id=456 ,这里的id叫做query。

路由界面：

        router.js:

        路由设置这里，当你使用params方法传参的时候，要在路由后面加参数名，并且传参的时候，参数名要跟路由后面设置的参数名对应。使用query方法，就没有这种限制，直接在跳转里面用就可以。

        '注意'：如果路由上面不写参数，也是可以传过去的，但不会在url上面显示出你的参数，并且当你跳到别的页面或者刷新页面的时候参数会丢失（如下图所示），那依赖这个参数的http请求或者其他操作就会失败。

params传参和query传参有什么区别： 

1、用法上的
刚query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。

注意接收参数的时候，已经是$route而不是$router了哦！！

2、展示上的

query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示

3、params是路由的一部分,必须要有。query是拼接在url后面的参数，没有也没关系。

params一旦设置在路由，params就是路由的一部分，如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。

比如：跳转/router1/:id

<router-link :to="{ name:'router1',params: { id: status}}" >正确</router-link>
<router-link :to="{ name:'router1',params: { id2: status}}">错误</router-link>
4、params、query不设置也可以传参，params不设置的时候，刷新页面或者返回参数会丢失，这一点的在上面说过了

##9.2 vue-router 的重定向-redirect

开发中有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数。

redirect基本重定向
我们只要在路由配置文件中（/src/router/index.js）把原来的component换成redirect参数就可以了。我们来看一个简单的配置。

重定向时传递参数
我们已经学会了通过url来传递参数，那我们重定向时如果也需要传递参数怎么办？其实vue也已经为我们设置好了，我们只需要在ridirect后边的参数里复制重定向路径的path参数就可以了。可能你看的有点晕，我们来看一段代码：

{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}

##9.3别名alias

/a的别名是/b，意味着，当用户访问/b时，URL会保持/b，但是路由匹配为/a，就像用户访问/a一样。

对应的路由配置为：

　const router = new VueRouter({
    　routes: [
        　{ path: '/a', component:A, alias: '/b' }
        ]
    })

别名的功能让我们可以自由地将ui结构映射到任意的URL, 而不是受限于配置的嵌套路由结构

###9.4 路由变化页面数据不刷新问题

使用场景：依赖路由的params或query参数获取的（ajax卸载created生命周期里），因为路由懒加载，退出页面在进入另一个页面并不会运行created组件的生命周期，导致页面数据还是上一个页面的数据
解决方法：watch监听路由是否变化

 watch: {
  '$route' (to, from) { //监听路由是够变化
     if(this.$route.params.pageId){//是否有页面Id
     //获取页面数据
      }
   }
}

#10

 this.$nextTick(function() {
                // DOM 更新了
                console.log('finished tick5-1 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })

#11 路由异步组件的好处

页面初始化加载的时候只会加载需要的那个组件相关的内容，没切换到的那个组件不加载，使页面加载的速度加快。同时，每个组件加载过一次之后切换出再切回来不会重复加载相关内容和重复执行渲染

异步组件方法一

原代码：import b from './components/b.vue'

异步：const b = resolve => require(['./components/b.vue'], resolve)

#12 \'@/\'路径和\'./\'路径是什么意思

在vue项目中，我们常遇到以下路径引用的方式：

@import './common/var.scss';

@import '../../scss/common/var';

@import '~@/scss/common/var';

其中，

./ 表示当前目录下
../ 表示父级目录下
@/ 是webpack设置的路径别名，代表什么路径，要看webpack的build文件夹下webpack.base.conf.js里面对于@是如何配置

#13.在vue-router中path写/和/*有什么区别

假如你的项目运行在http://127.0.0.1:8080 那么/匹配的是http://127.0.0.1:8080/ 而/*可以匹配http://127.0.0.1:8080/home、http://127.0.0.1:8080/categorys、http://127.0.0.1:8080/mine等等所有的路由


9. store的用法

一、状态管理（vuex）简介

        vuex是专为vue.js应用程序开发的状态管理模式。它采用集中存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex也集成刀vue的官方调试工具devtools extension，提供了诸如零配置的time-travel调试、状态快照导入导出等高级调试功能。



二、状态管理核心

状态管理有5个核心，分别是state、getter、mutation、action以及module。分别简单的介绍一下它们：

1、state

        state为单一状态树，在state中需要定义我们所需要管理的数组、对象、字符串等等，只有在这里定义了，在vue.js的组件中才能获取你定义的这个对象的状态。

2、getter

        getter有点类似vue.js的计算属性，当我们需要从store的state中派生出一些状态，那么我们就需要使用getter，getter会接收state作为第一个参数，而且getter的返回值会根据它的依赖被缓存起来，只有getter中的依赖值（state中的某个需要派生状态的值）发生改变的时候才会被重新计算。

3、mutation

        更改store中state状态的唯一方法就是提交mutation，就很类似事件。每个mutation都有一个字符串类型的事件类型和一个回调函数，我们需要改变state的值就要在回调函数中改变。我们要执行这个回调函数，那么我们需要执行一个相应的调用方法：store.commit。

4、action

        action可以提交mutation，在action中可以执行store.commit，而且action中可以有任何的异步操作。在页面中如果我们要嗲用这个action，则需要执行store.dispatch

5、module

        module其实只是解决了当state中很复杂臃肿的时候，module可以将store分割成模块，每个模块中拥有自己的state、mutation、action和getter。






