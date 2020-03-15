var searchThis = {
    "id": "selectedText",
    "title": "Search on YouTube",
    contexts: ["selection"]
};

chrome.contextMenus.create(searchThis);

chrome.contextMenus.onClicked.addListener(function(clickedItem) {
    var searchTerm = encodeURI(clickedItem.selectionText)
    var address = "https://www.youtube.com/results?search_query=" + searchTerm;
    window.open(address, "_blank");

})
