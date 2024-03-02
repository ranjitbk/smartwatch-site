export default function initTabs() {
    const containers = document.querySelectorAll('.tabs')

    const initTab = () => {
        if (containers) {

            for (const container of containers) {
                const offest = container.offsetTop
                const nav = container.querySelector('.tabset')
                const content = container.querySelector('.tab-content')
                const tabs = content.querySelectorAll('.tab')
                const anchors = nav.querySelectorAll('a')
                const select = container.querySelector('.tab-select')

                for (const anchor of anchors) {
                    anchor.addEventListener('click', (e) => {
                        window.scrollTo({
                            top: offest,
                            behavior: 'smooth'
                        });
                        const activeItems = nav.querySelector('a.active')
                        e.preventDefault();
                        activeItems.classList.remove('active')
                        anchor.classList.add('active')

                        for (const tab of tabs) {
                            tab.classList.remove('active')
                        }

                        const activeId = anchor.getAttribute('href')
                        document.querySelector(activeId).classList.add('active');
                    })
                }

                select.addEventListener('change', () => {
                    const val = select.value
                    nav.querySelector('[href="' + val + '"]').click()
                })
            }
        }
    }

    window.addEventListener('load', initTab)
}