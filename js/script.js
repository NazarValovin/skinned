
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    //Include File


    function includeScript() {
        const fontAmesom = '<script src="https://kit.fontawesome.com/d9a2c7f233.js" crossorigin="anonymous"></script>';
        const swiper = '<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>';
        const script = document.querySelector('[data-script]');

        // script.insertAdjacentHTML('beforebegin', fontAmesom);
        script.insertAdjacentHTML('beforebegin', swiper);
    }

    // includeScript();

    //----------------------------------------




    //Swiper

    function innitSwiper() {
        const swiper = new Swiper('.offer__slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
        });

        const swiperVideo = new Swiper('.video__slider', {
            // Default parameters
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            },
        });

        const swiperRewiew = new Swiper('.rewiew__slider', {
            // Default parameters
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    innitSwiper();



    //===================================================================================================================


    //Location

    function firstElementLocationActive(locationHeadText, locationBItem, locationHead, locationCity, phoneMoscow, i = 0) {
        locationHeadText.textContent = locationBItem[i].textContent;
        locationHead.setAttribute('data-city', `${locationBItem[i].textContent.trim()}`);
        locationCity.classList.add('_active');
        phoneMoscow.classList.add('_active');
    }


    function clickLocation() {
        const locationHead = document.querySelector('.top-header__location-head');
        const locationHeadText = document.querySelector('.top-header__location-head p');
        const locationBody = document.querySelector('.top-header__location-body');
        const locationBItem = document.querySelectorAll('.top-header__location-item');
        const locationCity = document.querySelector('.top-header__location-city');
        const phoneMoscow = document.querySelector('.top-header__phone-moscow');
        const phoneEcaterenburg = document.querySelector('.top-header__phone-ekaterenburg');

        if (locationHead) {
            locationHead.addEventListener('click', () => {
                locationBody.classList.toggle('_active');
            });

            for (let index = 0; index < locationBItem.length; index++) {
                const element = locationBItem[index];

                element.addEventListener('click', () => {
                    locationHeadText.textContent = element.textContent;
                    locationHead.setAttribute('data-city', `${element.textContent.trim()}`);
                    locationBody.classList.remove('_active');

                    if (locationHead.dataset.city === 'Москва') {
                        locationCity.classList.add('_active');
                        phoneMoscow.classList.add('_active');
                    } else {
                        locationCity.classList.remove('_active');
                        phoneMoscow.classList.remove('_active');
                    }

                    if (locationHead.dataset.city === 'Екатеринбург') {
                        phoneEcaterenburg.classList.add('_active');
                    } else {
                        phoneEcaterenburg.classList.remove('_active');
                    }
                });
            }
            firstElementLocationActive(locationHeadText, locationBItem, locationHead, locationCity, phoneMoscow);
        }
    }

    clickLocation();



    //==================================================================================





    //Burger menu


    function clickBurger() {
        const burger = document.querySelector('.burger-header');
        const header = document.querySelector('.header');
        const nav = document.querySelector('.bottom-header__nav');
        const email = document.querySelector('.top-header__mail');
        const social = document.querySelector('.top-header__social');
        const btn = document.querySelector('.bottom-header__btn');
        const body = document.querySelector('.body');

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
                body.classList.toggle('_active');
                header.classList.toggle('_active');
                menuMobile.classList.toggle('_zindex');
            });

            if (document.documentElement.clientWidth <= 757) {

                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', nav);
                menuMobile.insertAdjacentElement('beforeend', email);
            }
            if (document.documentElement.clientWidth <= 690) {
                menuMobile.insertAdjacentElement('beforeend', social);
            }
            if (document.documentElement.clientWidth <= 450) {
                menuMobile.insertAdjacentElement('beforeend', btn);
            }
        }

    }

    clickBurger();




    //====================================================================================





    //Scroll Header


    function headerFixed() {
        const header = document.querySelector('.header');
        const height = header.clientHeight;
        const nextElement = header.nextElementSibling;
        const childrenNextElement = nextElement.children;
        const menuMobile = document.querySelector('.menu-mobile');

        if (header) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset >= 200) {
                    header.classList.add('_fixed');
                    header.classList.add('_scroll');

                    if (document.documentElement.clientWidth <= 757) {
                        menuMobile.classList.add('_scroll');
                    }
                    childrenNextElement[0].style.marginTop = `${height}px`;
                } else {
                    header.classList.remove('_fixed');
                    header.classList.remove('_scroll');

                    if (document.documentElement.clientWidth <= 757) {
                        menuMobile.classList.remove('_scroll');
                    }

                    childrenNextElement[0].style.marginTop = ``;
                }
            });
        }
    }

    headerFixed();





    //=============================================================================================




    //modal


    function closeModal(closeBtn, body) {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').classList.remove('_active');
            body.classList.remove('_active');
            body.style.paddingRight = `0px`;
        });
    }
    function calcScroll() {
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    function showModal() {
        const modal = document.querySelector('.modal');
        const btn = document.querySelectorAll('[data-btn]');
        const closeBtn = document.querySelector('.modal__close');
        const body = document.querySelector('.body');
        const burger = document.querySelector('.burger-header');
        const menuMobile = document.querySelector('.menu-mobile');
        const header = document.querySelector('.header');
        const scroll = calcScroll();

        if (modal) {
            for (let index = 0; index < btn.length; index++) {
                const element = btn[index];

                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.classList.add('_active');
                    body.classList.add('_active');
                    document.body.style.paddingRight = `${scroll}px`;
                    // calcScroll();
                    if (burger.classList.contains('_active')) {
                        burger.classList.remove('_active');
                        menuMobile.classList.remove('_active');
                        menuMobile.classList.remove('_zindex');
                        header.classList.remove('_active');
                    }
                });
            }
            closeModal(closeBtn, body);
        }
    }

    showModal();


    //====================================================================================
















});