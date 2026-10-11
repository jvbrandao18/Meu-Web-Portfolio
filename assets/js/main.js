/*==================== RESPONSIVE NAVIGATION ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    desktopNavigation = window.matchMedia('(min-width: 1024px)')

function setNavOpen(open, restoreFocus = false) {
    if (!navMenu || !navToggle) return
    const mobileOpen = open && !desktopNavigation.matches
    navMenu.classList.toggle('show-menu', mobileOpen)
    navToggle.setAttribute('aria-expanded', String(mobileOpen))
    navToggle.setAttribute('aria-label', mobileOpen ? 'Fechar menu' : 'Abrir menu')
    if (restoreFocus && !desktopNavigation.matches) navToggle.focus()
    navMenu.inert = !desktopNavigation.matches && !mobileOpen
    if (navMenu.inert) navMenu.setAttribute('aria-hidden', 'true')
    else navMenu.removeAttribute('aria-hidden')
}

if (navToggle && navMenu) {
    setNavOpen(false)
    navToggle.addEventListener('click', () => {
        const open = navToggle.getAttribute('aria-expanded') !== 'true'
        setNavOpen(open)
        if (open) navMenu.querySelector('.nav__link')?.focus()
    })
    navClose?.addEventListener('click', () => setNavOpen(false, true))
    navMenu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => setNavOpen(false, true))
    })
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && navMenu.classList.contains('show-menu')) {
            setNavOpen(false, true)
        }
    })
    desktopNavigation.addEventListener('change', () => {
        const menuFocused = navMenu.contains(document.activeElement)
        setNavOpen(false, menuFocused)
    })
}

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content')

function setSkillOpen(content, open) {
    content.classList.toggle('skills__open', open)
    content.classList.toggle('skills__close', !open)
    content.querySelector('.skills__header').setAttribute('aria-expanded', String(open))
    content.querySelector('.skills__list').hidden = !open
}

skillsContent.forEach(content => {
    setSkillOpen(content, content.classList.contains('skills__open'))
    content.querySelector('.skills__header').addEventListener('click', () => {
        const open = !content.classList.contains('skills__open')
        skillsContent.forEach(item => setSkillOpen(item, item === content && open))
    })
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = [...document.querySelectorAll('.qualification__button[data-target]')],
    tabContents = document.querySelectorAll('.qualification [data-content]')

function activateQualification(tab) {
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(panel => {
        const active = panel === target
        panel.classList.toggle('qualification__active', active)
        panel.hidden = !active
    })
    tabs.forEach(item => {
        const active = item === tab
        item.classList.toggle('qualification__active', active)
        item.setAttribute('aria-selected', String(active))
        item.tabIndex = active ? 0 : -1
    })
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateQualification(tab))
    tab.addEventListener('keydown', event => {
        let next = index
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length
        else if (event.key === 'Home') next = 0
        else if (event.key === 'End') next = tabs.length - 1
        else return
        event.preventDefault()
        activateQualification(tabs[next])
        tabs[next].focus()
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SERVICES EXPANSION ====================*/
const serviceCards = document.querySelectorAll('.services__content'),
    hoverServices = window.matchMedia('(hover: hover) and (pointer: fine)')

serviceCards.forEach(card => {
    const button = card.querySelector('.services__header-card'),
        details = card.querySelector('.services__dropdown')
    let pinned = false

    function setServiceOpen(open) {
        card.classList.toggle('is-open', open)
        button.setAttribute('aria-expanded', String(open))
        details.hidden = !open
    }

    setServiceOpen(false)
    button.addEventListener('click', () => {
        pinned = !pinned
        setServiceOpen(pinned)
    })
    card.addEventListener('mouseenter', () => {
        if (hoverServices.matches) setServiceOpen(true)
    })
    card.addEventListener('mouseleave', () => {
        if (!pinned) setServiceOpen(false)
    })
    card.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            pinned = false
            setServiceOpen(false)
            button.focus()
        }
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const menuLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]')

        if (!menuLink) {
            return
        }

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            menuLink.classList.add('active-link')
        }else{
            menuLink.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scro
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'uil-sun'

// Storage can be unavailable in private or restricted browser contexts.
let selectedTheme = null
try {
    selectedTheme = localStorage.getItem('selected-theme')
} catch {}

if (selectedTheme === 'dark') document.body.classList.add(darkTheme)

function updateThemeButton() {
    if (!themeButton) return
    const dark = document.body.classList.contains(darkTheme)
    themeButton.classList.toggle(iconTheme, dark)
    themeButton.setAttribute('aria-pressed', String(dark))
    themeButton.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro')
}

updateThemeButton()
themeButton?.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    updateThemeButton()
    try {
        localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light')
    } catch {}
})
