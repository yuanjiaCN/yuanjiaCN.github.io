$(function all () {
 $all =
        "<a href='fortyFifth.html' class='book' value='2017.8.29'>探索Git(13)——本地库同步到多个远程库</a>"+
        "<a href='fortyForth.html' class='book' value='2017.8.29'>探索Git(12)——使用SSH协议</a>"+
        "<a href='fortyThird.html' class='book' value='2017.8.29'>探索Git(11)——标签</a>"+
        "<a href='fortySecond.html' class='book' value='2017.8.29'>探索Git(10)——多人协作</a>"+
        "<a href='fortyFirst.html' class='book' value='2017.8.29'>探索Git(9)——Bug分支、Feature分支</a>"+
        "<a href='fortieth.html' class='book' value='2017.8.28'>探索Git(8)——分支管理策略</a>"+
        "<a href='thirtyNinth.html' class='book' value='2017.8.28'>探索Git(7)——远程仓库相关</a>"+
        "<a href='thirtyEighth.html' class='book' value='2017.8.27'>探索Git(6)——解决分支冲突</a>"+
        "<a href='thirtySeventh.html' class='book' value='2017.8.27'>探索Git(5)——创建合并删除分支</a>"+
        "<a href='thirtySixth.html' class='book' value='2017.8.24'>探索Git(4)——管理、撤销修改、删除文件</a>"+
        "<a href='thirtyFifth.html' class='book' value='2017.8.23'>探索Git(3)——git diff、git diff --cached和git diff HEAD的区别</a>"+
        "<a href='thirtyFourth.html' class='book' value='2017.8.23'>探索Git(2)——工作区、暂存区和版本库</a>"+
        "<a href='thirtyThird.html' class='book' value='2017.8.23'>探索Git(1)——集中式分布式、创建版本库、版本回退</a>"+
        "<a href='thirtySecond.html' class='book' value='2017.8.21'>探索MVC(2)</a>"+
        "<a href='thirtyFirst.html' class='book' value='2017.8.21'>探索MVC(1)</a>"+
        "<a href='thirtieth.html' class='book' value='2017.8.21'>弱类型、强类型、动态类型、静态类型语言的排列组合以及自己的理解</a>"+
        "<a href='twentyNinth.html' class='book' value='2017.8.21'>弱类型、强类型、动态类型、静态类型语言的区别及其优劣</a>"+
        "<a href='twentyEighth.html' class='book' value='2017.8.20'>使用setTimeout模拟setInterval时，用clearTimeout遇到的坑们</a>"+
        "<a href='twentySeventh.html' class='book' value='2017.8.19'>一个简易的别踩白块demo</a>"+
        "<a href='twentySixth.html' class='book' value='2017.8.19'>一个小时钟demo以及遇到的setTimeout相关问题</a>"+
        "<a href='twentyFifth.html' class='blog' value='2017.8.16'>无缝运动应用到这个博客（1）</a>"+
        "<a href='twentyFourth.html' class='book' value='2017.8.15'>定时器、无缝运动</a>"+
        "<a href='twentyThird.html' class='book' value='2017.8.14'>定时器、运动</a> "+
        "<a href='twentySecond.html' class='blog' value='2017.8.12'>获取子节点、表单、表单搜索</a> "+
        "<a href='twentyFirst.html' class='book' value='2017.8.10'>事件处理程序、事件对象</a> "+
        "<a href='twentieth.html' class='book' value='2017.8.6'>对象中的方法是否形成闭包、拥有闭包性质</a> "+
        "<a href='nineteenth.html' class='book' value='2017.8.6'>this的指向</a> "+
        "<a href='eighteenth.html' class='blog' value='2017.8.1'>评论区实现（评论内容不可保存）</a> "+
        "<a href='seventeenth.html' class='book' value='2017.7.31'>prop()方法代替attr()</a>"+
        "<a href='sixteenth.html' class='blog' value='2017.7.29'>css3实现瀑布流多栏布局</a>"+
        "<a href='fifteenth.html' class='blog' value='2017.7.28'>在网页内点击链接不跳转切换图片集</a>"+
        "<a href='fourteenth.html' class='blog' value='2017.7.28'>文章批量推荐功能（不包括当前页）;上一篇、下一篇切换功能</a>"+
        "<a href='thirteenth.html' class='blog' value='2017.7.27'>图片不拉伸；背景图片随滚轮移动；首行缩进2个中文字</a>"+
        "<a href='twelfth.html' class='book' value='2017.7.27'>css3媒体查询；A元素hover时改变B元素背景色</a>" +
        "<a href='eleventh.html' class='book' value='2017.7.27'>html5、css3表单相关</a>" +
        "<a href='tenth.html' class='blog' value='2017.7.27'>transition不支持display;图片下方有一小条背景溢出的处理方法</a>" +
        "<a href='ninth.html' class='blog' value='2017.7.26'>让背景图片浮在图片上方</a>" +
        "<a href='eighth.html' class='blog' value='2017.7.26'>实现不定长度的标题和段落在不同尺寸的图片上在同一个位置水平居中（垂直可调）</a>" +
        "<a href='seventh.html' class='blog' value='2017.7.25'>博客用到的文字换行、首行渲染、CSS3动画属性</a>" +
        "<a href='sixth.html' class='blog' value='2017.7.24'>做博客遇到的小问题【3】溢出、伪选择器</a>" +
        "<a href='fifth.html' class='book' value='2017.7.24'>CSS创建等高文本列，条件注释,不透明度,神器属性text-overflow,强迫症福利：标点符号悬挂hanging-punctuation</a>"+
        "<a href='forth.html' class='blog' value='2017.7.23'>做博客遇到小问题【2】评论区</a>" +
        "<a href='third.html' class='blog' value='2017.7.22'>做博客遇到小问题【1】主页</a>" +
        "<a href='second.html' class='book' value='2017.7.22'>外边距叠加、行框、行内框、outline属性</a>" +
        "<a href='first.html' class='book' value='2017.7.21'>轮播图小心得</a>"
});