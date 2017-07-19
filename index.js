$(function () {
    var $guide = $("#guide");
    var $guideP = $(".littleHeader a:gt(2)")
    $guideP.hide();
    $guide.click(function () {
        $guideP.toggle();
    })
})