$(document).ready(function () {
    $(".icon.burger-menu.dark").on("click", function () {
        $(".menu").toggleClass("show hidden");

    });

});

$(document).mouseup(function (e) {
    var container = $(".menu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if (container.hasClass("show")) {
            container.toggleClass("show hidden");

        }
    }


});