export default function initMobileMenu() {
    const body = document.body;

    var navActive = (trigger, activeClass, focus) => {
        const openers = document.querySelectorAll(trigger);
        const focusElement = document.querySelector(focus)

        for (opener of openers) {
            opener.addEventListener('click', (e) => {
                e.preventDefault()
                body.classList.toggle(activeClass)

                if (focusElement) {
                    setTimeout(() => {
                        focusElement.focus()
                    }, 300);
                }
            })
        }

    }

    window.addEventListener('load', () => {
        navActive('.nav-opener', 'nav-active')
        navActive('.search-opener', 'search-active', '.search-form #search-input')
        navActive('.login-opener', 'login-active', '.login-form #login-input')
        navActive('.filter-opener', 'filter-active', '.filter-holder #filter')

    })
}