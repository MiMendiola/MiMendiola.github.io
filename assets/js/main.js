/*==================== THEME (dark/light) ====================*/
const themeButton = document.getElementById('theme-toggle')
const root = document.documentElement
const storedTheme = localStorage.getItem('theme')
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches

if (storedTheme) {
    root.setAttribute('data-theme', storedTheme)
} else if (prefersLight) {
    root.setAttribute('data-theme', 'light')
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        const isLight = root.getAttribute('data-theme') === 'light'
        const next = isLight ? 'dark' : 'light'
        root.setAttribute('data-theme', next)
        localStorage.setItem('theme', next)
    })
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => tabContent.classList.remove('qualification_active'))
        target.classList.add('qualification_active')

        tabs.forEach(t => t.classList.remove('qualification_active'))
        tab.classList.add('qualification_active')
    })
})

/*==================== HEADER BACKGROUND ON SCROLL ====================*/
const header = document.getElementById('header')
function headerScroll() {
    if (window.scrollY >= 50) header.classList.add('header-scrolled')
    else header.classList.remove('header-scrolled')
}
window.addEventListener('scroll', headerScroll)
headerScroll()

/*==================== SCROLLSPY (active nav link) ====================*/
const sections = document.querySelectorAll('main section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - header.offsetHeight - 50
        const sectionId = current.getAttribute('id')
        const link = document.querySelector(`.nav_menu a[href*="${sectionId}"]`)

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link')
            } else {
                link.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ====================*/
const revealElements = document.querySelectorAll('[data-reveal]')

if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible')
                obs.unobserve(entry.target)
            }
        })
    }, { threshold: 0.15 })

    revealElements.forEach(el => observer.observe(el))
} else {
    revealElements.forEach(el => el.classList.add('reveal-visible'))
}

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up')
    if (window.scrollY >= 560) scrollUpBtn.classList.add('show-scroll')
    else scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== FOOTER YEAR ====================*/
const footerYear = document.getElementById('footer-year')
if (footerYear) footerYear.textContent = new Date().getFullYear()

/*==================== 3D TILT ON CARDS ====================*/
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
const canHover = window.matchMedia('(hover: hover)').matches

if (!reducedMotionQuery.matches && canHover) {
    const tiltCards = document.querySelectorAll('.portfolio_card')

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const rotateX = ((y / rect.height) - 0.5) * -8
            const rotateY = ((x / rect.width) - 0.5) * 8
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
        })

        card.addEventListener('mouseleave', () => {
            card.style.transform = ''
        })
    })
}

/*==================== SPOTLIGHT HOVER ====================*/
if (canHover) {
    const spotlightCards = document.querySelectorAll('.skills_content, .portfolio_card, .contact_card')

    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect()
            card.style.setProperty('--x', `${e.clientX - rect.left}px`)
            card.style.setProperty('--y', `${e.clientY - rect.top}px`)
        })
    })
}
