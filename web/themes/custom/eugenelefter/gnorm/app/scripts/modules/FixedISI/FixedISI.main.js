class FixedISI {
  constructor(el) {
    this.$el = el

    this.$isiFixedEl = document.querySelector('.isi--fixed')
    this.$isiFixedBoxedEl = document.querySelector('.isi--has-box')
    this.isiBar = this.$isiFixedEl.querySelector('.isi__bar')

    // if these els are undefined, exit early
    if (!this.$isiFixedEl && this.isiBar) return

    // Set the custom properties for the overall ISI and header bar heights, update when the screen is resized
    this.windowResizeObserver = new ResizeObserver(this.handleResize)
    this.windowResizeObserver.observe(document.body)

    // Check if the fixed bar is intersecting with the static ISI
    this.isiObserver = new IntersectionObserver(this.handleIntersection)
    this.isiObserver.observe(this.$el)

    // Check if we are at the top of the page to set `scrolled` class
    this.rafScrollTop()
  }

  setHeightVars = () => {
    let barHeight = Math.floor(this.isiBar.getBoundingClientRect().height)
    let isiHeight = this.$isiFixedBoxedEl ? '15vh' : `${Math.floor(this.$isiFixedEl.getBoundingClientRect().height) + barHeight}px`

    this.$isiFixedEl.style.setProperty('--barHeight', `${barHeight}px`)
    this.$isiFixedEl.style.setProperty('--isiHeight', `${isiHeight}`)
  }

  handleResize = (entries) => {
    entries.forEach(() => {
      this.setHeightVars()
    })
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.$isiFixedEl.classList.remove('visible')
      } else {
        this.$isiFixedEl.classList.add('visible')
      }
    })
  }

  rafScrollTop = () => {
    let lastY = 0
    let ticking = false

    let setScrolled = (scrollPos) => {
      if (scrollPos < 10) {
        this.$isiFixedEl.classList.remove('scrolled')
      } else {
        this.$isiFixedEl.classList.add('scrolled')
      }
    }

    document.addEventListener('scroll', () => {
      lastY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(lastY)
          ticking = false
        })

        ticking = true
      }
    })
  }
}

export default FixedISI
