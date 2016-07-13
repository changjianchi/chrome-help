$(function () {
    var $container = $('.c-wrap');
    var $ul = $container.find('.c-ul');

    $ul.on('mouseover mouseout', 'li', function(e) {
        if (e.type == 'mouseover') {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });

    $ul.one('click', '.tongji', function() {
        tongji();
    });

    $ul.on('click', '.tpl', function() {
        tpl();
    });

    function tongji() {
        var wise_script=document.createElement('script');
        wise_script.setAttribute('src','//test.baidumd.com/test/tj.js?t='+new Date().getTime());
        console.log(wise_script);
        document.getElementsByTagName('head')[0].appendChild(wise_script);void(0);
    }

    function tpl() {
        console.log(1);
        $.each($('.result'), function(key,val) {
            console.log((key+1)+' ==> '+$(this).attr('tpl'));
        })
    }
});
