// Smooth scrolling
$('.main-nav a').on("click", function (e) {
    const href = $(this).attr("href");
    if(href.length > 1){
        $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
    }
});

// Sticky navbar
$(window).scroll(function () { 
    if(window.scrollY > 400){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky');
    }
});

$('.services .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('.themes .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    dots: false,
    items: 1,
});

$('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    items: 1
});

const moreButtons = $('.articles .hover-content .more i');
const moreButtonsContents = $('.articles .hover-content .more-content');
for (let i = 0; i < moreButtons.length; i++) {
    $(moreButtons[i]).click(function (e) {
        $(this).toggleClass('fa-plus fa-minus');
        $(moreButtonsContents[i]).slideToggle();
        // $($('.articles .hover-content .more-content')[i]).slideToggle();
    });
}

const $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    // percentPosition: true,
    masonry: {
        fitWidth: true,
    },
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    $('.filter-button-group button').removeClass('is-checked');
    $(this).addClass('is-checked');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

