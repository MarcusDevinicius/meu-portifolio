export default function initTabNav() {
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
}