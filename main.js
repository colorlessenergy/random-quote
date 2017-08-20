$.getJSON("https://quotesondesign.com/wp-json/posts?                    filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
    $(".message").append(json[0].content + "&mdash; " + json[0].title);
    $(".twitter").attr("href", "https://twitter.com/intent/tweet?text=" + json[0].content + " " + json[0].title);
});

$("document").ready(function() {
    $.ajaxSetup({
        cache: false
    });
    document.querySelector("button").addEventListener("click", function() {
        $.getJSON("https://quotesondesign.com/wp-json/posts?                    filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
            $(".message").html("");
            $(".message").append(json[0].content + "&mdash; " + json[0].title);
            $(".twitter").attr("href", "https://twitter.com/intent/tweet?text=" + json[0].content + " " + json[0].title);

        });
    })
})
