class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.loadData()
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .menu {
            margin-top: 2rem;  
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.2rem;
          }

          .menu-item {
            width: 80%;
          }

          button {
            background-color: hsl(0, 0%, 100%);
            width: 100%;
            border: none;
            border-radius: 1.2rem;
            padding: 0.6rem;
            color: rgb(34, 81, 151);
            font-size: 1.2rem;
            font-weight: 600;
          }
        </style>
  
        <section class="menu">
            <div class="menu-item">
                <button type="new-order">Nuevo pedido</button>
            </div>
            <div class="menu-item">
                <button type="previous orders">Pedidos anteriores</button>
            </div>
        </section>
        `
  }
}

customElements.define('menu-component', Menu)
