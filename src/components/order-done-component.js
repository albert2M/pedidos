class OrderDone extends HTMLElement {
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
          *{
            box-sizing: border-box;
          }

          h2, p {
            display: flex;
            justify-content: center;
            font-family: "Lato", sans-serif;
            margin: 0;
            color: hsl(0, 0%, 100%);
          }

        .order-done {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem
        }

        h2 {
            font-size: 1.5rem;
        }
        p {
            padding: 0.5rem 0rem;
            font-size: 1.1rem
        }

        .back-home {
            display: flex;
            justify-content: center;
            padding: 0.5rem;
        }

        button {
            width: 85%;
            padding: 0.5rem;
            border-radius: 2rem;
            border: none;
            font-family: "Lato", sans-serif;
            font-size: 1rem;
            font-weight: 600;
        }
        </style>
  
        <div class="order-done">
          <h2>Pedido realizado con éxito</h2>
          <p>
              En breve recibirá un correo con los detalles. 
              La referencia de su pedido es 0000000002
          </p>    
        </div>
        <div class="back-home">
            <button>Volver al inicio</button>
        </div>
        `
      }
  }
  
  customElements.define('order-done-component', OrderDone)