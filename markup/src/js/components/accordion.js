export default function initAccordion() {

	var Accordion = (parent, element, trigger, slider, mobile) => {
		setTimeout(() => {
			const accordion = document.querySelectorAll(parent);

			accordion.forEach(function (p) {
				p.classList.add('accordion')
				const item = p.querySelectorAll(element)
				const hiddenClass = 'hide'
				const activeClass = 'active'
				const slides = p.querySelectorAll(slider)
				const mobileOnly = mobile

				slides.forEach(function (k) {
					k.style.height = null;
					k.classList.remove(hiddenClass)
				})

				for (var i = 0; i < item.length; i++) {
					const opener = item[i].querySelector(trigger)
					const slide = item[i].querySelector(slider)
					const slideHeight = slide.clientHeight;

					slide.classList.add(hiddenClass);

					opener.addEventListener('click', (e) => {
						e.preventDefault();

						if (!slide.classList.contains(hiddenClass)) {
							slide.classList.add(hiddenClass)
							slide.style.height = null;
							slide.parentNode.classList.remove(activeClass)
						} else {
							slides.forEach(function (i) {
								i.classList.add(hiddenClass)
								i.style.height = null
								i.parentNode.classList.remove(activeClass)
							})
							slide.parentNode.classList.add(activeClass)
							slide.style.height = slideHeight + 'px'
							slide.classList.remove(hiddenClass)

						}
					})

					if (mobileOnly === 'true' && window.matchMedia('(min-width: 768px)').matches) {
						opener.style.pointerEvents = 'none';
						slide.classList.remove(hiddenClass)
						slide.removeAttribute('style')
						item[i].classList.remove(activeClass)
					} else {
						opener.style.pointerEvents = 'all';
					}

					if (item[i].classList.contains('opened')) {
						setTimeout(() => {
							opener.click()
						}, 300);
					}
				}
			})
		}, 300);
	}

	window.addEventListener('load', () => {
		Accordion('.accordion', '.item', '.opener', '.slide', 'false')
	})

	window.addEventListener('resize', () => {
		Accordion('.accordion', '.item', '.opener', '.slide', 'false')
	})
}

