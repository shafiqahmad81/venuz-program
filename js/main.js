'use-strick';
(function($){
    // Added window width
    const windowWidth = $(window).width();
    $(function(){ // Beginning Document Ready function
        // Added search toggle function for smaller screen
        if(windowWidth < 768){ 
            $(".btn-search").on("click", function(e){
                e.preventDefault();
                console.log("Mobile screen");
                $(this).parent().find(".search-field").fadeToggle();
            })
        }
        // Sidebar toggle function
        const sidebar = $(".sidebar");
        $(".sidebar-toggler").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("close");
            sidebar.toggleClass("expanded").fadeToggle();

            if(sidebar.hasClass('expanded')){
                $(".sidebar-nav").css({
                    transform: 'translateX(0)'
                });
            }else{
                $(".sidebar-nav").css({
                    transform: 'translateX(-100%)'
                });
            }
        })

        // Select 2 plugin activation
        $('.form-select').select2({
            minimumResultsForSearch: -1
        });
    })
})(jQuery);