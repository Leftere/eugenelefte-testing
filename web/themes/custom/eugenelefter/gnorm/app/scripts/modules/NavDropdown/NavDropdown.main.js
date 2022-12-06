class NavDropdown {
  constructor(el) {
    this.$el = el

    this.toggles = [...this.$el.querySelectorAll('.nav__toggle')]
    this.submenu = this.$el.querySelector('.primary-nav__submenu')
    this.globalheader = document.querySelector('.js-global-header')
    this.hamburger = document.querySelector('.js-hamburger')

    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        this.toggleSubmenu(e)
      })
    })

    document.addEventListener('scroll', () => {
      this.headerAnimation()
    })

    this.hamburger.addEventListener('click', (e) => {
      this.globalheader.classList.contains('mobile-open') ? this.globalheader.classList.remove('mobile-open') : this.globalheader.classList.add('mobile-open') 
    })
  }

  escapeHandler = (e) => {
    if (e.key === 'Escape') {
      this.closeAllSubmenus()

      document.removeEventListener('keydown', this.escapeHandler)
    }
  }

  headerAnimation = () => {
    if(window.scrollY === 0 ) {
      this.globalheader.classList.remove('sticky-header')
      this.submenu.classList.remove('is-scrolled')
    }
    if(window.scrollY > 0 && !this.globalheader.classList.contains('sticky-header') ) {
      this.globalheader.classList.add('sticky-header')
      this.submenu.classList.add('is-scrolled')
    }
  }


  toggleSubmenu = (e) => {
    let toggle = e.target

    let itemsId = e.target.getAttribute('aria-controls')
    let items = document.getElementById(itemsId)

    let isItHidden = items.getAttribute('aria-hidden')

    if (isItHidden === 'true') {
      this.closeAllSubmenus()

      this.showSubmenu(items, toggle)
    } else {
      this.hideSubmenu(items, toggle)
    }
  }

  showSubmenu = (items, toggle) => {
    items.setAttribute('aria-hidden', 'false')
    toggle.setAttribute('aria-expanded', 'true')
    if(!this.submenu.classList.contains('is-opened')) {
      this.submenu.classList.add('is-opened')
    }
    document.addEventListener('keydown', this.escapeHandler)
    document.addEventListener('click', this.outsideClick)
  }

  hideSubmenu = (items, toggle) => {
    items.setAttribute('aria-hidden', 'true')
    toggle.setAttribute('aria-expanded', 'false')

    if(this.submenu.classList.contains('is-opened')) {
      this.submenu.classList.remove('is-opened')
    }
  }

  closeAllSubmenus = () => {
    this.toggles.forEach((toggle) => {
      let itemsId = toggle.getAttribute('aria-controls')
      let items = document.getElementById(itemsId)

      this.hideSubmenu(items, toggle)
    })

    document.removeEventListener('keydown', this.escapeHandler)
  }

  outsideClick = (e) => {
    if (!this.$el.contains(e.target)) {
      this.closeAllSubmenus()

      document.removeEventListener('click', this.outsideClick)
    }
  }

}

export default NavDropdown
