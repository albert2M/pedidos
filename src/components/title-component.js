class Title extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.textAlign = this.getAttribute('text-align')
      this.color= this.getAttribute("color")
      this.fontSize = this.getAttribute('font-size')
      this.title = this.getAttribute('title')
      
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>    
          h2 {
            font-family: "Lato", sans-serif;
            font-size: ${this.fontSize};
            font-weight: 500;
            margin: 0;
            color: ${this.color};
            text-align: ${this.textAlign};
          }
        </style>
  
        <div class="title">
            <h2>${this.title}</h2>
        </div>
        `
      }
  }
  
  customElements.define('title-component', Title)