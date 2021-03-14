$('.carousel').carousel({
    interval: 3000
});


const scrollToTopButton = $('.scrollToTop');
if ($(window).scrollTop() < headerHeight) {
    scrollToTopButton
        .css({
            opacity: 0,
            pointerEvents: 'none'
        })
}

$(window).on('scroll', function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop < headerHeight) {
        scrollToTopButton
            .css({
                opacity: 0,
                pointerEvents: 'none'
            })
    } else {
        scrollToTopButton
            .css({
                opacity: 1,
                pointerEvents: 'initial'
            })
    }


});
