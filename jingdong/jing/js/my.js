    $(document).ready(function() {
        $(".f-c-t1 h3").each(function(index, el) {
            $(this).mouseenter(function(event) {
           $(".none").children().eq(index).show().siblings().hide();
            });            
        });
        $(".first1 .f-c  .f-c-t1 h3").mouseover(function(){
            $(this).parent().parent().siblings('.arrow-t').stop().animate({left:$(this).index()*158 });
      });
        $(".f-c-bl").find('.aa1,.aa2').hover(function() {
        	$(".f-c-bl .aa1,.f-c-bl .aa2").stop().fadeTo(500,0.7);
        	$(this).stop().fadeTo(500,1);
            $(this).children("img").stop().animate({"marginLeft":"-15px"},400);
       }, function() {
        	$(".f-c-bl .aa1,.f-c-bl .aa2").stop().fadeTo(500,1);
            $(this).children("img").stop().animate({"marginLeft":0},400);
        });

        $(".main-c img,.main-b img").hover(function() {
            $(this).stop().animate({"marginLeft":-15},400);
        }, function() {
            $(this).stop().animate({"marginLeft":0},400);
        });
        /*京东侧边栏*/
        var num=null;
        $(".first-ul li").each(function(index, el) {
            num=-index*55;
            $(el).css({"background-position":"0px "+num+"px"});
        });
        var t=null;
        $(window).scroll(function(event) {
            t=$(document).scrollTop();
            if(t>=$(".tu").offset().top)
            {
                $(".first-ul li").eq(7).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".shi").offset().top)
            {
                $(".first-ul li").eq(6).addClass("current").siblings().removeClass();
            }
            else if(t>=$(".mu").offset().top)
            {
                $(".first-ul li").eq(5).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".jia").offset().top)
            {
                $(".first-ul li").eq(4).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".mei").offset().top)
            {
                $(".first-ul li").eq(3).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".fu").offset().top)
            {
                $(".first-ul li").eq(2).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".dian").offset().top)
            {
                $(".first-ul li").eq(1).addClass('current').siblings().removeClass();
            }
            else if(t>=$(".shu").offset().top)
            {
                $(".first-ul li").eq(0).addClass('current').siblings().removeClass();
            }
            else if(t>0)
            {
                $(".first-ul").fadeIn();
            }
            else
            {
                $(".first-ul").fadeOut();
            }
        });
        $(".first-ul li").click(function(event) {
           $("html,body").stop().animate({"scrollTop":$(".first1").eq($(this).index()).offset().top},500)
        });
        /*京东轮播图*/
        $(".banner ol li").mouseenter(function(event) {
            $(this).addClass('current').siblings().removeClass('current');
            var num=-$(this).index()*$(".banner ul li").height();
            $(".banner ul").stop().animate({"top":num},800);
        });
       
        /*京东小楼层轮播图*/
        var $key=0;
        var timer=setInterval(autoplay, 3000);
        function autoplay(){
            $(".samllb1 .smallbanner").eq($key).fadeOut(500);  
            $key++;  
            $key=$key%$(".samllb1 .smallbanner").length; 
            $(".samllb1 .smallbanner").eq($key).fadeIn(500);
            $(".samllding1 span").eq($key).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding1 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb1 .smallbanner").eq($key).fadeOut(500); 
        $key=$(this).index();
        $(".samllb1 .smallbanner").eq($key).fadeIn(500);

     });
        $(".samllb1").hover(function() {
                clearInterval(timer);
                timer=null;   
            }, function() {
                clearInterval(timer);
                timer=setInterval(autoplay, 3000);  
            });

});
$(function() {
            /*京东小楼层轮播图*/
        var $key1=0;
        var timer1=setInterval(autoplay1, 3000);
        function autoplay1(){
            $(".samllb2 .smallbanner").eq($key1).fadeOut(500);  
            $key1++;  
            $key1=$key1%$(".samllb2 .smallbanner").length; 
            $(".samllb2 .smallbanner").eq($key1).fadeIn(500);
            $(".samllding2 span").eq($key1).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding2 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb2 .smallbanner").eq($key1).fadeOut(500); 
        $key1=$(this).index();
        $(".samllb2 .smallbanner").eq($key1).fadeIn(500);

     });
        $(".samllb2").hover(function() {
                clearInterval(timer1);
                timer1=null;   
            }, function() {
                clearInterval(timer1);
                timer1=setInterval(autoplay1, 3000);  
            });

});
$(function() {
            /*京东小楼层轮播图*/
        var $key3=0;
        var timer3=setInterval(autoplay3, 3000);
        function autoplay3(){
            $(".samllb3 .smallbanner").eq($key3).fadeOut(500);  
            $key3++;  
            $key3=$key3%$(".samllb3 .smallbanner").length; 
            $(".samllb3 .smallbanner").eq($key3).fadeIn(500);
            $(".samllding3 span").eq($key3).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding3 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb3 .smallbanner").eq($key3).fadeOut(500); 
        $key1=$(this).index();
        $(".samllb3 .smallbanner").eq($key3).fadeIn(500);

     });
        $(".samllb3").hover(function() {
                clearInterval(timer3);
                timer3=null;   
            }, function() {
                clearInterval(timer3);
                timer3=setInterval(autoplay3, 3000);  
            });

});
$(function() {
            /*京东小楼层轮播图*/
        var $key5=0;
        var timer5=setInterval(autoplay5, 3000);
        function autoplay5(){
            $(".samllb5 .smallbanner").eq($key5).fadeOut(500);  
            $key5++;  
            $key5=$key5%$(".samllb5 .smallbanner").length; 
            $(".samllb5 .smallbanner").eq($key5).fadeIn(500);
            $(".samllding5 span").eq($key5).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding5 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb5 .smallbanner").eq($key5).fadeOut(500); 
        $key1=$(this).index();
        $(".samllb5 .smallbanner").eq($key5).fadeIn(500);

     });
        $(".samllb5").hover(function() {
                clearInterval(timer5);
                timer5=null;   
            }, function() {
                clearInterval(timer5);
                timer5=setInterval(autoplay5, 3000);  
            });

});
$(function() {
            /*京东小楼层轮播图*/
        var $key4=0;
        var timer4=setInterval(autoplay4, 3000);
        function autoplay4(){
            $(".samllb4 .smallbanner").eq($key4).fadeOut(500);  
            $key4++;  
            $key4=$key4%$(".samllb4 .smallbanner").length; 
            $(".samllb4 .smallbanner").eq($key4).fadeIn(500);
            $(".samllding4 span").eq($key4).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding4 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb4 .smallbanner").eq($key4).fadeOut(500); 
        $key1=$(this).index();
        $(".samllb4 .smallbanner").eq($key4).fadeIn(500);

     });
        $(".samllb4").hover(function() {
                clearInterval(timer4);
                timer4=null;   
            }, function() {
                clearInterval(timer4);
                timer4=setInterval(autoplay4, 3000);  
            });

});

$(function() {
            /*京东小楼层轮播图*/
        var $key6=0;
        var timer6=setInterval(autoplay6, 3000);
        function autoplay6(){
            $(".samllb6 .smallbanner").eq($key6).fadeOut(500);  
            $key6++;  
            $key6=$key6%$(".samllb6 .smallbanner").length; 
            $(".samllb6 .smallbanner").eq($key6).fadeIn(500);
            $(".samllding6 span").eq($key6).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding6 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb6 .smallbanner").eq($key6).fadeOut(500); 
        $key6=$(this).index();
        $(".samllb6 .smallbanner").eq($key6).fadeIn(500);

     });
        $(".samllb6").hover(function() {
                clearInterval(timer6);
                timer6=null;   
            }, function() {
                clearInterval(timer6);
                timer6=setInterval(autoplay6, 3000);  
            });

});
$(function() {
            /*京东小楼层轮播图*/
        var $key7=0;
        var timer7=setInterval(autoplay7, 3000);
        function autoplay7(){
            $(".samllb7 .smallbanner").eq($key7).fadeOut(500);  
            $key7++;  
            $key7=$key7%$(".samllb7 .smallbanner").length; 
            $(".samllb7 .smallbanner").eq($key7).fadeIn(500);
            $(".samllding7 span").eq($key7).addClass('curss').siblings().removeClass('curss');
        }
        $(".samllding7 span").mouseenter(function(event) {
        $(this).addClass('curss').siblings().removeClass('curss');
        $(".samllb7 .smallbanner").eq($key7).fadeOut(500); 
        $key7=$(this).index();
        $(".samllb7 .smallbanner").eq($key7).fadeIn(500);

     });
        $(".samllb7").hover(function() {
                clearInterval(timer7);
                timer7=null;   
            }, function() {
                clearInterval(timer7);
                timer7=setInterval(autoplay7, 3000);  
            });

});

