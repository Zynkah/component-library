const tabs = document.querySelectorAll('.component__tabList a');
tabs.forEach((tab, i) => {
	tab.addEventListener('click', (event) => {
		tabs.forEach((tabClasses, j) => {
			tabClasses.classList.remove('active');
		});
		tab.classList.add('active');
		showPage(event.target.hash.slice(1));
	});
});

function showPage(pageId) {
	// Hide all pages
	const pages = document.querySelectorAll('.page');
	pages.forEach((page) => {
		page.classList.remove('active');
	});

	// Show the selected page
	const selectedPage = document.getElementById(pageId);
	selectedPage.classList.add('active');
}

function showFormTab(tabId) {
	const tabs = document.querySelectorAll('.tab');
	tabs.forEach((tab) => {
		tab.classList.remove('active');
	});

	const selectedTab = document.getElementById(tabId);
	selectedTab.classList.add('active');
}
