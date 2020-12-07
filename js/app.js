let toggleLangRu = document.querySelector('.header-container__toggle-ru');
let toggleLangEng = document.querySelector('.header-container__toggle-eng');

let mainSectText = document.querySelector('.main-section__text');
let mainSectTitle = document.querySelector('.main-section__title');
let mainSectLink = document.querySelector('.main-section__link');
let loginBtn = document.querySelector('.header-container__login-enter');
let regBtn = document.querySelector('.header-container__login-reg');


// let [...toggleLanguage] = toggleLang;
toggleLangRu.addEventListener('click', function () {
    toggleLangRu.classList.add('active')
    toggleLangEng.classList.remove('active')
    if(toggleLangRu.classList.contains('active')) {

        toggleLangEng.classList.remove('active')
        loginBtn.innerHTML = 'Вход';
        regBtn.innerHTML = 'Регистрация';
        mainSectTitle.innerHTML = `Отдаем свой процент Вам!`;
        mainSectText.innerHTML =
            `Это не просто клик-бейт заголовок,<br>
                а честное обещание нашим честным партнерам!<br>
                В честь запуска нашей партнёрской сети, мы на особых условиях<br>
                отказываемся от своего процента в пользу вебмастеров, и это правда!<br>
                В нашей акции может принять участие абсолютно любой<br>
                вебмастер, с любым трафиком на любой оффер.<br>
                Обязательно жми на кнопку ниже<br>
                и узнай подробности прямо<br>
                сейчас, чего ты ждешь?
                🤩`;
        mainSectLink.innerHTML = `Круто, я участвую!`;
    }

})

toggleLangEng.addEventListener('click', function () {
    toggleLangEng.classList.add('active')
    toggleLangRu.classList.remove('active')
    if(toggleLangEng.classList.contains('active')) {
        toggleLangRu.classList.remove('active');
        loginBtn.innerHTML = 'Sign In';
        regBtn.innerHTML = 'Register';
        mainSectTitle.innerHTML = `Give our percentage to you!`;
        mainSectText.innerHTML =
            'This is not just a click-beit headline, <br>\n' +
        'but a fair promise to our honest partners! <br>\n' +
            'In honor of the launch of our affiliate network, <br>\n' +
            'we give up our percentage in favor of webmasters on special terms, and it is true!<br>\n' +
            'Any webmaster can take part in our campaign, with any traffic  <br>\n' +
            'to any offshore.<br>\n' +
            ' Be sure to click on the button below  <br>\n'+
            'and find out details now, <br>\n'+
            'what are you waiting for? 🤩';
        mainSectLink.innerHTML = `Cool, I'm in!`;
    }

})


// toggleLang.addEventListener('click', toggleClass(toggleLanguage))
//
// console.log(toggleLanguage)

console.log(mainSectText.textContent)



