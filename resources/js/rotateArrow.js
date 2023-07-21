export const rotateArrow = () => {
    let rotation = 0;                            
    $(".slide-navbar__item").click(function () {
        rotation = (rotation + 180) % 360;
        $(this.children[0]).css({ "transform": `rotate(${rotation}deg)`});
        $('.sub-menu').toggleClass('expand');
    });
}