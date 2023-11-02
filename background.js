chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		removeAds()
	}
})

function removeAds() {
	const targets = [ '.gldeuyy', 'iframe', '#net-pop', '.top-comics', '.mrt5', '.footer', '.top-members', '.new-comments', '[data-type="facebook"]', '#nt_comments' ]

	const body = document.querySelector('body')
	
	setInterval(() => {
		targets.forEach( t => {
			const els = document.querySelectorAll( t )
			els.forEach(e => e.remove())
		} )
		body.nextElementSibling.remove()
	}, 1000);
}