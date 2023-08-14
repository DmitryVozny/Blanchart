/*burger*/

const burger = () => {

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.header__link');
  let login = menu.querySelector('.header__login');

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('header__nav--active');
      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {

    el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    });

    login.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__nav--active');
      document.body.classList.remove('stop-scroll');
    })
  });
}

burger();

/*search form*/

const searchForm = () => {

  let openBtn = document.querySelector('.header__btn-search');
  let form = document.querySelector('.header__form');
  let closeBtn = form.querySelector('.header__form-btn-close');

  openBtn.addEventListener('click', function () {
    form.classList.add('form--open')
  });

  closeBtn.addEventListener('click', function () {
    form.classList.remove('form--open')
  });
}

searchForm();

/*drop menu*/

const dropMenu = () => {

  const menuBtns = document.querySelectorAll('.header__menu-btn');
  const drops = document.querySelectorAll('.header__dropdownmenu');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.header__menu-item').querySelector('.header__dropdownmenu');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('header__menu-btn--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('is-visible');
        }
      });

      drop.classList.toggle('is-visible');
      currentBtn.classList.toggle('header__menu-btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('header__menu-btn--active');
      });

      drops.forEach(el => {
        el.classList.remove('is-visible');
      });
    }
  });

}
dropMenu();

/*select simplebar*/

const simpleBar = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll('.header__dropdownmenu'),
    (el) => new SimpleBar(el, {
      autoHide: false,
      scrollbarMaxSize: 28,
    })
  )
};
simpleBar();


/*Hero-swiper*/
const heroSwiper = () => {
  const swiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 4500,
    },
    speed: 2000,
  });

}

heroSwiper();



/*gallery select*/

const gallerySelect = () => {
  new NativejsSelect({
    selector: '.customSelect',
  });

}
gallerySelect();

/*Gallery-swiper*/

const gallerySwiper = () => {
  const swiper = new Swiper('.gallery__right', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 12,
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    navigation: {
      nextEl: '.swiper-button-next ',
      prevEl: '.swiper-button-prev ',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    breakpoints: {

      576: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },


      768: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,

      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });
}

gallerySwiper();

/* gallery modal*/

const openModal = () => {
  let modal = document.getElementById('my__modal');
  let openBtn = document.getElementById('open__modal-link');
  let closeBtn = document.getElementById('gallery__btn-close')
  openBtn.addEventListener('click', function () {

    modal.classList.add('open');
  });
  closeBtn.addEventListener('click', function () {

    modal.classList.remove('open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modal.classList.remove('open');
    }
  });

  document.querySelector("#my__modal .gallery__modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open')
  });
}

openModal();


/*Accordion*/

const accordion = () => {
  let myAccordion = new Accordion('.accordion-container');
  myAccordion.open(0);
}
accordion();

/*Tabs*/

const tabs = () => {
  let tabsBtn = document.querySelectorAll('.catalog__tabs-btn');
  let tabsItem = document.querySelectorAll('.catalog__card');

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('catalog__tabs-btn-active') });
      e.currentTarget.classList.add('catalog__tabs-btn-active');


      tabsItem.forEach(function (element) {
        element.classList.remove('item-active');

      });

      document.querySelector(`[data-target="${path}"]`).classList.add('item-active');
      document.querySelector(`[data-target="${path}"]`).scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest"
      });
    });
  });
}
tabs();




/*event swiper*/

const eventsSwiper = () => {
  const swiper = new Swiper('.events__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    simulateTouch: true,
    touchRatio: 1,
    pagination: {

      el: '.events__pagination.swiper-pagination',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    navigation: {
      nextEl: '.events__swiper-button-next ',
      prevEl: '.events__swiper-button-prev ',
    },
    breakpoints: {

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
      },


      1366: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      }
    }

  });
}

eventsSwiper();


/*events tooltip*/


const eventsTolltip = () => {
  tippy('.marker1', {
    content: 'Пример современных тенденций - современная методология разработки ',

  });

  tippy('.marker1', {
    content: 'Пример современных тенденций - современная методология разработки ',
    trigger: 'click',
  });

  tippy('.marker2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    trigger: 'click',
  });
  tippy('.marker2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',

  });
  tippy('.marker3', {
    content: 'В стремлении повысить качество ',
  });

  tippy('.marker3', {
    content: 'В стремлении повысить качество ',
    trigger: 'click',
  });
}

eventsTolltip();

/*project swiper*/
const projectsSwiper = () => {
  const swiper = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    simulateTouch: true,
    touchRatio: 1,

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    navigation: {
      nextEl: '.projects__swiper-button-next ',
      prevEl: '.projects__swiper-button-prev ',
    },
    breakpoints: {


      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      }
    }
  });
}

projectsSwiper();

/*inputmask*/

const inputMask = () => {
  let inputs = document.querySelector('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
};
inputMask();


/*validation form*/


const validator = new window.JustValidate('.contacts__form');
validator
  .addField('#name', [

    {
      rule: 'required',
      errorMessage: 'Введите имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимальное количество символов: 2'
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Максимальное количество символов: 20'
    },
  ])

  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон'
    },

    {
      validator: (value) => {
        let inputs = document.querySelector('input[type="tel"]');
        const ph = inputs.inputmask.unmaskedvalue()
        return Boolean(Number(ph) && ph.length === 10);
      },
      errorMessage: 'Введите телефон полностью'
    }
  ]);

/*yandex map*/


ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.757, 37.626],
    zoom: 14,
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts/placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');
  myMap.behaviors.disable('scrollZoom');
  myMap.behaviors.disable('drag');

  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      top: '260px',
      right: '20px'
    },
    floatIndex: '200'
  });

  myMap.controls.add('geolocationControl', {
    float: 'none',
    position: {
      top: '350px',
      right: '10px'
    },
    floatIndex: '100'
  });


};
