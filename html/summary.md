# 我就知道这么多

### 基础语法

```
  基本语法，标签写法，页面主体结构
```

1. h5式声明文档类型
2. html的lang属性(zh-CN)
3. head
   1. 设置文档编码方式
   2. 设置文档兼容模式（X-UA-Compatible）
   3. 设置author、description、Keywords等
   4. 移动端viewport设置
   5. 页面防缓存
   6. 移动端拨打电话功能禁止等(safari)
   7. 站点logo

### 文本展示

```
html创建之初，就是为了展示文本，所以自身提供了很多文本展示的标签，发展到现在，CSS可以为文本展示定制化样式，而且CSS也足够强大，完全可以代替部分html样式元素
尽量遵循以下规则：
	1. 尽量语义化
	2. 尽量使用CSS代替样式化元素
```

1. h1-h5
2. 斜体、粗体、上标、下标、下划线、删除线等(字体样式尽量使用css)
3. 列表(有序、无序)
4. 超链接

### 多媒体

```
h5为多媒体提供了更多的便利，包括video、audio等，还有吊炸天的canvas
```

1. 图片(img, canvas)
2. 视频、音频
3. object、iframe、embed、svg
4. 响应式图片(有点时髦，img元素的srcset和sizes属性)

### 表格

```
平时都用别的UI框架，表格什么的，还真没用过原生的，只有之前写邮件模板的时候用过(很久以前的事了)
MDN的这个例子真的很全面：https://roy-tian.github.io/mdn-examples/html/planets-data/
```

1. 表格标题: caption
2. 设置一列的属性：colgroup, col
3. tr(行), th(标题，不一定要用到第一行的标题头，只要是标题(更复杂的表格)就可以用), td(表格单元)
4. 多行多列的设置：针对td元素，rowspan(占几行), colspan(占几列)
5. 结构化：thead、tfoot、tbody
6. 表格还可以嵌套

### 表单

```
新生的web app是不是都不用原生的form了？ajax + React(Vue等)的出现，有完全抛弃原生form组件的感觉，而且原生表单样式特别丑，各大浏览器的实现可能还不一样，覆写样式还得考虑兼容性，对于Http请求，Xhr完全可以代替Form元素
```

1. 使用form如何发送数据
2. 常用元素：form、input、textarea、label、button、select
3. 原生表单小部件：https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets
4. 表单验证

### 其他

```
遇到HTML相关的问题时：
  1. 首先站在html的角度思考解决方案：
  	① 是否有相应元素、属性等
  	② 是否符合新的html规范(语义化、样式化元素等)
  	③ 兼容性
  2. 然后考虑其他可行解决方案
  	① 使用CSS实现样式功能
  	② 使用JS操作DOM
```

1. HTML元素大全(内联元素、块级元素)

2. HTML属性大全(一大坨有没有)

   