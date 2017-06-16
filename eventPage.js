var contextMenuItem = {
    "id": "imdbSearch",
    "title": "IMDb Search",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

// Formats string for web search
function fixedEncodeURI (str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "imdbSearch" && clickData.selectionText){
        var ImdbUrl = "http://www.imdb.com/find?ref_=nv_sr_fn&q=" 
        + fixedEncodeURI(clickData.selectionText) + "&s=all";
        // alert(wikiUrl);
        var createData = {
            "url": ImdbUrl,
            "type": "popup",
            "top": parseInt(screen.availHeight/4),
            "left": parseInt(screen.availWidth/4),
            "width": parseInt(screen.availWidth/2),
            "height": parseInt(screen.availHeight/2)
        };
        chrome.windows.create(createData, function(){});
    }
});