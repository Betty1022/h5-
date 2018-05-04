$(function(){
    'use strict';
    var sidebar = $("#sidebar");//选择侧栏
    var mask = $(".mask");
    var sidebar_trigger=$("#sidebar_trigger");
    var backButton=$(".back-to-top");
    backButton.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },800);
    });
    $(window).on('scroll',function(){
        //如果以滚动部分高于窗口的高度
        if($(window).scrollTop() > $(window).height() ){
            backButton.fadeIn();//显示返回顶部按钮
        }else{
            backButton.fadeOut();//隐藏
        }
    });
    $(window).trigger('scroll');
    function showSidebar(){
        mask.fadeIn();
        /* sidebar.animate({
                 'right': 0
             });*/
        //sidebar.css('right',0);
        sidebar.css('transform','translate(0,0)');
    }
    function hideSidebar(){
        mask.fadeOut();
        /* sidebar.animate({
                 'right': 0
             });*/
        //sidebar.css('right',-sidebar.width());
        sidebar.css('transform','translate('+sidebar.width()+'px'+',0)');
    }
    sidebar_trigger.on("click",showSidebar);
    mask.on('click',hideSidebar);

});