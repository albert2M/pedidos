class Main extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.position = this.getAttribute('position') || ''
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/ `
       
        <style>

          *{
            box-sizing: border-box;
          }

          main{
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 2rem;
          }

          main.center{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          main.panel{
            display: grid;
            gap: 2rem;
            grid-template-columns: 2fr 4fr;  
          }
        </style>

        <main class="${this.position}">
          <slot></slot>
        </main>
        `
      }
  }
  
  customElements.define('main-component', Main)