
chrome.browserAction.onClicked.addListener(button)


function button(tab){

let msg ={

  txt:"hello"
}

chrome.tabs.sendMessage(tab.id, msg)
}

