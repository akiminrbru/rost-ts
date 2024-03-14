// Swiper main banner
let progressBar = document.querySelector('.swiper-progress');

const swiperBanner = new Swiper('.swiperBanner', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination-banner',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-banner-next',
      prevEl: '.swiper-banner-prev',
    },
    
    on: {
        init: function() {
            progressBar?.classList.add('active');
        },
    }
});

swiperBanner.on('slideChange', function () {
    progressBar?.classList.remove('active');
    setTimeout(()=> progressBar?.classList.add('active'), 10)
});

// Бургер меню

let burger_btn = document.querySelector('.zheader__burgerBtn');
let burger__nav = document.querySelector('.zheader__nav'); 
let body = document.querySelector('body');

burger_btn?.addEventListener('click', () => {
    burger_btn?.classList.toggle('active');
    burger__nav?.classList.toggle('active');
    body.classList.toggle('active');
});

// Функция для переноса блоков

function transfer(enter, place, back, size, viewAdd, viewAddBack) {
    window.addEventListener('resize', () => {
        if (window.innerWidth <= size) {
            place?.append(enter);
        } else {
            back?.append(enter);
        }
    });
    
    if (window.innerWidth <= size) {
        place?.append(enter);
    } else {
        back?.append(enter);
    }
}

// Перенос верхнего меню в бурегер
let enter = document.querySelector('.zheader__panel_inner');
let place = document.querySelector('.zheader__nav');
let back = document.querySelector('.zheader__panel_wrapper');
if (enter && place && back) {
    transfer(enter, place, back, '1300');
}

// Перенес лого футера в футере

let enter2 = document.querySelector('.zfooter__main_logo');
let place2 = document.querySelector('.zfooter__panel_inner');
let back2 = document.querySelector('.zfooter__main_left');
if (enter2 && place2 && back2) {
    transfer(enter2, place2, back2, '576', 'append', 'prepand');
}


// Слайдер парнеров

const swiperPartners = new Swiper('.swiperPartners', {
    enabled: false,
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-partners-next',
      prevEl: '.swiper-partners-prev',
    },
    breakpoints: {
        577: {
            enabled: true,
            spaceBetween: 64,
        },
    },
});