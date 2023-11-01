function removeAds() {
	const targets = [ '.gldeuyy', 'iframe', '#net-pop', '.top-comics', '.mrt5', '.footer', '.top-members', '.new-comments', '[data-type="facebook"]', '#nt_comments' ]

	targets.forEach( t => {
		const els = document.querySelectorAll( t )
		els.forEach(e => e.remove())
	} )
}

removeAds()

chrome.tabs.onUpdated.addListener(function() {
	removeAds()
})

chrome.runtime.onMessage.addListener(function() {
	removeAds()
});