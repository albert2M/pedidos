class Error extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
      <style>
      .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    gap: 2rem;
                    align-items: center;
                    height: 100vh;
                }
                h1 {
                    font-size: 8rem;
                    margin: 0;
                    color: yellowgreen;
                }
                p {
                    color: white;
                    font-size: 1.5rem;
                    margin: 0;
                }
                a {
                    display: inline-block;
                    width: 20%;
                    height: 3rem;
                    padding-top: 0.5rem;
                    font-size: 2rem;
                    font-weight:700;
                    color: ##282889;
                    background-color: yellowgreen;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }
                a:hover {
                    background-color: #ff3b30;
                }
      </style>
      <div class="container">
                <h1>404</h1>
                <p>Página no encontrada</p>
                <a href="/">Volver al inicio soy el de admin</a>
            </div>

      `
  }
}

customElements.define('error-component', Error)
