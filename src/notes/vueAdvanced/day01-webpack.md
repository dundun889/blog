# day01-webpack

## 反馈

1. 飞哥讲的非常好 移动端学到很多

1. 还以为有多难

1. 打包上线会讲吗？

   1.	npm run build

1. 老师，前端初中级分别要达到什么水平啊，vue我们得熟悉到什么程度呢？

   1.	10000  中级

1. 面试的时候真话和假话该怎么说

   1.	项目问题:你做该项目碰到的最大的难点 
   1.	知识点:你感觉到别人水平很高,不会就说不会
   1.	100      50-70  60  100  工资问题,合适:10    13K左右     

1. 就这就学完了？都学了什么？飞哥能不能给我们发个知识点梳理的资料

1. 舍不得飞飞老师。。。。

1. 对right error 这两个类的 里面的 判断 没能理解

1. 6

1. 感谢飞哥的陪伴，下阶段继续加油，

1. 逻辑很简单！整个学下来我觉得就样式最难，最费心！

1. 董老师讲的特棒，喜欢这种风格。路转粉

1. 老师啥时候教我们解决更复杂的git冲突操作

1. 页面切换依然保留之前的滚动距离的问题，在前置守卫中from里记录滚动距离，在后置守卫的to路由元中再拿切换回来的滚动值，可以拿到，但滚动距离直接滚到底部了，这是为什么

   1. 后置守卫 已进入相应路由

   1.	生命周期

1. 飞飞老师，请问一下，PC适合用弹性布局吗？因为再PC端的时候 CSS都是CV的，就想请问一下 以后工作是PC端的话，弹性布局是否适用

   1.	ie8不适用于vue

1. 飞哥 你觉得如果想先出去锻炼锻炼自己的话工资压到多少合适呢

   1.	如果面试你的是项目经理,越低他越想要
   1.	如果前端 负责人:看你运气,       10000是 较低  



## 打包

- vue.config.js修改配制

  -  ~~~
    module.exports = {
       publicPath:"./"
    }
    ~~~

- 执行打包命令

  -   npm run build

- 将dist目录下的文件压缩发给相应人员放到服务器

### 前瞻

webpack：

+ 基本概念
+ 基本使用
+ 三项：
  + 配置项
  + loader
  + plugin

## webpack 基本概念

### webpack 基本概念 - 三个问题：

为什么要学习 webpack

+ 1.0 webpack 在工作其实用的不多，但是在面试中出的次数特别多。
+ 2.0 webpack 它是 vue-cli 的底层实现原理，学习了它，可以更加方便的去使用 vue-cli

webpack 的作用

+ 就是 vue-cli 实现的底层的原理
  + vue-cli 搭建的项目有哪些功能：
    + 可以运行为一个服务器
    + 可以进行实时更新
    + 可以解析 css 文件 
    + ....
  + 上述的这些功能，其实都是 webpack 来实现的

webpack 怎么用：

+ 用法比较复杂，略

### webpack 基本概念 - 准备工作：

> 整个 webpack  的学习我们会以一个例作为主线来完成。

案例：

+ 有一个输入框,我们输入了一些信息,刷新的时候输入框中信息还存在

### webpack 基本概念 - 概念

+ 官网：
  + [中文](https://www.webpackjs.com/)
  + [英文](https://webpack.js.org/)
+ 作用：用来打包资源
  + 表
  + 样式
  + 脚本
  + 图片
  + 资源
+ 打包流程
  + 模块化的项目，以一个 `js` 文件为入口，分别导入其它的文件（.js，图片， 样式.....）形成了一个模块化的项目。webpack 可以将这个模块化的模块进行打包，将 js & 样式 & 图片进行打包，打包之后可以直接运行在浏览器上。

## webpack 的使用

> webpack 我们需要使用它来将我们的项目进行打包，运行到浏览器中

###  webpack 的使用 - 步骤

[传送门](https://www.webpackjs.com/guides/installation/#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85)

步骤：

+ 0.0 初始化项目（生成 `package.json` 文件）

  ```bash
  npm init -y
  ```

+ 1.0 安装 webpack

  ```bash
  npm install --save-dev webpack // 安装 webpack 
  npm install --save-dev webpack-cli@3.3.11 // 安装 webpack 的 cli
  ```

+ 2.0 配置 `package.json`

  ```json
  {
  	"scripts": {
  		"start": "webpack ./要打包的文件名"
  	}
  }
  ```

+ 3.0 打包

  ```bash
  npm run start
  ```

注意点：

+ 1.0 一旦运行 `npm run start` 会将 `src` 目录下所有的内容打包到 `dist` 目录中
+ 2.0 在`index.html` 中不再导入 `src` 目录下的文件，而是导入 `dist` 目录下的内容
+ 3.0 `src` 下的文件依旧是模块化的项目， `dist` 下的是通过 `webpack` 打包之后的结构，不再是模块化的结构了（浏览器可以直接运行。）

### webpack 的使用 - 使用配置文件

> 由于将来在项目中可以修改的参数非常多，如果分散在不同的地方，要修改就太麻烦了。为了解决这样的问题，可以使用 webpack 中的配置文件来管理管理这些需要修改的参数

[传送门](https://www.webpackjs.com/guides/getting-started/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

步骤：

+ 1.0 在项目的根目录下创建一个文件名为： `webpack.config.js`

+ 2.0 在配置文件中添加代码

  ```js
  const path = require('path');
  
  module.exports = {
    entry: './src/main.js',
  };
  ```

+ 3.0 配置`package.json` 文件

  ```bash
  {
  	"scripts": {
  		"start": "webpack --config webpack.config.js",		
  	}
  }
  ```

+ 4.0 重新打包

  ```bash
  npm run start
  ```

注意点：

+ 1.0 `npm run start`：

  + `npm run` 要运行 `package.json` 中 `scripts` 下面的指令
  + `start`：找到 `package.json` 中的 `scripts` 下面的 `start` 对应的指令，并且执行

+ 2.0  `webpack --config webpack.config.js`

  ![1585711653944](.\img\1585711653944.png)

## 配置项

> 要 webpack 中配置项有很多，我们不会全部讲完，中会将一些比较常用的配置项列出来

### 配置文件 - 入口

> 设置项目的入口文件(入口的js)

![1585712442911](.\img\1585712442911.png)

### 配置文件 - 出口

>  设置项目打包后生成的文件名

![1585712776695](.\img\1585712776695.png)

### 配置文件 - 项目的模式

> 项目模式的区分：
>
> > 开发模式：
> >
> > > 概念：程序员在这个过程中进行代码的开发
> > >
> > > 特点：
> > >
> > > > 保证代码的完整性，以方便程序进行代码的修改
> >
> > 生产模式：
> >
> > > 概念：程序员的代码已经开发完成，项目已经发布上线了，已经投入生产使用
> > >
> > > 特点：
> > >
> > > > 代码运行稳定，代码体积尽可能的小（删除空格换行缩进）

mode：（项目的模式）

+  development：开发模式
+  production：生成模式（默认值）

![1585713378978](.\img\1585713378978.png)

### 配置文件 - 解析

resolve：

+ alias： 别名

  >  @ ：表示的是 src 目录 ,它就是用 alias 来配置的

  ![1585740816920](.\img\1585740816920.png)

+ extensions：可省略的后缀名

  > 在导入文件时，每个文件都有自己的后缀，可通过它来配置可省略的后缀
  >
  > 默认情况下 js 后缀可以省略（除了 js 之外其它的都不能省略）

  ![1585741152012](.\img\1585741152012.png)

### 配置文件 - 源码映射

> 打包后的项目报错信息是不准确的，可以使用源码映射来解决这个问题

开启源码映射：

![1585741913812].(.\img\1585741913812.png)

特点：

+ 1.0 一旦项目开启源代码映射，会将原本的代码原本信息也保存一份到打包的目录下。
  + 问题：在加载资源时， main.js 太大了，有一部分没有意义，会消耗性能。
  + 解决方案：
    + 将源码生成到别的文件中： `devtool: 'source-map'`

注意点：

+ 项目的配置文件其实是基于 `nodejs` 的
+ 我们说 `webpack`是基于 `nodejs` 的

总结：

+ webpack 中的配置项其实有很多： [传送门](https://www.webpackjs.com/configuration/)
+ 我们只是挑选了其中用的比较多的来进行讲解，如果后续我们遇到其它的配置可以通过传送门去查看

## loader

> 由于现在写的项目只有 js 文件，webpack 默认是可以打包 js 文件的。但是 webpack 默认仅仅只能打包 js 文件，无法打包     其它文件（图片，样式，字体 ...）.如果想要打包其它的文件，可以借助 webpack 中的 loader 来进行打包。

### loader - 作用

作用：

+ webpack 默认只能打包 js 文件，无法打包其它文件（样式，字体，图片）。如果想要打包其它的文件，可以借助 webpack 中的 loader 来进行打包。

特点：

+ 所有的 loader 都是第三方包，可以帮助 webpack 打包其它资源

### loader - style-loader&css-loader

> 可以用来帮助 webpack 打包  .css 文件

步骤：

+ 1.0 安装打包 css 的 loader

  ```bash
  npm install --save-dev style-loader css-loader
  ```

+ 2.0 配置 Loader (webpack.config.js)

  ```js
  module.exports = {
  	entry: '',
  	output: {},
  	mode: '',
  	module: {
  		rules: [
  			{ 
  				test: /\.css$/,
  				use: [
  					'style-loader', // 将样式使用到页面中
  					'css-loader' // 将样式打包到 dist 目录下
  				]
              }
  		]
  	}
  }
  ```

+ 3.0 重新打包 `npm run start`

注意点：

+ 1.0 大部分的 loader 在使用时步骤都是三步： a. 下载 loader  b.配置 loader  c.重新打包
+ 2.0 打包样式时用到了 style-loader & css-loader：
  + css-loader：将 css 中的样式打包到了 `dist` 目录下的文件中了
  + style-loader：将打包后的 css 文件在运行时，添加到页面的头部中以 style 标签进行包裹
+ 3.0 style-loader 与 css-loader 的书写顺序不能改变

### loader - less-loader

> 在写项目时，一般会使用 less 语法来书写样式。less 如果需要打包要借助第三方包： less-loader

使用 less

+ 在 `style` 中创建一个 less.less
+ 添加 less 的样式
+ 在 `src/index.js` 中导入这个 less

打包 less 的步骤：

+ 1.0 安装第三方包

  ```bash
  npm install --save-dev less-loader less
  ```

+ 2.0 配置 loader (webpack.config.js 中完成的)

  ```bash
  module.export = {
  	module: {
  		rules: [{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader',
  				'less-loader'
  			]
  		}]
  	}
  }
  ```

+ 3.0 重新打包

### loader - sass-loader

> 用来打包 sass 文件的

使用 sass 文件：

+ 创建一个 sass 文件（注意点：所有的 sass 文件为了防止跟其它文件冲突，后缀名统一写为 `.scss` ）
+ 完成 sass 的代码
+ 在 `index.js` 中使用

打包 sass 的步骤：

+ 1.0 下载第三方包

  + ~~~node
    npm i node-sass sass-loader -D
    ~~~

+ 2.0  配置第三方包

  + ~~~js
    module.export = {
    	module: {
    		rules: [{
    			test: /\.scss$/,
    			use: [
    				'style-loader',
    				'css-loader',
    				'sass-loader'
    			]
    		}]
    	}
    }
    ~~~

  + 

+ 3.0 重新打包

### loader - file-loader

> 可以用来打包图片

打包图片：

+ 使用图片
  + 在 html 中添加一个容器
  + 给容器设置样式：设置一个背景图片
+ 打包图片：
  + 1.0 下载第三方包
  
    + ~~~
      npm i file-loader -D
      ~~~
  
  + 2.0 配置第三方包
  
    - ~~~
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                  //配制输出图片的目录
                    outputPath: './assets./img'
                  }
                }
              ]
            },
      ~~~
  
    - 
  
  + 3.0 重新打包
  
  

### loader - babel-loader

> 将 es6 语法打包为 es5 语法

打包 es6 为 es5

+ 1.0 下载第三方包

  ```bash
  npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env --save-dev
  ```

+ 2.0 配置第三方包

  ```js
  module: {
    rules: [
      {
        test: /\.js$/, // 将后缀名为 js 的文件进行高版本js转换成低版本js
        exclude: /node_modules/, // 处理的目录不包括 node_modules
        use: {
          loader: 'babel-loader', // 使用 babel-loader 来处理
          options: {
            presets: ['@babel/preset-env'] // 固定写法
          }
        }
      }
    ]
  }
  ```

+ 3.0 重新打包

### loader - vue-loader

> 默认情况下 webpack 无法打包后缀名为 .vue 的文件、如果要打包需要借助第三方包： vue-loader

使用 .vue 文件：

+ 1.0 下载第三方包： vue
+ 2.0 创建一个 `App.vue` 文件
+ 3.0 完成 App.vue 文件的内容
  + template & style & script
+ 4.0 在 main.js 中
  + 导入 Vue
  + 导入 App.vue 
  + 创建一个 vue 实例
  + 将  App.vue 挂载到 vue 实例中

打包 .vue 的过程：

+ 1.0 安装第三方包

  ```bash
  npm install -D vue-loader vue-template-compiler
  ```

+ 2.0 配置 Loader （webpack.config.js）

  ```js
  // 导入 Loader
  const VueLoaderPlugin = require('vue-loader/lib/plugin')
  
  module.exports = {
    module: {
      rules: [
        // 配置 loader
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      // 将 vue-loader 作为插件来使用
      new VueLoaderPlugin()
    ]
  }
  ```

+ 3.0 重新打包 `npm run start`

注意点：

+ 1.0 vue-loader 的说明文档不在 webpack 中，因为 vue-loader 是属于 vue 的全家桶系列。如果要找去 vue 的官网中去找

总结：

+ loader 与配置项一样，也有很多不同的 loader， 我们只是学习了一些常用的 loader，其它的可以参考 [传送门](https://www.webpackjs.com/loaders/)
+ webpack：
  + 配置项：可以用来配置项目的相关信息
  + loader：可以用帮助 webpack 打包额外的资源

## 插件

> 给 webpack 提供额外的功能

### 插件 - HtmlWebpackPlugin

> 修改内容之后，重新打包好 dist 目录下的内容之后，还需要将 index.html 从根目录下拷贝到 dist 目录下，太麻烦了。
>
> 问题：我不希望每次重新打包 dist 目录之后再将 index.html 拷贝到 dist 目录下。
>
> 解决方案：可以使用 HtmlWebpackPlugin

作用：可以在 dist 目录中自动生成一个 html 文件

使用步骤：

+ 1.0 下载插件

  ```bash
  npm install --save-dev html-webpack-plugin
  ```

+ 2.0 配置插件（webpack.config.js 中完成的）

  ```js
  // 导入插件
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  // 配置插件
  module.exports = {
      plugins: [
          new HtmlWebpackPlugin({
              filename: '', // 生成的静态文件名称
              template: '' // 以谁为模板生成的静态页面
          })
      ]
  }
  ```

+ 3.0 重新打包: `npm run start`

注意点：

+ 如果不设置其它属性，默认会生成一个 html 文件
  + 这个文件中没有结构 & 样式
  + 它默认导入了生成的 js 文件

### 插件 - clean-webpack-plugin

> 每次重新打包项目时一定要删除 dist 目录
>
> 问题：每次都删除，太麻烦了。解决这个问题可以使用：clean-webpack-plugin

作用：用来清除 dist 目录

步骤：

+ 1.0 下载插件

  ```bash
  npm install clean-webpack-plugin --save-dev
  ```

+ 2.0 配置插件

  ```js
  // 导入插件
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  // 配置插件
  module.exports = {
   	plugins:[
          new CleanWebpackPlugin()
      ]
  }
  ```

+ 3.0 重新打包

注意点：

+ 1.0 插件会帮助自动清除 dist 目录
+ 2.0 以后如果有能力看文档时，尽量用英文文档

### 插件 - webpack-dev-server

> 可以开启一个服务器，具有实时更新的功能

作用：可以开启一个服务器，具有实时更新的功能

步骤：

+ 1.0 下载插件

  ```bash
  npm install --save-dev webpack-dev-server
  ```

+ 2.0 配置插件（webpack.config.js）

  ```js
  module.exports = {
  	devServer: {
      	contentBase: './dist'
  	},
  }
  ```

+ 3.0 配置指令：(package.json)

  ```json
  {
  	"scripts": {
  		"start": "webpack --config webpack.config.js",
  		"serve": "webpack-dev-server --config webpack.config.js --open"
  	}
  }
  ```

+ 4.0 开启服务器：`npm run serve`

注意点：

+ 开启服务器之后，修改完代码之后是不需要自己重新打包， 手动刷新页面的（服务器可以做到时实更新）

### 插件 - 模块的热替换

> 修改 css 之后，可以让页面不 刷新直接更新修改的样式

```js
module.exports = {
	devServer: {
    	contentBase: './dist',
    	hot: true, // 开启模块的热替换
	}
}
```

注意点：

+ 配置文件中的配置项发生修改之后需要重启服务才能生效

总结：

+ 插件的作用是给 webpack 提供额外的功能
+ 插件的种类不单单只有以上几种还有很多，详情请见： [传送门](https://www.webpackjs.com/plugins/)
+ webpack
  + 配置项：配置项目中的相关信息
  + loader：配置打包信息
  + plugin：配置额外功能









