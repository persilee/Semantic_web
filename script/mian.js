$(function() {
    $('.ui.button.bar').click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });
    $('.ui.tabular .item').click(function() {
        $('.ui.tabular .item').removeClass('active');
        $(this).addClass('active');
        $('.ui.bottom.attached.segment .tab').addClass('hidden');
        if ($(this).text() == 'Tab1') {
            console.log('aa');
            $('.ui.bottom.attached.segment .tab1').removeClass('hidden');
        }
        if ($(this).text() == 'Tab2') {
            $('.ui.bottom.attached.segment .tab2').removeClass('hidden');
        }
    });
    $('.ui.accordion').accordion();
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
