// JavaScript Document
//模拟下拉框的一些函数
$(function(){
	Init_select();
});
function Init_select(){
	$(".select").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.on("click","a",function(){dt.html($(this).html());dt.attr("data-value",$(this).attr("data-value"));_hide();});
		//可适用于未创建的元素  
		$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
	});
	}
function Clear_select(source)
{//清空下拉的内容
	$(source).children("dd").children("ol").empty();
	$(source).children("dt").html("全部分类");
	$(source).children("dt").attr("data-value","#");
}
function Add_select(source,value,name)
{
	var content="<li><a href=\"javascript:;\" data-value="+value+">"+name+"</a></li>";
	$(source).children("dd").children("ol").append(content);
}
function Get_select(source){
	 var dt=$(source).children("dt");
	 var slt=new Object();
	 slt.value=dt.attr("data-value");
	 slt.name=dt.html();
	 return slt;
	}
function setnewslt()
{
	Clear_select("#testslt");
	for(var i=0;i<10;i++)
	{
		Add_select("#testslt",i,"name"+i);
	}	
}
