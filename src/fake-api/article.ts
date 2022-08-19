export default `
### 什么是前端？

- 解决 GUI 人机交互问题
- 跨终端
  - PC/移动浏览器
  - 客户端/小程序
  - VR/AR 等
- Web 技术栈



### 前端技术栈

![截屏2022-07-25 00.15.33](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-25%2000.15.33.png)





### 前端的边界

![截屏2022-07-23 10.10.20](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-23%2010.10.20.png)



HTML开发环境



标签的结构

![截屏2022-07-25 00.16.40](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-25%2000.16.40.png)





DOM树

![截屏2022-07-23 10.17.33](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-23%2010.17.33.png)





### HTML语法

- 标签和属性不区分大小写，推荐小写
- 空标签可以不闭合，比如input、meta、img
- 属性值推荐用双引号包裹
- 某些属性值可以省略，如required、readonly



### 标题

h1-h6



### 列表

- 有序列表

  ol标签，li

- 无序列表

  ul，li

- 定义列表

  dl，dt、dd



### 链接：

a标签：\`<a href="www.baidu.com"></a>\`



### 媒体资源

\`\`\`html
<img
  src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ubqnuhbnuho/movable_type.jpg"
  alt="Metal movable type"
  width="400"
/>

<audio 
  src="/assets/music.ogg"
  controls
></audio>

<video
  src="/assets/video.mp4"
  controls
></video>
\`\`\`





### input标签

![截屏2022-07-23 10.27.44](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-23%2010.27.44.png)

\`\`\`html
<input placeholder="请输入用户名">

<input type="range">

<input type="number" min="1" max="10">

<input type="date" min="2018-02-10">

<textarea>Hey</textarea>
\`\`\`

**codepen.io**



### 选择

\`\`\`html
<p>
  <label><input type="checkbox" />🍎</label>
  <label><input type="checkbox" checked />🍏</label>
</p>

<p>
  <label><input type="radio" name="sport" />⚽</label>
  <label><input type="radio" name="sport" />🏀</label>
</p>

<p>
  <select>
    <option>🥑</option>
    <option>🥩</option>
    <option>🥓</option>
  </select>
</p>

<input list="countries" />
<datalist id="countries">
  <option>Greece</option>
  <option>United Kingdom</option>
  <option>United States</option>
</datalist>

\`\`\`





### 格式

pre标签：是预格式化

可以保留换行和空格

\`\`\`html
<blockquote cite="http://t.cn/RfjKO0F">
  <p>天才并不是自生自长在深林荒野里的怪物， 是由可以使天才生长的民众产生、长育出来的，所以没有 这种民众，就没有天才。</p>
</blockquote>

<p>我最喜欢的一本书是<cite>小王子</cite>。</p>

<p>在<cite>第一章</cite>，我们讲过<q>字符串是不可变量</q>。</p>

<p><code>const</code>声明创建一个只读的常量。</p>

<pre><code>
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
</code></pre>

<p>在投资之前，<strong>一定要做风险评估</strong>。</p>

<p>Cats <em>are</em> cute animals.</p>
\`\`\`



### 内容划分

![12a7eec23926df18](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/12a7eec23926df18.svg)



### 语义化

- HTML中的元素、属性及属性值都拥有某些含义
- 开发者应该遵循语义来编写HTML
  - 有序列表用 ol；无序列表用 ul
  - lang 属性表示内容所使用的语言



好处

- 代码可读性
- 可维护性
- 搜索引擎优化
- 提升无障碍性



方法

- 了解每个标签和属性的含义
- 思考什么标签最适合描述这个内容
- 不使用可视化工具生成代码




`