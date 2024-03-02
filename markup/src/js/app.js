import ready, { HTML } from './utils';
import initMobileMenu from './components/mobileMenu';
import initSwiper from './components/swiper';
import initAccordion from './components/accordion';
import initTabs from './components/tabs';

ready(() => {
	HTML.classList.add('is-loaded');
	initMobileMenu();
	initSwiper();
	initAccordion();
	initTabs();
});
