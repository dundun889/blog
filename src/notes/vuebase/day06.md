# Day06

## 内容回顾

路由

axios

async

## 黑云音乐

### 项目模块及用到的知识点分析

模块 & 知识点：

- App.vue：左边菜单、右边的 router-view、下边的音频播放子组件
- 发现音乐：轮播图(element-ui)、v-for
- 推荐歌单：v-bind、插值表达式、v-for、watch
- 歌单详情：路由传参(query)、v-bind、插值表达式、v-for、全局过滤器
- 最新音乐：watch、v-for
- 最新MV：watch、v-for、全局过滤器
- MV详情：video、v-bind、插值表达式、全局过滤器、v-for、watch
- 音频播放组件：v-bind、bus传值
- 其它：axios(挂载到Vue原型)

### 项目实现思路分析

1. 生成项目

2. 把项目中的**路由**配置好

   - 创建必要的一些页面（发现音乐、推荐歌单、最新音乐、最新MV）

   - 在`src`创建一个`router`里面写一个`index.js`,写上路由代码（创建路由对象、配置规则、导出）

     ```js
     // 导包
     import Vue from 'vue'
     import VueRouter from 'vue-router'
     
     // 在Vue中使用路由
     Vue.use(VueRouter)
     
     // 导入页面
     // 发现音乐
     import Discovery from '@/views/Discovery'
     // 推荐歌单
     import Playlists from '@/views/Playlists'
     // 最新音乐
     import Songs from '@/views/Songs'
     // 最新MV
     import Mvs from '@/views/Mvs'
     // 404
     import NotFound from '@/views/NotFound'
     
     // 创建路由对象
     const router = new VueRouter({
       // 这个地方的配置，就是我们需要写的
       // routes 这个单词就叫这个，不要写错
       routes: [
         { path: '/discovery', component: Discovery },
         { path: '/', redirect: '/discovery' }, // 重定向
         { path: '/playlists', component: Playlists },
         { path: '/songs', component: Songs },
         { path: '/mvs', component: Mvs },
         { path: '*', component: NotFound }
       ]
     })
     
     // 导出
     export default router
     ```

   - 在`main.js`中导入路由对象，并且注入到根实例中

     ```js
     import Vue from 'vue'
     import App from './App.vue'
     
     Vue.config.productionTip = false
     
     // 导入路由
     import router from './router'
     
     new Vue({
       render: h => h(App),
       router // 注入到根实例中，让我们整个应用拥有路由的功能
     }).$mount('#app')
     ```

3. 在`App.vue`中写代码

   - 实现左边的导航菜单（`router-link`）

   - 实现右边的路由出口（`router-view`）

   - 实现下边的音频子组件显示(`MyAudio.vue`)

     ```vue
     <template>
       <div class="index-container">
         <!-- 左边 -->
         <div class="nav">
           <ul>
             <li>
               <!-- 当我们router-link选中的时候，会自动给我们添加router-link-exact-active router-link-active -->
               <router-link to="/discovery">
                 <span class="iconfont icon-find-music">&nbsp;发现音乐</span>
               </router-link>
             </li>
             <li>
               <router-link to="/playlists">
                 <span class="iconfont icon-music-list">&nbsp;推荐歌单</span>
               </router-link>
             </li>
             <li>
               <router-link to="/songs">
                 <span class="iconfont icon-music">&nbsp;最新音乐</span>
               </router-link>
             </li>
             <li>
               <router-link to="/mvs">
                 <span class="iconfont icon-mv">&nbsp;最新MV</span>
               </router-link>
             </li>
           </ul>
         </div>
         <!-- 右边 -->
         <div class="main">
           <!-- 路由出口 -->
           <router-view></router-view>
         </div>
         <!-- 下边 -->
         <my-audio />
       </div>
     </template>
     
     <script>
     // 导入MyAudio子组件
     import MyAudio from '@/components/MyAudio'
     export default {
       components: {
         MyAudio
       }
     }
     </script>
     
     <style lang="less" scoped>
     // scoped 代表样式私有（vue解析的时候，给我们添加了一些自定义的属性）
     // 应用场景：当我们很多个页面中都有同一个名字的样式的时候，我们就需要加上 scoped
     // scoped 有一个特定，只能作用域我们自己写的代码，如果你使用了element-ui等第三方的，它不会作用到
     // 第三方的ui组件中
     // 注意：不是说所有情况下，我们都需要加上scoped，我们的类名跟其它页面中冲突了，我们才需要加，并且使用
     // 了第三方UI组件的时候，我们也不加，比如 发现音乐
     .index-container {
       height: 100%;
       display: flex;
       .nav {
         background-color: #ededed;
         width: 200px;
         height: 100%;
         li {
           height: 60px;
           cursor: pointer;
           display: flex;
           align-items: center;
           &:hover {
             background-color: #e7e7e7;
           }
           .iconfont {
             margin-right: 10px;
             font-size: 20px;
           }
           a {
             color: black;
             padding-left: 30px;
             font-size: 18px;
             line-height: 60px;
             width: 100%;
             height: 100%;
             &.router-link-active {
               color: #dd6d60;
               .iconfont {
                 color: #dd6d60;
               }
             }
           }
         }
       }
       .main {
         flex: 1;
         overflow-y: scroll;
         padding: 10px 20px;
         padding-bottom: 60px;
         > div {
           max-width: 1100px;
           margin: 0 auto;
         }
       }
     }
     </style>
     ```

4. 在写`App.vue`的过程中，发现样式不符合要求，设置一下全局样式，在`src`目录下创建一个`styles/global.less`，并且还需要在`main.js`中去导入(为了让webpack打包的时候，知道全局样式的存在)

   ```less
   body,
   html {
     height: 100%;
     margin: 0;
     padding: 0;
     font-weight: 400;
     font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
       Microsoft YaHei, '\5FAE\8F6F\96C5\9ED1', Arial, sans-serif;
   }
   * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     transition: 0.5s;
   }
   a {
     text-decoration: none;
     color: #595959;
   }
   ul,
   ol {
     list-style: none;
   }
   .iconfont {
     cursor: pointer;
   }
   .el-loading-spinner{
     .el-loading-text,.el-icon-loading{
       color:#dd6d60
     }
   }
   .el-table {
     border-bottom: none;
     border-collapse: collapse;
     &.playlit-table {
       th:nth-child(2) {
         width: 130px;
       }
       th:nth-child(3) {
         width: 300px;
       }
       th:nth-child(4) {
         width: 200px;
       }
     }
     tbody {
       border-bottom: none;
     }
     td {
       border-bottom: none;
       &:first-child {
         padding-left: 10px;
       }
     }
     th {
       font-weight: normal;
       &:first-child {
         width: 50px;
       }
       &:nth-child(2) {
         width: 300px;
       }
       &:nth-child(3) {
         width: 200px;
       }
     }
     .song-wrap {
       > span {
         margin-top: 20px;
         display: inline-block;
         color: #bebebe;
       }
       .icon-mv {
         padding-left: 5px;
         color: #dd6d60;
       }
     }
     .img-wrap {
       position: relative;
       width: 70px;
       height: 70px;
       img {
         width: 70px;
         height: 70px;
         border-radius: 5px;
       }
       .icon-play {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 25px;
         height: 25px;
         color: #dd6d60;
         font-size: 12px;
         border-radius: 50%;
         display: flex;
         align-items: center;
         justify-content: center;
         background: rgba(255, 255, 255, 0.8);
         &::before {
           transform: translateX(1px);
         }
       }
     }
     tr {
       &:nth-child(2n) {
         background-color: #fafafa;
       }
       &:hover {
         background-color: #f5f7fa;
       }
     }
   }
   ```

5. 我们项目中用到的字体图标不是通过本地加载的，我们是直接加载的线上地址，我们在`public/index.html`中，通过link标签引入

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width,initial-scale=1.0" />
       <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
       <title><%= htmlWebpackPlugin.options.title %></title>
       <!-- 导入 iconfont的字体图标 -->
       <link
         rel="stylesheet"
         href="//at.alicdn.com/t/font_1654044_7fb6pz0mo1.css"
       />
     </head>
     <body>
       <noscript>
         <strong
           >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
           properly without JavaScript enabled. Please enable it to
           continue.</strong
         >
       </noscript>
       <div id="app"></div>
       <!-- built files will be auto injected -->
     </body>
   </html>
   ```

6. 全局axios的配置（npm i axios），也写在`main.js`中

   - 基准路径

   - 拦截器：请求拦截器（加载提示）、响应拦截器（返回需要的data）

     ```js
     // 配置axios
     import axios from 'axios'
     // 设置基准路径
     axios.defaults.baseURL = 'http://huangjiangjun.top:9000/'
     // 设置拦截器
     // 添加请求拦截器
     axios.interceptors.request.use(
       function (config) {
         // 在发送请求之前做些什么
         return config
       },
       function (error) {
         // 对请求错误做些什么
         return Promise.reject(error)
       }
     )
     
     // 添加响应拦截器
     axios.interceptors.response.use(
       function (response) {
         // 对响应数据做点什么
         return response.data
       },
       function (error) {
         // 对响应错误做点什么
         return Promise.reject(error)
       }
     )
     // 把axios挂载到Vue的原型上
     // 因为Vue实例中，大部分属性都已`$`开头，所以我们写得时候，也按照这个预定
     Vue.prototype.$http = axios
     ```

7. 发现音乐、推荐歌单、歌单详情、最新音乐、最新MV、MV详情各自实现

### 生成项目

使用`@vue/cli`生成项目，具体详见第四天的笔记

### 所依赖的包

- vue：核心包
- vue-router：路由
- axios：网络请求
- element-ui：UI组件库
- moment：时间处理
- less：解析less

## 发现音乐

### 获取轮播图数据

```vue
<script>
export default {
  name: 'Discovery',
  data () {
    return {
      bannerList: [] // 轮播图的列表
    }
  },
  mounted () {
    // 获取轮播图数据
    this.getBannerListData()
  },
  methods: {
    async getBannerListData () {
      const res = await this.$http.get('banner')

      this.bannerList = res.banners
    }
  }
}
</script>
```

### 渲染轮播图

```vue
<template>
  <div class="discovery-container">
    <!-- 1.0 渲染轮播图 -->
    <el-carousel type="card" :interval="3000" arrow="always">
      <el-carousel-item v-for="item in bannerList" :key="item.imageUrl">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
```

### 获取推荐歌单数据

```vue
<script>
export default {
  name: 'Discovery',
  data () {
    return {
      bannerList: [], // 轮播图的列表
      // 推荐歌单
      recommendList: [],
      // 最新音乐
      songList: [],
      // 推荐MV
      mvList: []
    }
  },
  mounted () {
    // 获取轮播图数据
    this.getBannerListData()
    // 获取推荐歌单的数据
    this.getRecommendListData()
    // 获取最新音乐数据
    this.getSongListData()
    // 获取最新MV
    this.getMvListData()
  },
  methods: {
    async getBannerListData () {
      const res = await this.$http.get('banner')

      this.bannerList = res.banners
    },
    async getRecommendListData () {
      const res = await this.$http.get('personalized', {
        params: {
          limit: 10
        }
      })

      this.recommendList = res.result
    },
    async getSongListData () {
      const res = await this.$http.get('personalized/newsong')

      this.songList = res.result
    },
    async getMvListData () {
      const res = await this.$http.get('personalized/mv')

      this.mvList = res.result
    }
  }
}
</script>
```

> 渲染推荐歌单、最新音乐、最新MV

```vue
<template>
	<!-- 2.0 渲染推荐歌单 -->
    <div class="recommend">
      <h3 class="title">推荐歌单</h3>
      <div class="items">
        <div class="item" v-for="item in recommendList" :key="item.id">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 3.0 渲染最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="items">
        <div class="item" v-for="item in songList" :key="item.id">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 渲染最新MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="item in mvList" :key="item.id">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" /><span
              class="iconfont icon-play"
            ></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{ item.playCount | formatCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{ item.name }}</div>
            <div class="singer">{{ item.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
</template>
```

> 对播放次数进行过滤处理

条件：当我们的次数大于10，我们就显示多少万，并且我们显示次数可能其他地方也需要用到，所以我们把他们定义成全局过滤器，写在`main.js`中

```js
// 全局过滤器
Vue.filter('formatCount', val => {
  if (val / 10000 > 10) {
    return parseInt(val / 10000) + '万'
  } else {
    return val
  }
})
```

## 推荐歌单

> 获取数据

```vue
<script>
export default {
  name: 'Playlists',
  data () {
    return {
      // 顶部的标题
      topName: '',
      // 顶部的描述
      topDesc: '',
      // 顶部的封面
      topCover: '',
      // 选中分类
      cat: '全部',
      // 歌单所有的分类
      cats: [
        '全部',
        '欧美',
        '华语',
        '流行',
        '说唱',
        '摇滚',
        '民谣',
        '电子',
        '轻音乐',
        '影视原声',
        'ACG',
        '怀旧',
        '治愈',
        '旅行'
      ],
      // 精品歌单列表
      topPlayLists: []
    }
  },
  mounted () {
    // 获取顶部精品歌单的数据
    this.getHighqualityData()
    // 获取精品歌单列表
    this.getTopPlayListsData()
  },
  watch: {
    cat () {
      // 当分类发生改变之后，重新去根据新的分类，加载新的数据
      this.getTopPlayListsData()
    }
  },
  methods: {
    async getHighqualityData () {
      const res = await this.$http.get('top/playlist/highquality?limit=1')

      this.topName = res.playlists[0].name
      this.topDesc = res.playlists[0].description
      this.topCover = res.playlists[0].coverImgUrl
    },
    async getTopPlayListsData () {
      const res = await this.$http.get('top/playlist', {
        params: {
          offset: 0,
          limit: 10,
          cat: this.cat
        }
      })

      this.topPlayLists = res.playlists
    }
  }
}
</script>
```

> 渲染

```vue
<template>
  <div class="playlists-container">
    <!-- 渲染精品歌单 -->
    <div class="top-card">
      <div class="icon-wrap">
        <img :src="topCover" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">{{ topName }}</div>
        <div class="info">
          {{ topDesc }}
        </div>
      </div>
      <img :src="topCover" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <!-- 渲染歌单分类及歌曲列表 -->
    <div class="tab-container">
      <!-- 分类 -->
      <div class="tab-bar">
        <span
          v-for="item in cats"
          :key="item"
          :class="['item', item === cat ? 'active' : '']"
          @click="cat = item"
          >{{ item }}</span
        >
      </div>
      <!-- 歌曲列表 -->
      <div class="tab-content">
        <div class="items">
          <div class="item" v-for="item in topPlayLists" :key="item.id">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount | formatCount }}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" /><span
                class="iconfont icon-play"
              ></span>
            </div>
            <p class="name">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

> 监听 cat 改变，发请求，重新渲染

```vue
<template>
	<div>
        <span
          v-for="item in cats"
          :key="item"
          :class="['item', item === cat ? 'active' : '']"
          @click="cat = item"
          >{{ item }}</span
        >
    </div>
</template>

<script>
	export default {
        watch: {
            cat () {
              // 当分类发生改变之后，重新去根据新的分类，加载新的数据
              this.getTopPlayListsData()
            }
        }
    }
</script>
```

