export default function history() {
    const links = document.querySelectorAll('.sidenav ul li a ')

    function handleClick(event) {
        event.preventDefault()
        const linkAnimais = event.target.dataset.linkAnimais
        const href = event.target.href
        fetchPage(href || linkAnimais);

        window.history.pushState(null, null, href || linkAnimais)
    }

    async function fetchPage(url) {
        const pageResponse = await fetch(url)
        const pageText = await pageResponse.text()
        replaceContent(pageText)

    }

    function replaceContent(newText) {
        const newHtml = document.createElement('div')
        newHtml.innerHTML = newText


        const content = document.querySelector('.content')
        const newContent = newHtml.querySelector('.content')
        content.innerHTML = newContent.innerHTML

        content.innerHTML = newContent.innerHTML
        document.title = newHtml.querySelector('title').innerText

    }

    window.addEventListener('popstate', () => {

        fetchPage(window.location.href)
    })



    links.forEach(link => {

        link.addEventListener('click', handleClick)
    })


}