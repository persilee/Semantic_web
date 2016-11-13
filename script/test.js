$(function() {
    var isMenu = true;
    // $('.ui.grid').height($(window).height());
    $('.three.wide.column').height($(window).height() - 62);
    $('.thirteen.wide.column').height($(window).height() - 62);
    $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
    $('.ui.button.bar').click(function() {
        if (isMenu) {
            $('.three.wide.column').css('cssText', 'width:0px!important');
            $('.thirteen.wide.column').css('cssText', 'width:98%!important');
            $('.three.wide.column').animate({
                opacity: '0'
            }, '1s');
            isMenu = false;
        } else {
            $('.three.wide.column').css('cssText', 'width:18.75%!important');
            $('.thirteen.wide.column').css('cssText', 'width:81.25%!important');
            $('.three.wide.column').animate({
                opacity: '1'
            }, '1s');
            isMenu = true;
        }
        $('.three.wide.column').height($(window).height() - 62);
    });
    $('.ui.vertical.text.menu').on('click', '.item', function() {
        var tabText = $('.ui.tabular.menu.main').text();
        if (tabText.indexOf($(this).text()) >= 0) {
            console.log('you');
        } else {
            $('.ui.tabular.main .item').removeClass('active');
            $('.ui.tabular.menu.main').prepend('<a class="item active" data-name =' + $(this).attr('data-name') + '>' + $(this).text() + '<i class="remove icon"></a>');
            $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
            if ($(this).attr('data-name') == 'button') {
                $('.ui.bottom.attached.segment.main .button').removeClass('hidden');
            }
            if ($(this).attr('data-name') == 'controlsType') {
                $('.ui.bottom.attached.segment.main .controlsType').removeClass('hidden');
            }
            if ($(this).attr('data-name') == 'forms') {
                $('.ui.bottom.attached.segment.main .forms').removeClass('hidden');
            }
            if ($(this).attr('data-name') == 'tab2') {
                $('.ui.bottom.attached.segment.main .tab2').removeClass('hidden');
            }
            if ($(this).attr('data-name') == 'tabSheet') {
                $('.ui.bottom.attached.segment.main .tabSheet').removeClass('hidden');
                $('.ui.top.attached.tabular.menu:not(.main) .item').removeClass('active');
                $('.ui.top.attached.tabular.menu:not(.main) .item').eq(0).addClass('active');
                $('.ui.bottom.attached.segment:not(.main) .item.tab').hide();
                $('.ui.bottom.attached.segment:not(.main) .item.tab').eq('0').show();
            }
            if ($(this).attr('data-name') == 'trading') {
                $('.ui.bottom.attached.segment.main .trading').removeClass('hidden');
            }
            if ($(this).attr('data-name') == 'general') {
                $('.ui.bottom.attached.segment.main .general').removeClass('hidden');
            }
        }
    });
    $('.ui.tabular.main').on('click', '.item', function() {
        $('.ui.tabular.main .item').removeClass('active');
        $(this).addClass('active');
        $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
        if ($(this).attr('data-name') == 'general') {
            $('.ui.bottom.attached.segment.main .general').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'trading') {
            $('.ui.bottom.attached.segment.main .trading').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'tabSheet') {
            $('.ui.bottom.attached.segment.main .tabSheet').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'forms') {
            $('.ui.bottom.attached.segment.main .forms').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'controlsType') {
            $('.ui.bottom.attached.segment.main .controlsType').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'button') {
            $('.ui.bottom.attached.segment.main .button').removeClass('hidden');
        }
        if ($(this).attr('data-name') == 'tab2') {
            $('.ui.bottom.attached.segment.main .tab2').removeClass('hidden');
        }
    });
    $('.ui.tabular.menu.main').on('click', '.item .remove.icon', function() {
        var classText = $(this).parent().attr('class');
        if (classText.indexOf('active') >= 0) {
            $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
            if ($(this).parent().next().length > 0) {
                $(this).parent().next().addClass('active');
                $('.ui.bottom.attached.segment.main .' + $(this).parent().next().attr('data-name')).removeClass('hidden');
                $(this).parent().remove();
            } else {
                $(this).parent().prev().addClass('active');
                $('.ui.bottom.attached.segment.main .' + $(this).parent().prev().attr('data-name')).removeClass('hidden');
                $(this).parent().remove();
            }
        } else {
            $(this).parent().remove();
        }


        // $('.ui.bottom.attached.segment .' + $(this).parent().attr('data-name')).addClass('hidden');

        return false;
    });
    $('.ui.top.attached.tabular.menu:not(.main)').on('click', '.item', function() {
        $('.ui.top.attached.tabular.menu:not(.main) .item').removeClass('active');
        $(this).addClass('active');
        $('.ui.bottom.attached.segment:not(.main) .item.tab').hide();
        var tabText = $('.ui.bottom.attached.segment:not(.main) .item').text();
        console.log($(this).index());
        $('.ui.bottom.attached.segment:not(.main) .item.tab').eq($(this).index()).show();
        return false;
    });
    $('.ui.accordion').accordion({
        exclusive: false
    });
    $('select.dropdown').dropdown();
    $('.selection.dropdown').dropdown();
    $('.ui.checkbox').checkbox();
    $('.ui.button.submit').click(function() {
        $('.ui.modal')
            .modal({
                blurring: true
            })
            .modal('show');
    });
})
