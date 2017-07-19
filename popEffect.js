$(function () {
    var $button = $(".popButton");
    var $pop = $(".pop")
    var $cancel = $(".cancel")
    $button.click(function () {
        $pop.addClass("show");
    })
    $cancel.click(function () {
        $pop.removeClass("show");
    })
})