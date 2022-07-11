$(document).ready(function () {
    // Add smooth scrolling from menu links
    $('.menu-item a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });

    //animation
    AOS.init();

    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    //Validation
    const form = document.querySelector('.questions__main-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let el = document.querySelectorAll('[data-reqired]');
        let erroreArrayElemnts = [];

        for (let i = 0; i < el.length; i++) {
            if (el[i].value == '') {
                erroreArrayElemnts.push(el[i])
                $(el[i]).parents('.questions__main-form-item').find('.form-error').fadeIn();
            }
            $(el[i]).on('focus', function () {
                $(this).parents('.questions__main-form-item').find('.form-error').fadeOut();
            });
        }
        let scrollEl = erroreArrayElemnts[0];
        if (erroreArrayElemnts.length > 0) {
            $('html, body').animate({
                scrollTop: $(scrollEl).parents('div').offset().top - 200
            }, 1000);
        }
        if (erroreArrayElemnts.length == 0) {
            form.submit();
        }
    });
});

let strOrange = document.querySelector('.slogan-orange'),
    strGreen = document.querySelector('.slogan-green'),
    strRed = document.querySelector('.slogan-red');

window.ityped.init(strOrange, {
    strings: ['Звоню сам'],
    loop: false,
    showCursor: false,
    // startDelay: 100,
    // onFinished: function () {
    //     console.log(this)
    // }
})

window.ityped.init(strGreen, {
    strings: ['Принимаю звонки'],
    loop: false,
    showCursor: false,
})

window.ityped.init(strRed, {
    strings: ['Слушаю и анализирую другие звонки'],
    loop: false,
    showCursor: false,
})