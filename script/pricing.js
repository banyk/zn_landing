const changeContent = () => {
	let items = document.querySelectorAll('.slider-pricing__item'),
		image = document.querySelector('.pricing__img > img'),
		title = document.querySelector('.descr-pricing__title'),
		infoTime = document.querySelector('.descr-pricing__info > span:first-child'),
		infoPrice = document.querySelector('.descr-pricing__info > span:last-child'),
		descr = document.querySelector('.descr-pricing__text');



	let array = [{
		name: 'eyeliner',
		img: './img/pricing/eye.png',
		title: 'Permanent Eyeliner',
		time: '50min',
		price: '$380',
		descr: 'Does not include the touch up within 3-5 weeks which is\xA0optional but recommended.',
	}, {
		name: 'vitiligo',
		img: './img/pricing/vitiligo.png',
		title: 'Vitiligo Dermacamouflage',
		time: '2h 10min',
		price: '$570',
		descr: 'Does not include the touch up within 3-5 weeks which is\xA0optional but recommended.',
	}, {
		name: 'scars',
		img: './img/pricing/scar.png',
		title: 'Scars	Dermacamouflage',
		time: '1h 30min',
		price: '$550',
		descr: 'Does not include the touch up within 3-5 weeks which is\xA0optional but recommended.',
	}, {
		name: 'brow',
		img: './img/pricing/brow.png',
		title: 'Brow Dermopigmentation',
		time: '1h 30min',
		price: '$490',
		descr: 'Does not include the touch up within 3-5 weeks which is\xA0optional but recommended.',
	}, {
		name: 'lip',
		img: './img/pricing/lip.png',
		title: 'Lip Permanent Makeup',
		time: '1h 10min',
		price: '$490',
		descr: 'Does not include the touch up within 3-5 weeks which is\xA0optional but recommended.',
	}, {
		name: 'breast',
		img: './img/pricing/breast.png',
		title: 'Breast Micropigmentation',
		time: '1h 40min',
		price: '$800',
		descr: 'Free of\xA0charge for breast cancer survivors.',
	}];

	items.forEach(item => {

		if (item.classList.contains('swiper-slide-active')) {

			let innerItem = item.children[0];

			let name = innerItem.getAttribute('data-name');


			array.forEach(obj => {
				if (name === obj.name) {
					image.setAttribute('src', obj.img);
					title.textContent = obj.title;
					infoTime.textContent = obj.time;
					infoPrice.textContent = obj.price;
					descr.textContent = obj.descr;
				}
			});
		}

	});
};


sliderPricing.on('beforeInit', () => {
	changeContent();
});

sliderPricing.on('beforeTransitionStart', () => {
	changeContent();
});