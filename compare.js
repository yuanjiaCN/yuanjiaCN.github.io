$(function () {
    var $BUTTON = $("input:last");
    var $First = $("input:first");
    var $Second = $("input:eq(1)");
    var $Show = $("p:last");
    //var $Show = $("p");
    $BUTTON.click(function () {
        var $firstNumber = $First.val();
        var $secondNumber = $Second.val();
        if($firstNumber - $secondNumber >0) {
            $Show.html($firstNumber);
            //$Show[1].innerHTML = $firstNumber;
        }else{
            $Show.html($secondNumber);
            //$Show[1].innerHTML = $secondNumber;
        }
        })
    })
