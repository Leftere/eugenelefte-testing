class HeaderDropDown {
  constructor(el) {
    this.$el = el


    this.toggle = this.$el.querySelector('.js-nav-toggle')
    this.globalHeader = this.$el.querySelector('.js-global-header')
    this.mobileHeader = this.$el.querySelector('.js-mobile-menu')
    this.mobileHeaderSubMenu = this.$el.querySelectorAll('.js-primary-nav-menu')
    this.mobileHeaderButton = this.$el.querySelectorAll('.js-primary-nav-menu-button')

    
    this.toggle.addEventListener('click', (e) => {
      this.globalHeader.classList.contains('menu-is-open') ? this.closeMenu() : this.openMenu()  
     
    }) 

    this.mobileHeaderButton.forEach((button) => {
      button.addEventListener('click', (e) => {
       
        button.parentElement.classList.contains('is-open') ? this.closeSubMenu(button) : this.openSubMenu(button)

        // button.parentElement.classList.contains('is-open') ? button.parentElement.classList.remove('is-open') : button.parentElement.classList.add('is-open')
      })
    })
    
 
  }


  openMenu(mobile,desktop) {
    this.globalHeader.classList.add('menu-is-open')
    this.mobileHeader.classList.add('is-open')
  }

  openSubMenu(target) {
    this.mobileHeaderSubMenu.forEach((cssClass) => {
      if(cssClass.classList.contains('is-open')) {
        cssClass.classList.remove('is-open')
      }
    })
    if (!target.parentElement.classList.contains('is-open')) {
      target.parentElement.classList.add('is-open')
      this.globalHeader.classList.add('is-expanded')
    }
  }
  
  closeSubMenu(target) {
    this.mobileHeaderSubMenu.forEach((cssClass) => {
      if(cssClass.classList.contains('is-open')) {
        cssClass.classList.remove('is-open')
        this.globalHeader.classList.remove('is-expanded')
      }
    })
    // if (target.parentElement.classList.contains('is-open')) {
    //   console.log('im removed')
    //   target.parentElement.classList.remove('is-open')
    //   this.globalHeader.classList.remove('is-expanded')
    // }

  }

  closeMenu(mobile,desktop) {
    console.log('hello')
    this.globalHeader.classList.remove('menu-is-open')
    this.mobileHeader.classList.remove('is-open')
    
  }

  
}

export default HeaderDropDown
