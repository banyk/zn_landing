const changeClient = () => {
	let clientName = document.querySelector('.content-reviews__name'),
		clientMail = document.querySelector('.content-reviews__mail'),
		clientText = document.querySelector('.content-reviews__inner-text'),
		clientPhoto = document.querySelector('.content-reviews__photo > img'),
		clientsList = document.querySelector('.slider-reviews__list');

	let clientsArray = [{
			name: 'Bernadette Johnson',
			mail: 'baj831@gmail.com',
			text: 'What an\xA0amazing experience with Zhanar. I\xA0have to\xA0admit that\xA0I was a\xA0bit nervous since\xA0I came to Zhanar to\xA0complete my\xA0aging eyebrows. Zhanar did an\xA0amazing job with the color, for my\xA0brows, to\xA0accompany my\xA0salt and pepper gray hair. I\xA0was well informed about the procedure, felt no\xA0pain, and most of\xA0all appreciated her professional	approach. Her office was so\xA0clean and tidy...',
			img: './img/reviews/bernadette.png'
		},
		{
			name: 'Nikki Carter',
			mail: 'nikki@outlook.com',
			text: 'Wonderfully surprised! I\xA0admit\xA0I was a\xA0bit hesitant to\xA0go\xA0 through with getting my\xA0eyebrows done...',
			img: './img/reviews/nikki.png'
		},
		{
			name: 'Soobin Park',
			mail: 'soobin@hello.com',
			text: 'I\xA0absolutely love my\xA0new lip color. Can\'t believe that I\xA0don\'t need to\xA0apply lipstick every day anymore...',
			img: './img/reviews/soobin.png'
		}
	];

	clientsList.addEventListener('click', e => {
		e.preventDefault();
		let target = e.target.closest('ul > li');
		let client;
		if (target) {

			client = target.getAttribute('data-client');
		}

		clientsArray.forEach(item => {
			if (item.name === client) {
				clientName.textContent = item.name;
				clientMail.textContent = item.mail;
				clientText.textContent = item.text;
				clientPhoto.setAttribute('src', item.img);
			}
		})


	});

}


changeClient();