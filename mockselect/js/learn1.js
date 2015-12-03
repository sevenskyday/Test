//http://www.cnblogs.com/jonyzhu/p/3732468.html
// JavaScript Document
/* 
* tableUI 0.1 
* Copyright (c) 2009 JustinYoung http://justinyoung.cnblogs.com/ 
* Date: 2010-03-30 
* 使用tableUI可以方便地将表格提示使用体验。先提供的功能有奇偶行颜色交替，鼠标移上高亮显示 
*/ 
(function($){ 
$.fn.tableUI = function(options){ 
var defaults = { 
evenRowClass:"evenRow", 
oddRowClass:"oddRow", 
activeRowClass:"activeRow" 
} 
var options = $.extend(defaults, options); 
this.each(function(){ 
var thisTable=$(this); 
//添加奇偶行颜色 
$(thisTable).find("tr:even").addClass(options.evenRowClass); 
$(thisTable).find("tr:odd").addClass(options.oddRowClass); 
//添加活动行颜色 
$(thisTable).find("tr").bind("mouseover",function(){ 
$(this).addClass(options.activeRowClass); 
}); 
$(thisTable).find("tr").bind("mouseout",function(){ 
$(this).removeClass(options.activeRowClass); 
}); 
}); 
}; 
})(jQuery); 
//jQuery插件的开发包括两种：

//一种是类级别的插件开发，即给jQuery添加新的全局函数，相当于给jQuery类本身添加方法。jQuery的全局函数就是属于jQuery命名空间的函数，另一种是对象级别的插件开发，即给jQuery对象添加方法。


//增加多个全局变量
jQuery.foo = function() {    
alert('This is a test. This is only a test.');   
};   
jQuery.bar = function(param) {    
alert('This function takes a parameter, which is "' + param + '".');   
};    

//使用jQuery.extend(object);　
jQuery.extend({       
foo: function() {       
alert('This is a test. This is only a test.');       
},       
bar: function(param) {       
alert('This function takes a parameter, which is "' + param +'".');       
}      
}); 

//使用命名空间
jQuery.myPlugin = {           
foo:function() {           
alert('This is a test. This is only a test.');           
},           
bar:function(param) {           
alert('This function takes a parameter, which is "' + param + '".');     
}          
};   
//采用命名空间的函数仍然是全局函数，调用时采用的方法：   
$.myPlugin.foo();          
$.myPlugin.bar('baz');  
//通过这个技巧（使用独立的插件名），我们可以避免命名空间内函数的冲突。


//开发形1式
(function($){      
$.fn.extend({      
pluginName:function(opt,callback){      
          // Our plugin implementation code goes here.        
}      
})      
})(jQuery); 
//开发形2式
(function($) {        
$.fn.pluginName = function() {      
     // Our plugin implementation code goes here.      
};      
})(jQuery);     


//示例插件 highllight
$.fn.hilight = function() {     
  // Our plugin implementation code goes here.     
};     
//我们的插件通过这样被调用：   
$('#myDiv').hilight();     



//让我们为我们的插件添加功能指定前景色和背景色的功能。我们也许会让选项像一个options对象传递给插件函数。例如：   

// plugin definition     
$.fn.hilight = function(options) {     
  var defaults = {     
    foreground: 'red',     
    background: 'yellow'     
  };     
  // Extend our default options with those provided.     
  var opts = $.extend(defaults, options);     
  // Our plugin implementation code goes here.     
};     
//我们的插件可以这样被调用：   
$('#myDiv').hilight({     
  foreground: 'blue'     
});  


// plugin definition     
$.fn.hilight = function(options) {     
  // Extend our default options with those provided.     
  // Note that the first arg to extend is an empty object -     
  // this is to keep from overriding our "defaults" object.     
  var opts = $.extend({}, $.fn.hilight.defaults, options);     
  // Our plugin implementation code goes here.     
};     
// plugin defaults - added as a property on our plugin function     
$.fn.hilight.defaults = {     
  foreground: 'red',     
  background: 'yellow'     
};      
//现在使用者可以包含像这样的一行在他们的脚本里：   
//这个只需要调用一次，且不一定要在ready块中调用   
$.fn.hilight.defaults.foreground = 'blue';     
//接下来我们可以像这样使用插件的方法，结果它设置蓝色的前景色：   
$('#myDiv').hilight();   


//这段将会一步一步对前面那段代码通过有意思的方法扩展你的插件（同时让其他人扩展你的插件）。例如，我们插件的实现里面可以定义一个名叫"format"的函数来格式化高亮文本。我们的插件现在看起来像这样，默认的format方法的实现部分在hiligth函数下面。


// plugin definition     
$.fn.hilight = function(options) {     
  // iterate and reformat each matched element     
  return this.each(function() {     
    var $this = $(this);     
    // ...     
    var markup = $this.html();     
    // call our format function     
    markup = $.fn.hilight.format(markup);     
    $this.html(markup);     
  });     
};     
// define our format function     
$.fn.hilight.format = function(txt) {     
return '<strong>' + txt + '</strong>';     
}; 