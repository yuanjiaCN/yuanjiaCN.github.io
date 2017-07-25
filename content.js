$(function () {
    var $hasComment = $(".comment div");
    if($hasComment>0){
        $(".comment>p").hide();
    }else {
        $(".comment>p").show();
    }
    $("#author").focus(function () {
        if($(this).val()==this.defaultValue ||"不告诉我名字就不让你评论哼！"){
            $(this).val("");
            $(this).css({
                color:"black"
            })
        }
    });
    $("#author").blur(function () {
        if($(this).val()==""){
            $(this).val("你叫啥呀");
        }
    });
    $("#address").focus(function () {
        if($(this).val()==this.defaultValue){
            $(this).val("");
        }
    });
    $("#address").blur(function () {
        if($(this).val()==""){
            $(this).val("你是哪里人呀");
        }
    });
    $("#comment").focus(function () {
        if($(this).val()==this.defaultValue ||"真的不说点什么吗！嘤嘤嘤"){
            $(this).val("");
            $(this).css({
                color:"black"
            })
        }
    });
    $("#comment").blur(function () {
        if($(this).val()==""){
            $(this).val("求你了，说点什么吧");
        }
    });
    $("#button").click(function () {
        var $name = $("#author").val();
        if($("#address").val()=="你是哪里人呀"){
            $address = "不明地区";
        }else{
            $address = $("#address").val();
        }
        var $comment = $("#comment").val();
        if($name=="你叫啥呀"||$name=="不告诉我名字就不让你评论哼！"){
            $("#author").val("不告诉我名字就不让你评论哼！");
            $("#author").css({
                color: "red"
            })
        }else if($comment=="求你了，说点什么吧"||$comment=="真的不说点什么吗！嘤嘤嘤"){
            $("#comment").val("真的不说点什么吗！嘤嘤嘤");
            $("#comment").css({
                color: "red"
            })
        }else{
            alert("评论成功");
            $(".comment>p").hide();
            $(".comment").append("<img src='picture/head.jpg'>");
            $(".comment").append("<span>来自"+" "+$address+" "+"的"+" "+$name+" "+"在2017.07评论</span>");
            $(".comment").append("<div style='border-bottom: 1px dotted #64706c'>"+$comment+"</div>");
            if(!$("#rememberYes").is(":checked")){
                $("#author").val("你叫啥呀");
                $("#comment").val("求你了，说点什么吧");
                $("#address").val("你是哪里人呀");
            }
        }
    })
})