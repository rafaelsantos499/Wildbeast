export default function navegaçao() {

    const linkSideNav = document.querySelectorAll('.sidenav ul li a')


    linkSideNav.forEach((link) => {
        link.addEventListener('click', () => {
            removeClick()
            link.classList.add('active')
        })
    })

    const removeClick = () => {
        linkSideNav.forEach(teste => {
            teste.classList.remove('active')
        })
    }
}