export default function initAnimaCoverProjetos(){
    

    const coverProjetos = document.querySelectorAll('[data-projeto="cover"]');
    const detailsProjetos = document.querySelectorAll('[data-projeto="cover"] .details');
    ['click', 'mouseenter'].forEach((userEvents) => {
        coverProjetos.forEach((projeto, index) => {
            projeto.addEventListener(userEvents, () => {
                animaProjetoAtivar(index)
            });
            projeto.addEventListener('mouseleave', () => {
                animaProjetoDesativar(index)
            });
        })
    })

    function animaProjetoAtivar(index) {
        coverProjetos[index].classList.remove('inativo');
        coverProjetos[index].classList.add('ativo');
        detailsProjetos[index].classList.remove('ativo');
        detailsProjetos[index].classList.add('inativo');
    }

    function animaProjetoDesativar(index) {
        coverProjetos[index].classList.add('inativo');
        coverProjetos[index].classList.remove('ativo');
        detailsProjetos[index].classList.add('ativo');
        detailsProjetos[index].classList.remove('inativo');
    }

    coverProjetos.forEach((cover) => {
        // console.log(cover)
        cover.addEventListener('click', () =>{
            verificaHref(event)
        });
    });
}
