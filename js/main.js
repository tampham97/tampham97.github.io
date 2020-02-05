$( document ).ready(function() {
    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-link').removeClass("active");
        $('.tab-content').removeClass('active');
        $(this).addClass("active");
        $("#"+tab_id).addClass('active');
    })
    $(".toggle-ico").click(function(){
        $(".side-bar").toggleClass("active");
    })

});
