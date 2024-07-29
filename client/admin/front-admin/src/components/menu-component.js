class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .menu svg {
            fill: hsl(0, 0%, 100%);
            height: 2rem;
            width: 2rem;
          }
        </style>
  
        <section class="menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
        </section>
        `
  }
}

customElements.define('menu-component', Menu)
