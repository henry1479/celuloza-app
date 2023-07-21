export const toggleSliderMenu = () => {
    jQuery(function ($) {
        $('.hidden-menu').click(function () {
            // console.log("click");
            $('.slide-menu').toggleClass('expand')
            $(".hamburger").toggle();
            $(".cross").toggle();
            

        })
    });
}