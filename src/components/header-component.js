class Header extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.justifyContent = this.getAttribute('justify-content')
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          *{
            box-sizing: border-box;
          }

          header {
            background-color: hsl(0, 0%, 0%);
            display: flex;
            justify-content: ${this.justifyContent};
            width: 100%;
            height: fit-content;
            padding: 1.2rem 1rem;
          }
        </style>

        <header>
          <slot></slot>
        </header> 
        `
      }
  }
  
  customElements.define('header-component', Header)