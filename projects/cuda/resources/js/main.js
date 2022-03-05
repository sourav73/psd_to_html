$(document).ready(function(){

    // Sticky menu
    $('.js--services-section').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
            $('.sticky-div').addClass('sticky-bg');
        } else{
            $('nav').removeClass('sticky');
            $('.sticky-div').removeClass('sticky-bg');
        }
    });


    // Mixitup for filtering(Portfolio)
    var mixer = mixitup('.container');

    // Smooth scroll for Internet explorer
    $('a').click(function (e) { 
        // e.preventDefault();
        if(this.hash !== ''){
            e.preventDefault();
            var hash =  this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },100, function(){
                window.location.hash = hash;
            });
        }
    });
    
});

function openNav(){
    document.getElementById('mobile-nav').style.width = '100%';
}

function closeNav(){
    document.getElementById('mobile-nav').style.width = '0%';
}