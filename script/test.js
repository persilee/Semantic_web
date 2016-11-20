$(function() {
    var isMenu = true;
    var timer = null;
    // $('.ui.grid').height($(window).height());
    $('.three.wide.column').height($(window).height() - 62);
    $('.thirteen.wide.column').height($(window).height() - 62);
    $('.ui.right.floated.content').height($(window).height() - 62);
    $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
    $('.ui.vertical.text.menu .item,.ui.styled.accordion .title').on({
        mouseover: function() {
            clearTimeout(timer);
            $('.article').height($(this).height() * 2.6).css('left', $('.ui.secondary.vertical.pointing.menu').width() - 7).css('top', $(this).offset().top);
        },
        mouseout: function() {
            timer = setInterval(function() {
                $('.article').css('top', -50);
            }, 300);
        }
    });

    $('.ui.button.bar').click(function() {
        if (isMenu) {
            $('.three.wide.column').transition('fly right', 600, function() {
                $('.three.wide.column').css('cssText', 'width:0px!important');
                $('.thirteen.wide.column').css('cssText', 'width:98%!important');
            }).transition('clear queue');
            isMenu = false;
        } else {
            $('.three.wide.column').transition('fade left', 200, function() {
                $('.three.wide.column').css('cssText', 'width:18.75%!important');
                $('.thirteen.wide.column').css('cssText', 'width:81.25%!important');
            }).transition('clear queue');
            isMenu = true;
        }
        $('.three.wide.column').height($(window).height() - 62);
    });
    $('.ui.vertical.text.menu').on('click', '.item', function() {
        $('.ui.vertical.text.menu .item').removeClass('header');
        $(this).addClass('header');
        var tabText = $('.ui.tabular.menu.main').text();
        var _this = $(this);
        if (tabText.indexOf($(this).text()) >= 0 || $(this).attr('target') == '_blank' || $(this).text() == '弹出层') {
            $('.ui.tabular.main .item').each(function(i, n) {
                if ($('.ui.tabular.main .item').eq(i).attr('data-name') == _this.attr('data-name')) {
                    $('.ui.tabular.main .item').removeClass('active');
                    $('.ui.tabular.main .item').eq(i).addClass('active');
                    $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
                    $('.ui.bottom.attached.segment.main .' + _this.attr('data-name')).removeClass('hidden');
                }
            });

            console.log('you');
        } else {
            $('.ui.tabular.main .item').removeClass('active');
            $('.ui.tabular.menu.main').prepend('<a class="item active" data-name =' + $(this).attr('data-name') + '>' + $(this).text() + '<i class="remove icon"></a>');
            $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
            $('.ui.bottom.attached.segment.main .' + $(this).attr('data-name')).removeClass('hidden');
            if ($(this).attr('data-name') == 'tabSheet') {
                $('.ui.bottom.attached.segment.main .tabSheet').removeClass('hidden');
                $('.ui.top.attached.tabular.menu:not(.main) .item').removeClass('active');
                $('.ui.top.attached.tabular.menu:not(.main) .item').eq(0).addClass('active');
                $('.ui.bottom.attached.segment:not(.main) .item.tab').hide();
                $('.ui.bottom.attached.segment:not(.main) .item.tab').eq('0').show();
            }
        }
    });
    $('.ui.tabular.main').on('click', '.item', function() {
        $('.ui.tabular.main .item').removeClass('active');
        $(this).addClass('active');
        $('.ui.bottom.attached.segment.main .tab').addClass('hidden');
        $('.ui.bottom.attached.segment.main .' + $(this).attr('data-name')).removeClass('hidden');
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
    $("#dtBox").DateTimePicker({
        language: "zh-CN"
    });

    $(function () {
    var $result = $('#eventsResult');

    $('#eventsTable').on('all.bs.table', function (e, name, args) {
        console.log('Event:', name, ', data:', args);
    })
    .on('click-row.bs.table', function (e, row, $element) {
        $result.text('Event: click-row.bs.table');
    })
    .on('dbl-click-row.bs.table', function (e, row, $element) {
        $result.text('Event: dbl-click-row.bs.table');
    })
    .on('sort.bs.table', function (e, name, order) {
        $result.text('Event: sort.bs.table');
    })
    .on('check.bs.table', function (e, row) {
        $result.text('Event: check.bs.table');
    })
    .on('uncheck.bs.table', function (e, row) {
        $result.text('Event: uncheck.bs.table');
    })
    .on('check-all.bs.table', function (e) {
        $result.text('Event: check-all.bs.table');
    })
    .on('uncheck-all.bs.table', function (e) {
        $result.text('Event: uncheck-all.bs.table');
    })
    .on('load-success.bs.table', function (e, data) {
        $result.text('Event: load-success.bs.table');
    })
    .on('load-error.bs.table', function (e, status) {
        $result.text('Event: load-error.bs.table');
    })
    .on('column-switch.bs.table', function (e, field, checked) {
        $result.text('Event: column-switch.bs.table');
    })
    .on('page-change.bs.table', function (e, number, size) {
        $result.text('Event: page-change.bs.table');
    })
    .on('search.bs.table', function (e, text) {
        $result.text('Event: search.bs.table');
    });
});

    // $('.ui.button.submit').click(function() {
    //     $('.ui.modal.submit')
    //         .modal({
    //             blurring: true
    //         })
    //         .modal('show');
    // });
    $('.item.modal.test').click(function() {
        $('.ui.modal.test')
            .modal({
                blurring: true
            })
            .modal('show');
    });
    $('.pup').popup({
        hoverable: true
    });

    $('.ui.form.one').form({
        fields: {
            firstname: {
                identifier: 'firstName',
                rules: [{
                    type: 'empty',
                    prompt: '请输入你的First Name'
                }]
            },
            lastname: {
                identifier: 'lastName',
                rules: [{
                    type: 'empty',
                    prompt: '请输入你的Last Name'
                }]
            },
            terms: {
                identifier: 'terms',
                rules: [{
                    type: 'checked',
                    prompt: '你必须同意条款'
                }]
            }
        },
        inline: true,
        on: 'blur'
    });
    $('.ui.form.two').form({
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your name'
                }]
            },
            skills: {
                identifier: 'skills',
                rules: [{
                    type: 'minCount[2]',
                    prompt: 'Please select at least two skills'
                }]
            },
            gender: {
                identifier: 'gender',
                rules: [{
                    type: 'empty',
                    prompt: 'Please select a gender'
                }]
            },
            username: {
                identifier: 'username',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a username'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a password'
                }, {
                    type: 'minLength[6]',
                    prompt: 'Your password must be at least {ruleValue} characters'
                }]
            },
            terms: {
                identifier: 'terms',
                rules: [{
                    type: 'checked',
                    prompt: 'You must agree to the terms and conditions'
                }]
            }
        }
    });
    $.fn.form.settings.defaults = {
        selectedNo: {
            identifier: 'selectedNo',
            rules: [{
                type: 'empty',
                pormpt: '请选择NO.'
            }]
        },
        parid: {
            identifier: 'parid',
            rules: [{
                type: 'empty',
                prompt: '请输入NO.'
            }]
        },
        partype: {
            identifier: 'partype',
            rules: [{
                type: 'empty',
                prompt: '请输入type'
            }]
        }
    }
    $('ui.form').form();
})
