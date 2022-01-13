const toggleMobileNavigationMenu  = () => {
    document.querySelector('#header-main').classList.toggle('active')
    document.querySelector('#nav-mobile').classList.toggle('d-none')
    document.querySelector('#mobile-itm-logo-container').classList.toggle('hidden')

    const toggleElements = document.querySelectorAll('.nav-mobile-toggler')

    toggleElements.forEach(
        (element) => element.classList.toggle('d-none')
    )
}

const initialiseToggleElements = () => {
    const toggleElements = document.querySelectorAll('.nav-mobile-toggler')

    toggleElements.forEach(
        (element) =>  element.addEventListener('click', () => toggleMobileNavigationMenu())
    )
}

const initialiseOuterLists = () => {
    const outerLists = document.querySelectorAll('.list-outer-list')

    outerLists.forEach(
        (element) => {
            element.addEventListener(
                'click',
                () => {
                    element.querySelector('.list-inner-list').classList.toggle('d-none')

                    const arrow = element.querySelector('svg')

                    arrow.classList.toggle('rotate-90')
                }
            )
        }
    )
}

let initialised = false

document.onreadystatechange = () => {
    if (initialised === true) {
        return
    }

    initialiseToggleElements()
    initialiseOuterLists()

    initialised = true
}
