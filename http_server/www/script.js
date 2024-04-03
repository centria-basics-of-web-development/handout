$(document).ready(function() {
    $.get("api/data", function(data){
        $('#title').html(data.title);
        $('#content_paragraph').html(data.content);
    });
});