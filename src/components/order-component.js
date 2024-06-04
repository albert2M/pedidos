class Order extends HTMLElement {
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
          "title": "cocacola",  
          "price": "90€",
          "unities": "16u, ",
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": 2
        },
        {
          "title": "cocacola",  
          "price": "90€",
          "unities": "16u, ",
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": 2
        },
        {
          "title": "cocacola",  
          "price": "90€",
          "unities": "16u, ",
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": 2
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
              text-transform: capitalize;
              font-weight: 600;
              margin: 0;
              color: hsl(208, 100%, 97%);
            }

            .products{
              display: flex;
              flex-direction: column;
              gap: 1rem;
              height: 75vh;
              min-height: 75vh;
              margin-bottom: 1rem;
            }
            
            .product {
              border-bottom: 2px solid hsl(0, 0%, 100%);
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
              padding-bottom: 1rem;
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

            .display-quantity{
              align-items: center;
              display: flex;
              justify-content: center;
              width: 2.5rem;
              text-align: center;
              background-color: hsl(216, 68%, 52%);
              height: 2rem;
            }

            span {
              font-weight: 600;
              font-size: 1.1rem;
            }

            button:hover {
              background-color: #f4f5a9;
              border: 2px solid black;
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
  
          <section class="products"></section> <!-Aquí solo se deja el contenedor y aquello que no cambie. Lo que cambia se construye con JS dinámicamente->

          <div class="button-order">
            <button name="see-order">
                Ver pedido
            </button>
          </div>
        `

        const products = this.shadow.querySelector(".products") /*En a constante products se mete la clase .products, que es seleccionada mediante querySelector 
                                                                de this.shadow*/ 

        this.data.forEach(product => {

          const productContainer = document.createElement('div')
          productContainer.classList.add('product')
          products.appendChild(productContainer)

          const productName = document.createElement('div')
          productName.classList.add('product-name')
          productContainer.appendChild(productName)

          const titleProduct = document.createElement("h3")
          titleProduct.textContent = product.title
          productName.appendChild(titleProduct)

          const productPrice = document.createElement('div')
          productPrice.classList.add('product-price')
          productContainer.appendChild(productPrice)

          const priceProduct = document.createElement("span")
          priceProduct.textContent = product.price
          productPrice.appendChild(priceProduct)

          const productUnities = document.createElement('div')
          productUnities.classList.add('product-unities')
          productContainer.appendChild(productUnities)

          const unitiesProduct = document.createElement("span")
          unitiesProduct.textContent = product.unities
          productUnities.appendChild(unitiesProduct)       

          const sizeProduct = document.createElement("span")
          sizeProduct.textContent = product.sizeNumber
          productUnities.appendChild(sizeProduct)

          const measureUnit = document.createElement("span")
          measureUnit.textContent = product.measurementUnit
          productUnities.appendChild(measureUnit)

          const productQuantity = document.createElement('div')
          productQuantity.classList.add('product-quantity')
          productContainer.appendChild(productQuantity)
          
          let quantitySelector = document.createElement('div')
          quantitySelector.classList.add('quantity-selector')
          productQuantity.appendChild(quantitySelector)

          const lessButton = document.createElement('button')
          lessButton.classList.add('less-button')
          lessButton.textContent = '-'
          quantitySelector.appendChild(lessButton)

          const displayQuantity = document.createElement('div')
          displayQuantity.classList.add('display-quantity')
          productQuantity.appendChild(displayQuantity) 

          const quantity = document.createElement('span')
          quantity.classList.add('quantity')
          quantity.textContent = 0
          displayQuantity.appendChild(quantity)

          quantitySelector = document.createElement('div')
          quantitySelector.classList.add('quantity-selector')
          productQuantity.appendChild(quantitySelector)

          const plusButton = document.createElement('button')
          lessButton.classList.add('less-button')
          plusButton.textContent = '+'
          quantitySelector.appendChild(plusButton)
        })
      }
  }
  
  customElements.define('order-component', Order)