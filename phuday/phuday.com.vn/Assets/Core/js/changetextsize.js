function ChangeTextSize(value) {
    $(".detail").children().each(function () {
        var size = parseInt($(this).css("font-size"));
        var lineheight = parseInt($(this).css("line-height"));
        size = size + value + "px";
        lineheight = lineheight + value + "px";
        $(this).css({
            'font-size': size,
            'lineheight':lineheight
        });
    });
    var sized = parseInt($(".detail").css("font-size"));
    var lineheightd = parseInt($(".detail").css("line-height"));
    sized = sized + value + "px";
    lineheightd = lineheightd + value + "px";
    $(".detail").css({
        'font-size': sized,
        'lineheight': lineheightd
    });
}