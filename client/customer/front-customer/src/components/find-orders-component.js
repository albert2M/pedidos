class FindOrders extends HTMLElement {
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
          "referenceNumber": "0000000002",
          "total": "180",
          "date": "20-05-2024",
          "time": "11:13"
        },
        {
          "referenceNumber": "0000000003",
          "total": "270",
          "date": "13-05-2024",
          "time": "17:09"
        },
        {
          "referenceNumber": "0000000002",
          "total": "270",
          "date": "13-05-2024",
          "time": "17:09"
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

          h2, span {
            font-family: "Lato", sans-serif;
            font-weight: 600;
            margin: 0;
            color: hsl(0, 0%, 100%);
          }

          /*.title h2 {
            display: flex;
            font-size: 1.2rem;
          }*/
          .icon  svg{
            fill: hsl(0,0%,100%);
            height: 2rem;
            width: 2rem;
          }

          /*.calendar-icon {
            height: 1rem;
            width: 1rem;
          } */


          .finder-orders {
            display: grid;
            grid-template-columns: 55% 45%;
            gap: 1rem 0.5rem;
            border-bottom: 1px solid hsl(0, 0%, 100%);
            padding-bottom: 0.9rem;
          }

          .reference-search {

          }

          .search-input {
            width: 90%;
            font-size: 0.8rem;
            font-family: "Lato", sans-serif;
            font-weight: 600;
            height: 1.8rem;
            border: none;
          }

/* .date-search {
    position: relative;
    width: 13rem;

}

.calendar-icon {
    position: absolute;
    top: 13.5%;
    right: 1.5rem;
} */

          .date-input {
            width: 90%;
            font-size: 0.8rem;
            font-family: "Lato", sans-serif;
            font-weight: 600;
            height: 1.8rem;
            border: none;
          }

          .search-button {
            justify-self: end;
            width: 100%;
          }

          .search-button button {
            font-size: 0.8rem;
            font-family: "Lato", sans-serif;
            font-weight: 600;
            width: 95%;
            height: 1.8rem;
            border: none;
            border-radius: 0.5rem;
          }

          .order-results {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: scroll;
          }

          .result {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;   
          }

          .result:not(:last-child) {
            border-bottom: 1px solid hsl(0, 0%, 100%);
            padding-bottom: 0.7rem;
          }
          .order-price {
            display: flex;
            justify-content: end;
          }

          .see-order-button {
            display: flex;
            justify-content: end;
          }

          .see-order {
            font-family: "Lato", sans-serif;
            font-weight: 600;
            font-size: 3rem
            padding: 0.2rem 1rem;
          }
        
        </style>
  
  <div class="finder-orders">
    <div class="reference-search">
      <input class="search-input" type="text" placeholder="Referencia del pedido" >
    </div>
    <div class="search-button">
      <button>Búsqueda por referencia</button>
    </div>
    <div class="date-search">
      <input class="date-input" type="date" placeholder="dd/mm/aaaa" >
      <!-- <div class="calendar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" /></svg>
      </div>  Esto sería otra forma de hacerlo-->
    </div>
    <div class="search-button">
      <button>Búsqueda por fecha</button>
    </div>
</div>
<div class="order-results">
  <div class="result">
      <div class="reference">
          <span>0000000002</span>
      </div>
      <div class="order-price">
          <span>180€</span>
      </div>
      <div class="date-time-order">
          <span>20-05-2024 11:13</span>
      </div>
      <div class="see-order-button">
          <button class="see-order">Ver pedido</button>
      </div>
  </div>
  <div class="result">
      <div class="reference">
          <span>0000000003</span>
      </div>
      <div class="order-price">
          <span>270€</span>
      </div>
      <div class="date-time-order">
          <span>13-05-2024 17:09</span>
      </div>
      <div class="see-order-button">
          <button class="see-order">Ver pedido</button>
      </div>
  </div>
  <div class="result">
      <div class="reference">
          <span>0000000002</span>
      </div>
      <div class="order-price">
          <span>270€</span>
      </div>
      <div class="date-time-order">
          <span>13-05-2024 17:09</span>
      </div>
      <div class="see-order-button">
          <button class="see-order">Ver pedido</button>
      </div>
  </div>
</div>
        `
      }
  }
  
  customElements.define('find-orders-component', FindOrders)