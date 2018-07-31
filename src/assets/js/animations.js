$(".menu .cards").transition({
    animation: "slide down",
    duration: "500",
    interval: "200"
});
$(".notificacao").transition("slide down", "500ms");

$(".notificacao .icon").click(function(){
    if($(this).closest(".icon").hasClass("down")){
        $(".down").attr("class", "angle up icon");
    } else {
        $(".up").attr("class", "angle down icon");
    }
    $(".ntf").transition("slide down", "500ms");
});

$(".menu .items .arrow").click(function(){
    $(".menu .cards").transition({
        animation: "slide down",
        duration: "500",
        interval: "200"
    });
});