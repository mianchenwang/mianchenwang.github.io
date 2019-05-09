function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


// submissions
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
        
        
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 20,
            order: "viewCount",
           //set timeline
            publishedAfter: "2018-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("tpl/item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});


//set video height
function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}


//set api
function init() {
    gapi.client.setApiKey("AIzaSyDrYa2xQyo6BJ8tmiNWO_TmuLbrLJoctJo");
    gapi.client.load("youtube", "v3", function() {
       
    });
}
