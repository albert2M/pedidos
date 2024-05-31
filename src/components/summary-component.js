class Summary extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
    }
  
    async connectedCallback () {
      await this.loadData()
      await this.render()
    }

    loadData () {
      this.data = [
        {
          "title": "Cocacola",  
          "total": 180,
          "unities": 16,
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": 2,
          "unityPrice": 90
        },
        {
          "title": "cafe",  
          "total": 250,
          "unities": 10,
          "sizeNumber": 500,
          "measurementUnit": "gr",
          "quantity": 5,
          "unityPrice": 50
        }
      ]
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
        <style>
          *{
            box-sizing: border-box;
          }

          h2, h3, span {
            font-family: "Lato", sans-serif;
            font-weight: 600;
            margin: 0;
            color: hsl(0, 0%, 100%);
          }
          
          .order-summary {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            min-height: 68vh;
            max-height: 68vh;
            overflow-y: scroll;
            margin-bottom: 2rem;
          }
          .product {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* (2, 1fr) Dos columnas iguales*/
            gap: 1rem;
          }

          .product:not(:last-child) {
            border-bottom: 1px solid hsl(0, 0%, 100%);
            padding-bottom: 0.7rem;
          }

          .total-product-price, .product-quantity {
            display: flex;
            justify-content: end;
          }

          .order-total {
            display: grid;
            grid-template-columns: 15rem 5rem; 
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .total-price {
            display: flex;
            justify-content: end;
          }

          .total, .total-price {
            font-size: 1.5rem;
          }
          .finish-order-button {
            display: flex;
            justify-content: center;
            padding: 1rem;
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
  
  <div class="order-summary">
    <div class="product">
        <div class="product-name">
            <h3>Cocacola</h3>
        </div>
        <div class="total-product-price">
            <span>180.00€</span>
        </div>
        <div class="product-specs">
            <span>16u, 330ml</span>
        </div>
        <div class="product-quantity">
            <span>2 x 90.00€</span>
        </div>
    </div>
    <div class="product">
        <div class="product-name">
            <h3>Café</h3>
        </div>
        <div class="total-product-price">
            <span>120.00€</span>
        </div>
        <div class="product-specs">
            <span>20u, 500gr</span>
        </div>
        <div class="product-quantity">
            <span>2 x 60.00€</span>
        </div>
    </div>
  </div>
  <div class="order-total">
    <span class="total">Total</span>
    <span class="total-price">180.00€</span>
    <span class="taxes">Impuestos no incluidos</span>
  </div>
  <div class="finish-order-button">
    <button class="finish-order">Finalizar pedido</button>
</div>
        `
      }
  }
  
  customElements.define('summary-component', Summary)