$(function () {
    var workSection = document.getElementsByClassName("works"),
        section = workSection[0].getElementsByTagName("section"),
        div = section[0].getElementsByTagName("div"),
        workSection = document.getElementsByClassName("works"),
        section = workSection[0].getElementsByTagName("section"),
        div = section[0].getElementsByTagName("div");
    $("#index>section.works>section").append($all);

    $("#index>section.works>section a").wrap("<div></div>");

    section[0].innerHTML = section[0].innerHTML + section[0].innerHTML;
//复制一份全体div
    section[0].style.width = div[0].offsetWidth * div.length + 2 * div.length + "px";
//让section的宽度能够容纳所有的div，不然宽度不够的话，宽度以外可以容纳的div会掉在下方
    function odd() {
        for (i = 0; i < div.length; i++) {
            div[i].style.width = div[i].offsetWidth / (div.length / 3) / 0.93 + "px";//现在div本身已经是2倍的博客数了，不用再*2,0.93是3倍div的宽度，31%*3，不要把margin一起算进去

            div[i].style.margin = div[i].offsetWidth / (div.length / 3) / 31 / 0.93 + "px";

        }
    }
    odd();
    function example() {
        var timer = setTimeout(function () {
            if (section[0].offsetLeft < -section[0].offsetWidth / 2) {
                //当原本的一组div的最后一个也过去的时候，也就是section的宽度的一半
                section[0].style.left = '0';
                //把这个section拽回到一开始的状态
            }
            section[0].style.left = section[0].offsetLeft - 30 + "px";
            setTimeout(example, 10);
        }, 10)
    }
    example();
});