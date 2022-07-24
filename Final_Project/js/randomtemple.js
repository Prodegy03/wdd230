$(function() {
    var chance = new chance();
    $("div[data]").each(function() {
        var tmp = $(this).attr("data");
        $(this).append(chance[tmp]());
    });
});
