var searchThis = {
    "id": "selectedText",
    "title": "Search on YouTube",
    contexts: ["selection"],
};

function contextMenuOnClick(clickedItem) {
    var searchTerm = encodeURI(clickedItem.selectionText);
    searchTerm = searchTerm.replace(/\#/g, '%23');
    var address = "https://www.youtube.com/results?search_query=" + searchTerm;

    chrome.windows.create({
        url: address,
        type: "normal"
    });
}

chrome.contextMenus.create(searchThis);
chrome.contextMenus.onClicked.addListener(contextMenuOnClick);
