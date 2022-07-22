$(function() {
    var chance = new Chance();
    $("div[data]").each(function() {
        var tmp = $(this).attr("data");
        $(this).append(chance[tmp]());
    });
});
