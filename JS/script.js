import initAnimaScroll from "./modules/anima-scroll.js";
import initScrollToSection from "./modules/scroll-to-section.js";
import initTabNav from "./modules/tab-nav-skills.js";
import initAnimaCoverProjetos from "./modules/anima-cover-projetos.js";

initAnimaScroll();
initScrollToSection();
initAnimaCoverProjetos();
initTabNav();










//iconesSkills.forEach((skill, index) => {
  //  skill.addEventListener('click', () => {
    //    navTabs(index)
    //})
//})

const eventos = ['click'];
function initMenuMobile() {
    const btnMenu = document.querySelector('[data-menu="button"]');
    const listaMenuMobile = document.querySelector('[data-menu="lista"]');
    if(btnMenu && listaMenuMobile) {
        eventos.forEach((userEvents) => {
            btnMenu.addEventListener(userEvents, ativaMenu); 
        })

        function ativaMenu() {
            btnMenu.classList.add('ativo');
            listaMenuMobile.classList.add('ativo');
            outsideClick(listaMenuMobile, eventos, () => {
                btnMenu.classList.remove('ativo');
                listaMenuMobile.classList.remove('ativo');
            })
        }
    }       
}

initMenuMobile();


function outsideClick(element, eventos, callBack) {
    const html = document.documentElement;
    const outside = 'data-outside';
    
    // if(!element.hasAttribute(outside)) {
        // eventos.forEach((userEvents) => {
            setTimeout(() => {
                html.addEventListener(eventos, handleOutsideClick);
            })
        // })
        // element.setAttribute(outside, '');
    // }
    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outside, '');
            eventos.forEach((userEvents) => {
                html.removeEventListener(userEvents, handleOutsideClick);
            })
            callBack();
        }
    }
}
outsideClick();




