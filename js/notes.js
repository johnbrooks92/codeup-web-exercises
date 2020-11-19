$("#submit").hover(function (){
    $(this).css({
        "cursor": "pointer",
        "backgroundColor": "#220901",
        "color": "#f4fffd"
    });
}, function (){
    $(this).css({
        "backgroundColor": "#f4fffd",
        "color": "#220901"
    });
}).on("click", searchArea);