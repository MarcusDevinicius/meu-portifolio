export default function initAnimaScroll() {
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
}
