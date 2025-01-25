const sections = document.querySelectorAll('section')
const windowMetade = window.innerHeight * 0.6;

function animaSrcoll() {
    sections.forEach((section) => {
        const topSec = section.getBoundingClientRect().top - windowMetade;
        if (topSec < 0) {
            section.classList.add('ativo');
        } else {
            section.classList.remove('ativo')
        }
    })
}
window.addEventListener('scroll', animaSrcoll);


const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    })
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
})

const iconesSkills = document.querySelectorAll('aside .icones-skill');
const skillsinfo = document.querySelectorAll('.info-habilidades span');

if (iconesSkills.length && skillsinfo.length) {
    skillsinfo[0].classList.add('active')
    function navTabs(index) {
        skillsinfo.forEach((item) => {
            item.classList.remove('active');
        })
        skillsinfo[index].classList.add('active');
    }

    iconesSkills.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            navTabs(index);
        })
    })
}

//iconesSkills.forEach((skill, index) => {
  //  skill.addEventListener('click', () => {
    //    navTabs(index)
    //})
//})


function menuMobile() {
    const header = document.querySelector('header');
    
    if (window.innerWidth <= 767) {
        header.classList.add('inativo');
    }
}

menuMobile()
