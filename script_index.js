function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;

"use strict"

// Определение устройства просмотра страницы (Мобильное или ПК)

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}
// --------------------------------------------------------------------------------

// Бургер меню


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    }) 
}

// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
let partnersSwiper = new Swiper('.swiper-providers', {
    wrapperClass: 'swiper-providers__wrapper',
    slideClass: 'swiper-providers__slide',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween: 30,

    slidesPerView: 'auto',
    
    breakpoints: {
        320: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 44,
        },
    },

    direction: 'horizontal',
    // Включение параллакс
    parallax: true,

    

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении элементов слайдера
    observeParents: true, 

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    jbserveSlideChildren: true, 


    // Навигация
})
const headerMenu = document.querySelector('header');
const burgerChange = document.querySelector('.burger-change');
window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
    headerMenu.classList.add('_moving');
}

const inputFocused = document.querySelectorAll('.form-contact__input');
if (inputFocused.length > 0) {
    for (let index = 0; index < inputFocused.length; index++) {
        let inputActive = inputFocused[index];
        inputActive.addEventListener('focus', function() {
            inputActive.previousElementSibling.style.cssText += 'transform: translate(0, 30%);opacity: 0.3;';
        });
        inputActive.addEventListener('blur', function() {
            inputActive.previousElementSibling.style.cssText = '';
        });
    }
}
