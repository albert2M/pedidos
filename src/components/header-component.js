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
          <slot></slot> <!-Al no poner nombre al slot, 
          todo lo que se le meta al header en el index.html lo cojerá.
          Cuando dentro del component hay varios divs o espacios difernciados
          y quiero poner detrminado contenido dentro de ellos, entonces
          habría que poner nombre a los slots, o sea <slot class="algo"></slot> 
          para que vaya a ese slot en especial -> 
        </header> 
        `
      }
  }
  
  customElements.define('header-component', Header)