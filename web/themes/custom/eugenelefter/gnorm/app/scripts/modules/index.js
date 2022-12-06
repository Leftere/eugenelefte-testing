const modules = {
  FixedISI: ($el) => {
    import('./FixedISI/FixedISI.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  HeaderDropDown: ($el) => {
    import('./HeaderDropDown/HeaderDropDown.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  NavDropdown: ($el) => {
    import('./NavDropdown/NavDropdown.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  NavPrimary: ($el) => {
    import('./NavPrimary/NavPrimary.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  ScrollToTop: ($el) => {
    import('./ScrollToTop/ScrollToTop.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  SkipLinks: ($el) => {
    import('./SkipLinks/SkipLinks.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  },
  VideoPlayer: ($el) => {
    import('./VideoPlayer/VideoPlayer.main').then((Module) => {
      new Module.default($el)
    }).catch((e) => console.error(e))
  }
}

export default modules
