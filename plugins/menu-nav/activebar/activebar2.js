(function($){$.fn.activebar=function(options){var options=$.fn.extend({},$.fn.activebar.defaults,options);if($.fn.activebar.container==null){$.fn.activebar.container=initializeActivebar(options)}setOptionsOnContainer($.fn.activebar.container,options);$.fn.activebar.hide();$(".content",$.fn.activebar.container).empty();$(this).each(function(){$(".content",$.fn.activebar.container).append(this)});$.fn.activebar.container.unbind("click");if(options.url!=null){$.fn.activebar.container.click(function(){window.location.href=options.url})}$.fn.activebar.container.css("top","-"+$.fn.activebar.container.height()+"px");$.fn.activebar.show()};$.fn.activebar.defaults={background:"InfoBackground",border:"#c8c8c8",highlight:"Highlight",font:"Bitstream Vera Sans,verdana,sans-serif",fontColor:"InfoText",fontSize:"12px",icon:"images/activebar-information.png",button:"images/activebar-closebtn.png",url:null};$.fn.activebar.state=0;$.fn.activebar.container=null;$.fn.activebar.show=function(){if($.fn.activebar.state>1){return}$.fn.activebar.state=2;$.fn.activebar.container.css("display","block");var height=$.fn.activebar.container.height();$.fn.activebar.container.animate({top:"+="+height+"px"},height*20,"linear",function(){$.fn.activebar.state=3})};$.fn.activebar.hide=function(){if($.fn.activebar.state<2){return}$.fn.activebar.state=1;var height=$.fn.activebar.container.height();$.fn.activebar.container.animate({top:"-="+height+"px"},height*20,"linear",function(){$.fn.activebar.container.css("display","none");$.fn.activebar.visible=false})};function initializeActivebar(options){var container=$("<div></div>").attr("id","activebar-container");container.css({display:"none",position:"fixed",zIndex:"9999",top:"0px",left:"0px",cursor:"pointer"});$(window).bind("resize",function(){container.width($(this).width())});$(window).trigger("resize");if($.browser.msie&&($.browser.version.substring(0,1)=="5"||$.browser.version.substring(0,1)=="6")){container.css("position","absolute");$(window).scroll(function(){container.stop(true,true);if($.fn.activebar.state==3){container.css("top",$(window).scrollTop()+"px")}else{container.css("top",($(window).scrollTop()-container.height())+"px")}})}container.append($("<div></div>").attr("class","icon").css({"float":"left",width:"16px",height:"16px",margin:"6px 4px 4px 4px"}));container.append($("<div></div>").attr("class","close").css({"float":"right",margin:"6px 4px 4px 4px",width:"16px",height:"16px"}).click(function(event){$.fn.activebar.hide();event.stopPropagation()}));container.append($("<div></div>").attr("class","content").css({margin:"8px 28px 4px 28px"}));$("body").prepend(container);return container}function setOptionsOnContainer(container,options){container.css({background:options.background,borderBottom:"1px solid "+options.border});container.unbind("mouseenter mouseleave");container.hover(function(){$(this).css("backgroundColor",options.highlight)},function(){$(this).css("backgroundColor",options.background)});$(".icon",container).css("background","transparent url( '"+options.icon+"' ) top left no-repeat");$(".close",container).css("background","transparent url( '"+options.button+"' ) top left no-repeat");$(".content",container).css({color:options.fontColor,fontFamily:options.font,fontSize:options.fontSize})}})(jQuery);