class Title extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          .title {
            display: flex;
            flex-direction: column;
            height: 100%;
            align-items: center
          }
          
          h2 {
            font-family: "Poppins", sans-serif;
            text-transform: capitalize;
            font-size: 2rem;
            font-weight: 500;
            margin: 0;
            color: hsl(208, 100%, 97%);
            text-align: center;
          }
        </style>
  
        <div class="title">
            <h2>Pedidos</h2>
        </div>
        `
      }
  }
  
  customElements.define('title-component', Title)