export default function initAnimaCoverProjetos(){
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
            ['click', 'mouseenter'].forEach((userEvents) => {
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
}