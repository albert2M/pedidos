class Order extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
      this.data = []
    }
  
    async aconnectedCallback () {
      await this.loadData()
      await this.render()
    }

    loadData () {
      this.data = [
        {
          "title": "cocacola",  
          "price": 90,
          "unities": 16,
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": 2
        },
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
            text-transform: capitalize;
            font-weight: 600;
            margin: 0;
            color: hsl(208, 100%, 97%);
          }
          
          .products{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            min-height: 77vh;
            max-height: 77vh;
            overflow-y: scroll;
            margin-bottom: 2rem;
          }

          .product {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .product-name h3 {
            margin: 0;
          }

          .product-price{
            display: flex;
            justify-content: flex-end;
          }

          .product-price span {
            font-size: 1.2rem;
            color: white;
          }

          .product-specs span {
            font-size: 1.1rem;
          }

          .product-quantity {
            display: flex;
            justify-content: flex-end;
          }

          .quantity-selector {
            display: flex;
          }

          .quantity-selector button {
            width: 2.5rem;
            height: 2rem;
            font-size: 1.5rem;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          button:hover {
            background-color: #f4f5a9;
            border: 2px solid black;
          }

          input {
            width: 2.5rem;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
            background-color: hsl(216, 68%, 52%);
            height: 2rem;
            border:none
          }

          .button-order {
            display: flex;
            justify-content: center;
          }
          .button-order button {
            font-family: "Lato", sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            width: 85%;
            padding: 0.6rem;
            border-radius: 1.5rem;
            border-bottom: none;

          }
        </style>
  
        <div class="products">
          <div class="product">
            <div class="product-name">
              <h3>Cocacola</h3>
            </div>
            <div class="product-price">
              <span>90.00€</span>
            </div>
            <div class="product-specs">
              <span>16u, 330ml</span>
            </div>
            <div class="product-quantity">
                <div class="quantity-selector">
                    <button name="less">-</button>
                    <div class="display-quantity">
                        <input type="number" value="2" min="1">
                    </div>
                    <button name="plus">+</button>
                </div>
            </div>
          </div>
        </div>
      <div class="button-order">
        <button name="see-order">
            Ver pedido
        </button>
      </div>
        `
      }
  }
  
  customElements.define('order-component', Order)