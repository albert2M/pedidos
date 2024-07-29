class Logo extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.icon = this.getAttribute('icon')
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>

          .logo{
            width: 2rem;
          }

          .logo a {
            fill: hsl(0,0%,100%);
            height: 2rem;
            width: 2rem;
            stroke-width: 2px;
          }

        </style>

          <div class="logo">
            <a href="">
              <slot></slot> 
            </a>
          </div>
        `
      }
  }
  
  customElements.define('logo-component', Logo)