chrome.runtime.onInstalled.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.sendMessage( tabId, {
		message: 'reloaded!',
		url: changeInfo.url
	})
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.sendMessage( tabId, {
		message: 'reloaded!',
		url: changeInfo.url
	})
})