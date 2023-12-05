var searchThis = {
    "id": "selectedText",
    "title": "Search on YouTube",
    contexts: ["selection"],
};

function contextMenuOnClick(clickedItem) {
    var searchTerm = encodeURI(clickedItem.selectionText);
    searchTerm = searchTerm.replace(/\#/g, '%23');
    var address = "https://www.youtube.com/results?search_query=" + searchTerm;
    window.open(address, "_blank");
}

chrome.contextMenus.create(searchThis);
chrome.contextMenus.onClicked.addListener(contextMenuOnClick);
