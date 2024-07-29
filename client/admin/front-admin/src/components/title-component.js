class Title extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.textAlign = this.getAttribute('text-align')
    this.color = this.getAttribute('color')
    this.fontSize = this.getAttribute('font-size')
    this.title = this.getAttribute('title')
    /* Estas son las propiedades del componente.
       Son variables (Ej: this.shadow) que se pueden
      usar en cualquier parte del componente.
      Por ejemplo en el caso de this.title = this.getAttribute('title)
      Lo que se le está diciendo al componente es
      que coja el valor del atributo title que se le está pasando en el
      index.html al componente, lo guarde en la variable this.title (que por convención se le pone el mismo nombre del atributo );
      el cual será mostrado por pantalla al ser un css en la funcion render */
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>    
          h2 {
            font-family: "Lato", sans-serif;
            font-size: ${this.fontSize};  /*${this.fontSize} Esto hace qu el atributo sea una variable capturable en el constructor */
            font-weight: 700;
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
