class ScrollToTop {
  constructor(el) {
    this.$el = el
    this.scrollAnchor = this.$el.querySelector('.scrolltop__anchor')
    
    this.checkScrollTop()
  }
  
  checkScrollTop = () => {
    let lastY = 0
    let winBottom = window.innerHeight
    let bottom = winBottom - 50
  
    let setScrolled = (scrollPos) => {
      if (scrollPos >= bottom) {
        this.$el.classList.add('scrolled')
      } else {
        this.$el.classList.remove('scrolled')
      }
    }
  
    document.addEventListener('scroll', () => {
      lastY = window.scrollY
  
      window.requestAnimationFrame(() => {
        setScrolled(lastY)
      })
    })
  }
}

export default ScrollToTop
