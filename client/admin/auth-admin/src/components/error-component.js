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
                
                    
                    gap: 2rem;
                    align-content: center;
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
                    font-size: 2rem;
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
                <p>Página  encontrada</p>
                <a href="/admin/login">Volver al inicio soy el de login</a>
            </div>

      `
  }
}

customElements.define('error-component', Error)
