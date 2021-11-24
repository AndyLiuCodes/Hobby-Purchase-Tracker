function test(){
    alert("hi")
}

var contextMenuItem = {
    id: "saveHobbyItem",
    title: "Save to Hobby Purchase List",
    contexts: ["all"]  // type of context
};

//Note: The options for context menus are: "all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action", or "page_action"
chrome.contextMenus.create(contextMenuItem); 

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(tab) {
        if (info.menuItemId === 'saveHobbyItem'){
            // proccess item

            // Add item to storage
        }
    }
})

