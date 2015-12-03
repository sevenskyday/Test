// JavaScript Document
/*  模拟下拉框插件*/
//$.fn.mockselect=
(function($){
	 
$.fn.mockSelect = function(options){ 
var defaults = { 
//设置一个默认的class名称
defClass:"mockselect-",
//当前选中样式
curClass:"curslt",
//下拉影藏样式
hideClass:"hideslt",
//下拉显示样式
showClass:"showslt",
//显示影藏速度
speed:200
} 
var options = $.extend(defaults, options); 
this.each(function(){ 
//实现代码 
}); 
//创建一个下拉框
this.create(selectID,classtag,defvalue,defname)
{	
	var content="<dl id="+selectID+" class="+options.defClass+classtag+" >"+"<dt  date-value="+defvalue+">"+defname+"</dt>"+"<dd><ol></ol></dd></dl>";
	this.html(content);
	}
//销毁一个下拉框
this.destroy(selectID)
{
	this.html("");
}
//添加一个选项
this.addline(value,name)
{
}
//移除一个选项
this.removeline(value,name)
{
}
//清理所有选项
this.clearline()
{
	}
//获取选中的值
this.getSelected()
{  var result=new Object();
     result.value="";
	 result.name="";
}
//显示下拉框
this.show()
{
}
//收回下拉框
this.hide()
{
}
//点击dt，实现下拉的显示影藏变化
this.dtclick()
{
}

}; 


})(jQuery); 