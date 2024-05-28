class header extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      
      this.data = {
        title: "header"
      }
  
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          *{
            box-sizing: border-box;
          }

          body {
            margin: 0;
            width: 100%
          }

          header {
            background-color: hsl(0, 0%, 0%);
            width: 100%;
            height: fit-content;
            padding: 1.2rem 1rem;
          }

          .title h2{
            font-family: "Lato", sans-serif;
            text-transform: capitalize;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
            color: hsl(208, 100%, 97%);
          }
        </style>

        
        <header>
          <div class="title">
            <h2>Inicio</h2> 
          </div>
        </header>
              
        `
      }
  }
  
  customElements.define('header-component', header)