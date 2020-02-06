$( document ).ready(function() {
    // fortfolio
    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-link').removeClass("active");
        $('.tab-content').removeClass('active');
        $(this).addClass("active");
        $("#"+tab_id).addClass('active');
        // $(".right-area").scrollTop(0);
        $("#"+tab_id).scrollTop(0);
    })

    // toggle Ico Sidebar
    $(".toggle-ico").click(function(){
        $(".side-bar").toggleClass("active");
    })

    // fortfolio
    $('.fortfolio-content > .row').isotope({
        itemSelector: '.box',
        layoutMode: 'fitRows',
      });      
    $(".fortfolio .category li a").click(function(){
        $(".fortfolio .category li a").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $('.fortfolio-content > .row').isotope({
            filter: selector
        });
        return false;
    })
    $(".fortfolio-content .work").click(function(){
        var idModal = $(this).attr("data-modal");
        $("#"+ idModal).addClass("active");
    })
    $(".close-ico").click(function(){
        $(".bg-modal").removeClass("active");
    })
    
});
