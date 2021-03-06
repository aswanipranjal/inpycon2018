$(document).ready(function(){

    $.get('./data/sponsors.json',function(response){
        constructSponsorBlock(response);
    });
});

constructSponsorBlock = function(data){
        var sponsorContent = "";

        $.each(data, function(key, value) {
            sponsorContent += "<h3 class='text-center'>" + key + " Sponsors</h3>";
            for(var i = 0; i < value.length; i += 3) {
                sponsorGroups = value.slice(i, i+3);
                sponsorContent += "<div class='row'>"
                sponsorContent += buildSponsorRow(sponsorGroups);
                sponsorContent += "</div>";
            }

        });
            
        $("#sponsors-content").append(sponsorContent);
}

buildSponsorRow = function(items) {
    var totalItems = items.length;
    var offset = '';
    var rowContent = '';
    switch(totalItems) {
        case 1:
            offset = 'col-md-offset-4 ';
            break;
        case 2:
            offset = 'col-md-offset-2 ';
            break;
        default:
            offset = ''
    }

    for (var i = 0; i < totalItems; i++) {
        rowContent += "<div class='" + (i == 0 ? offset : "")  + "col-md-4 sponsor-padding'><a href='" + items[i]["link"] +
            "' target='_blank'><div class='img-container'><img src='" + items[i]["img"] + "' alt='" + items[i]["alt-text"] +
            "' class='img-responsive sponsor center-block'></a></div></div>";
    }

    return rowContent;
}
