$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open')
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-title .chevron').removeClass('down');
    }

    $(document).on("click", ".accordion-section-title", function(e){
        var currentAttrValue = $(this).attr('href');
        var chevron = e.currentTarget.childNodes[1]

        if($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            $(this).addClass('active');
            $(chevron).addClass('down');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

});
