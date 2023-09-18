# JSX

+ [ ] JSX 介绍
+ [ ] JSX 中使用 JavaScript 表达式
+ [ ] JSX 列表渲染
+ [ ] JSX 条件渲染
+ [ ] JSX 样式处理

## JSX介绍

**目标**：

1. 了解为什么需要使用jsx？
2. 能够说出jsx是什么？

**内容**:

+ createElement的问题
  + 繁琐不简洁
  + 不直观，无法一眼看出所描述的结构
  + 不优雅，开发体验不好

![image-20211006144321448](images/image-20211006144321448.png)

+ JSX简介  

`JSX`是`JavaScript XML`的简写，表示了在Javascript代码中写XML(HTML)格式的代码

优势：声明式语法更加直观，与HTML结构相同，降低学习成本，提高开发效率。

 **JSX是react的核心内容**

注意：*JSX 不是标准的 JS 语法，是 JS 的语法扩展。脚手架中内置的 [@babel/plugin-transform-react-jsx](@babel/plugin-transform-react-jsx) 包，用来解析该语法。*

![JSX 声明式vs命令式](images/JSX 声明式vs命令式.png)

**总结**

1. 使用jsx创建元素是react声明式UI的体现
2. 使用jsx语法更加直观，降低学习成本，提高开发效率

## JSX使用步骤

**目标**：掌握在react项目中如何使用jsx

**内容**

1. 导入reactDOM包
2. 使用jsx创建react元素
3. 将react元素渲染到页面中

**核心代码**

```js
import ReactDOM from 'react-dom'

// 创建元素
const title = <h1 title="哈哈"></h1>

// 渲染元素
ReactDOM.render(title, document.getElementById('root'))
```

**总结**

1. react17版本之后，使用jsx不需要额外导入React

## JSX注意事项

**目标**： 了解在使用jsx时需要注意的事项

**内容**:

+ JSX必须要有一个根节点， 如果没有根节点，可以使用`<></>`或者`<React.Fragment></React.Fragment>`
+ 所有标签必须结束，如果是单标签可以使用`/>`结束
+ JSX中语法更接近与JavaScript
  + `class` =====> `className`
  + `for`========>  `htmlFor`
+ JSX可以换行，如果JSX有多行，推荐使用`()`包裹JSX，防止自动插入分号的bug

**注意**

1. jsx的语法相比html的语法更加严格，更加接近js。

## 使用prettier插件

**目标**：学习如何配置vscode插件进行代码格式化

**内容**

+ prettier插件是一个代码格式化插件，可以格式化react代码

+ 安装插件

![image-20211006151941639](images/image-20211006151941639.png)

+ 添加prettier的配置

```js
// 保存到额时候用使用prettier进行格式化
"editor.formatOnSave": true,
// 不要有分号
"prettier.semi": false,
// 使用单引号
"prettier.singleQuote": true,
// 默认使用prittier作为格式化工具
"editor.defaultFormatter": "esbenp.prettier-vscode",
```

**总结**

1. 配置prettier插件可以提高react开发效率

## JSX中使用JavaScript表达式

**目标**

1. 了解在js中表达式和语句的区别
2. 掌握在jsx中使用表达式的语法

**内容**

+ JS 表达式：数据类型和运算符的组合（可以单独出现数据类型，也可以数据类型+运算符的组合）
  + 特点：==有值== 或者说 能够计算出一个值
  + 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
  + 1 + 2、'abc'.split('')、['a', 'b'].join('-')
  + function fn() {}、 fn()
  + 验证是不是 JS 表达式的技巧：看内容能不能作为方法的参数，比如，`console.log( 表达式 )`

+ 在jsx中使用表达式语法：`{ JS 表达式 }`
  - 比如，`<h1>你好，我叫 {name}</h1>`

**核心代码**

```js
const name = 'zs'
const age = 18
const title = (
  <h1>
    姓名：{name}, 年龄：{age}
  </h1>
)
```

+ 可以访问对象的属性

```js
const car = {
    brand: '玛莎拉蒂'
}
const title = (
  <h1>
    汽车：{car.brand}
  </h1>
)
```

+ 可以访问数组的下标

```js
const friends = ['张三', '李四']
const title = (
  <h1>
    汽车：{friends[1]}
  </h1>
)
```

+ 可以使用三元运算符

```js
const gender = 18
const title = (
  <h1>
    性别：{age >= 18? '是':'否'}
  </h1>
)
```

+ 可以调用方法

```js
function sayHi() {
  return '你好'
}
const title = <h1>姓名：{sayHi()}</h1>
```

+ JSX本身

```js
const span = <span>我是一个span</span>
const title = <h1>盒子{span}</h1>
```

+ JSX中的注释

```js
{/* 这是jsx中的注释 */}   推荐快键键 ctrl + /
```

+ jsx中不能出现语句

**总结**

1. jsx中可以出现任意的js表达式
2. 在jsx中只能出现js表达式，不能出现js语句，比如`if`、`for`、`while`等

## 条件渲染

**目标**：掌握在react中如何根据条件渲染结构

**内容**

+ 在react中，一切都是javascript，所以条件渲染完全是通过js来控制的
+ 可以使用`if/else`或`三元运算符`或`逻辑与(&&)运算符`

**核心代码**

+ 通过判断`if/else`控制 

```js
const isLoding = false
const loadData = () => {
  if (isLoding) {
    return <div>数据加载中.....</div>
  } else {
    return <div>数据加载完成，此处显示加载后的数据</div>
  }
}

const title = <div>条件渲染：{loadData()}</div>
```

+ 通过三元运算符控制

```js
const isLoding = false
const loadData = () => {
  return isLoding ? (
    <div>数据加载中.....</div>
  ) : (
    <div>数据加载完成，此处显示加载后的数据</div>
  )
}
```

+ 逻辑运算符

```js
const isLoding = false
const loadData = () => {
  return isLoding && <div>加载中...</div>
}

const title = <div>条件渲染：{loadData()}</div>
```

**总结**

1. 在react中，可以使用`if/else`或`三元运算符`或`逻辑与(&&)运算符`实现条件的渲染

**练习**

```
// 定义一个变量  isLogin
// 如果登录了，显示      欢迎你，尊贵的v10用户
// 如果没有登录，显示：  你好，请先登录
```

## vscode配置自动补全

**目标**：配置vscode，在vscode中使用tab键可以快速生成HTML内容

**内容**：

​	无需安装额外插件，直接在设置中添加如下设置即可。

**核心代码**

```jsx
// 当按tab键的时候，会自动提示
"emmet.triggerExpansionOnTab": true,
"emmet.showAbbreviationSuggestions": true,
// jsx的提示
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}
```

## 列表渲染

**目标**：掌握react中如何通过数组的map方法实现列表的渲染

**内容**：

- 作用：重复生成相同的 HTML 结构，比如，歌曲列表、商品列表等
- 实现：使用数组的 `map` 方法
- 注意：需要为遍历项添加 `key` 属性
  - key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用的
  - key 在当前列表中要唯一
  - 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
  - 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值

**核心代码**

+ 列表的渲染 

```js
const songs = ['温柔', '倔强', '私奔到月球']

const list = songs.map(song => <li>{song}</li>)

const dv = (
  <div>
    <ul>{list}</ul>
  </div>
)
```

+ 直接在JSX中渲染

```js
const songs = ['温柔', '倔强', '私奔到月球']

const dv = (
  <div>
    <ul>{songs.map(song => <li>{song}</li>)}</ul>
  </div>
)
```

+ key属性的使用

```js
const dv = (
  <div>
    <ul>
      {songs.map(song => (
        <li key={song}>{song}</li>
      ))}
    </ul>
  </div>
)
```

**总结**

+ 注意1：列表渲染时应该给重复渲染的元素添加key属性，key属性的值要保证唯一

+ 注意2：key值避免使用index下标，因为下标会发生改变

## 列表渲染-练习

**目标**：完成列表渲染的练习

**内容**：

```
/* 
const list = [
  { id: 1, name: '上海黑马82期', salary: 11000 },
  { id: 2, name: '上海黑马83期', salary: 12000 },
  { id: 3, name: '上海黑马84期', salary: 13000 }
]

  <ul>
    <li>
      <h3>班级：上海黑马83期</h3>
      <p>工资：15000</p>
    </li>
  </ul>
*/

```

## 样式处理

**目标**：掌握jsx中如何通过style和className控制元素的样式

**内容**：

1. 行内样式 - style
   1. 像 width/height 等属性，可以省略 px，直接使用 数值 即可
   2. 如果是需要使用百分比的单位，此时，继续使用字符串的值即可（比如，"60%"）
2. 类名 - className【推荐】

**核心代码：**

+ 行内样式-style

```js
const dv = (
  <div style={{ color: 'red', backgroundColor: 'pink' }}>style样式</div>
)
```

+ 类名-className

```js
// 导入样式
import './base.css'
const dv = <div className="title">style样式</div>
```

**总结：**

jsx中可以

## 综合案例-B站评论列表

### tab栏的渲染

**目标：**能够动态渲染评论列表的tab栏

**步骤：**

1. 在state中提供tabs数据
2. 根据map方法进行tab栏渲染
3. 根据active属性控制高亮

**核心代码**

```jsx
{/* 评论数 */}
<div className="comment-head">
  <span>{this.state.list.length} 评论</span>
</div>
{/* 排序 */}
<div className="tabs-order">
  <ul className="sort-container">
    {this.state.tabs.map((item) => (
      <li
        className={item.type === this.state.active ? 'on' : ''}
        key={item.id}
      >
        按{item.name}排序
      </li>
    ))}
  </ul>
</div>
```

### 评论列表的渲染

**目标：**根据list数据渲染评论列表功能

**步骤**

1. 在state中提供list数据
2. 根据map方法渲染评论列表
3. 点赞高亮的处理

**核心代码：**

+ 评论列表处理

```jsx
{/* 评论列表 */}
<div className="comment-list">
  {this.state.list.map((item) => (
    <div className="list-item">
      <div className="user-face">
        <img className="user-head" src={avatar} alt="" />
      </div>
      <div className="comment">
        <div className="user">{item.author}</div>
        <p className="text">{item.comment}</p>
        <div className="info">
          <span className="time">{item.time.toString()}</span>
          <span
            className={[
              'like',
              item.attitude === 1 ? 'liked' : '',
            ].join(' ')}
          >
            <i className="icon" />
          </span>
          <span
            className={[
              'hate',
              item.attitude === -1 ? 'hated' : '',
            ].join(' ')}
          >
            <i className="icon" />
          </span>
          <span className="reply btn-hover">删除</span>
        </div>
      </div>
    </div>
  ))}
</div>
```

### 时间处理

**目标：**通过moment对时间进行格式化

**步骤：**

1. 安装moment
2. 使用moment进行格式化

**核心代码：**

+ 安装moment

```
yarn add moment
```

+ 格式化时间

```jsx
formatTime(time) {
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
}

<span className="time">{this.formatTime(item.time)}</span>
```

