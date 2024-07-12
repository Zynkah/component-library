const pages = [
	'./pages/mail.html',
	'./pages/dashboard.html',
	'./pages/cards.html',
	'./pages/tasks.html',
	'./pages/playground.html',
	'./pages/form.html',
	'./pages/music.html',
	'./pages/authentication.html',
];

for (const page of pages) {
	fetch(page)
		.then((response) => response.text())
		.then((data) => (document.querySelector('.component__display').innerHTML += data));
}
