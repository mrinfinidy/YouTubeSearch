var searchThis = {
    "id": "selectedText",
    "title": "Search on YouTube",
    contexts: ["selection"],
    onclick: clickOnContextMenu
};

chrome.contextMenus.create(searchThis);

const clickOnContextMenu = (clickedItem) => {
    var searchTerm = encodeURI(clickedItem.selectionText);
    searchTerm = searchTerm.replace(/\#/g, '%23');
    var address = "https://www.youtube.com/results?search_query=" + searchTerm;
    window.open(address, "_blank");
}
