export default function initScrollToSection(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        if (href === '#inicio') {         //Verificação específica que corrige erro: menu sobre a imagem ao clicar em inicio.
            window.scrollTo({
                top: topo - 90,
                behavior: 'smooth',
            })
        }else if (window.innerWidth < 767 && href === '#inicio' === false){
            window.scrollTo({
                top: topo - 120,
                behavior: 'smooth',
            })
        }else {
            window.scrollTo({
                top: topo,
                behavior: 'smooth',
            })
        }
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}