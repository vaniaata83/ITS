$('.carousel').carousel({
    interval: 3000
});


const scrollToTopButton = $('.scrollToTop');
if ($(window).scrollTop() < headerHeight) {
    scrollToTopButton.addClass('scrollToTopHide')
}

$(window).on('scroll', function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop < headerHeight) {
            if (!scrollToTopButton.hasClass('scrollToTopHide')) {
                scrollToTopButton.addClass('scrollToTopHide')
            }
        } else {
            if (scrollToTopButton.hasClass('scrollToTopHide')) {
                scrollToTopButton.removeClass('scrollToTopHide')
            }
        }
    }
);
