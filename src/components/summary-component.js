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
          "total": "180€",
          "unities": "16u,",
          "sizeNumber": 330,
          "measurementUnit": "ml",
          "quantity": "2 x",
          "unityPrice": "90€"
        },
        {
          "title": "cafe",  
          "total": "250€",
          "unities": "10u,",
          "sizeNumber": 500,
          "measurementUnit": "gr",
          "quantity": "5 x",
          "unityPrice": "50€"
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
            overflow-y: scroll
          }

          .product {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* (2, 1fr) Dos columnas iguales*/
            gap: 1rem;
          }
          .product:not(:last-child)  {
            border-bottom: 1px solid hsl(0, 0%, 100%);
            padding-bottom: 0.7rem;
          }

          .product-specs {
            display: flex;
            gap: 1rem
          }

          .product-quantity {
            display: flex;
            gap: 0.4rem
          }

          .total-product-price, .product-quantity {
            display: flex;
            justify-content: end;
          }

          .order-total {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
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
        const products = this.shadow.querySelector(".order-summary")

        this.data.forEach(product => {
          const productContainer = document.createElement('div')
          productContainer.classList.add('product')
          products.appendChild(productContainer)

          const productName = document.createElement('div') /*div con Nombre del producto*/ 
          productName.classList.add('product-name')
          productContainer.appendChild(productName)

          const titleProduct = document.createElement("h3")
          titleProduct.textContent = product.title
          productName.appendChild(titleProduct)

          const totalProductPrice = document.createElement('div')
          totalProductPrice.classList.add('total-product-price')
          productContainer.appendChild(totalProductPrice)

          const priceTotalProduct = document.createElement("span")
          priceTotalProduct.textContent = product.total
          totalProductPrice.appendChild(priceTotalProduct)

          const productSpecs = document.createElement("div")
          productSpecs.classList.add('product-specs')
          productContainer.appendChild(productSpecs)

          const productUnities = document.createElement('div')
          productUnities.classList.add('product-unities')
          productSpecs.appendChild(productUnities)

          const unitiesProduct = document.createElement('span')
          unitiesProduct.textContent = product.unities
          productUnities.appendChild(unitiesProduct)

          const productSize = document.createElement("div")
          productSize.classList.add('product-size')
          productSpecs.appendChild(productSize)

          const sizeProduct = document.createElement('span')
          sizeProduct.textContent = product.sizeNumber
          productSize.appendChild(sizeProduct)

          const productMeasurement = document.createElement('span')
          productMeasurement.textContent = product.measurementUnit
          productSize.appendChild(productMeasurement)

          const productQuantity = document.createElement("div")
          productQuantity.classList.add('product-quantity')
          productContainer.appendChild(productQuantity)

          const quantityProduct = document.createElement('span')
          quantityProduct.textContent = product.quantity
          productQuantity.appendChild(quantityProduct)

          const productPrice = document.createElement('span')
          productPrice.textContent = product.unityPrice
          productQuantity.appendChild(productPrice)



        }) 
      }
  }
  
  customElements.define('summary-component', Summary)