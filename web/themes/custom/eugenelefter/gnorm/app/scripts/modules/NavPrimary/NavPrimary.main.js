class NavPrimary {
  constructor(el) {
    this.$el = el

    this.mobileToggle = this.$el.querySelector('.nav__menu-toggle')
    this.primaryMenu = this.$el.querySelector('.nav__menu')
 
    this.mobileToggle.addEventListener('click', (e) => {
      this.toggleMobileMenu(e)
    })
  }

  escapeHandler = (e) => {
    if (e.key === 'Escape') {
      this.closeMobileMenu()

      document.removeEventListener('keydown', this.escapeHandler)
    }
  }

  toggleMobileMenu = () => {
    if (this.mobileToggle.getAttribute('aria-expanded') === 'false') {
      this.openMobileMenu()
    } else {
      this.closeMobileMenu()
    }
  }

  openMobileMenu = () => {
    this.primaryMenu?.classList.add('active')
    this.mobileToggle.setAttribute('aria-expanded', 'true')

    document.addEventListener('keydown', this.escapeHandler)
    document.addEventListener('click', this.outsideClick)
  }

  closeMobileMenu = () => {
    this.primaryMenu?.classList.remove('active')
    this.mobileToggle.setAttribute('aria-expanded', 'false')
  }

  outsideClick = (e) => {
    if (!this.$el.contains(e.target)) {
      this.closeMobileMenu()

      document.removeEventListener('click', this.outsideClick)
    }
  }
}

export default NavPrimary
