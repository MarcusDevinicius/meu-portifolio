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

const iconesSkills = document.querySelectorAll('.icones-habilidades img');
const skillsinfo = document.querySelectorAll('.info-habilidades div');

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

const coverProjeto = document.querySelectorAll('[data-projeto="cover"]');
const detalhesProjeto = document.querySelectorAll('[data-projeto="cover"] .details' );
coverProjeto.forEach((cover, index) => {
        ['touchstart', 'mouseenter'].forEach((userEvents) => {
            cover.addEventListener(userEvents, () => {
                animaProjetoAtivar(index);
            })
        });
    cover.addEventListener('mouseout', () => {
        animaProjetoDesativar(index);
    })
})

function animaProjetoAtivar(index) {
    coverProjeto[index].classList.remove('inativo');
    coverProjeto[index].classList.add('ativo');
    detalhesProjeto[index].classList.remove('ativo');
    detalhesProjeto[index].classList.add('inativo');
}

function animaProjetoDesativar(index) {
    coverProjeto[index].classList.remove('ativo');
    coverProjeto[index].classList.add('inativo');
    detalhesProjeto[index].classList.remove('inativo');
    detalhesProjeto[index].classList.add('ativo');
}


//iconesSkills.forEach((skill, index) => {
  //  skill.addEventListener('click', () => {
    //    navTabs(index)
    //})
//})


