function removeAds() {
	const targets = [ '.gldeuyy', 'iframe', '#net-pop', '.top-comics', '.mrt5', '.footer', '.top-members', '.new-comments', '[data-type="facebook"]', '#nt_comments' ]
	const body = document.querySelector('body')
	
	setInterval(() => {
		targets.forEach( t => {
			const els = document.querySelectorAll( t )
			els && els.forEach(e => e.remove())
		} )

		body.nextElementSibling?.remove()
	}, 1000);

	let count = 0
	setInterval(() => {
		localStorage.setItem("__PPU_SESSION_1_5575536_false", `1698909551717|1|1698909551717|1|${++count}`)
	}, 300);
}

removeAds()