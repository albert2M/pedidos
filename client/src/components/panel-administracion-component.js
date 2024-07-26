class Cads extends HTMLElement {
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
          "nombre": "Alberto",
          "email": "albertomorenomartinez@gmail.com",  
          "fecha_creacion": "2024-04-22",
          "fecha_actualizacion": "2024-04-22"      
        },
        {
          "nombre": "Carlos",
          "email": "carlossedagambin@gmail.com",  
          "fecha_creacion": "2024-04-22",
          "fecha_actualizacion": "2024-04-22"
        },
        {
          "nombre": "Carlos",
          "email": "carlossedagambin@gmail.com",  
          "fecha_creacion": "2024-04-22",
          "fecha_actualizacion": "2024-04-22"
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

      h2, h3, h4 p, button {
        color:#DEE2E6;
        font-family: 'Open Sans'
      }

      h2 { font-weight: 400}

      h3 {
        font-weight: 600;
        font-size: 2rem
      }

      h4 {
        font-weight: 50;
        font-size: 2rem;
        color: grey
      }

      
    </style>
    
    <section class = "panel"></section>
    <div class="pagination">
    </div>
    `
    const cards = this.shadow.querySelector(".cards")

    this.data.forEach(card => {

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('card')
      cards.appendChild(cardContainer)

      const cardName = document.createElement('div')
      cardName.classList.add('card-name')
      cardContainer.appendChild(cardName)

      const cardTitle = document.createElement('h2')
      cardTitle.textContent = card.title
      cardName.appendChild(cardTitle)

      const cardDescription = document.createElement("div")
      cardDescription.classList.add('card-description')
      cardContainer.appendChild(cardDescription)

      const cardSubtitle = document.createElement('div')
      cardSubtitle.classList.add('card-subtitle')
      cardDescription.appendChild(cardSubtitle)

      const cardSubtitlePrice = document.createElement('h3')
      cardSubtitlePrice.textContent = card.price
      cardSubtitle.appendChild(cardSubtitlePrice)

      const cardSubtitleMonth = document.createElement('h4')
      cardSubtitleMonth.textContent = card.month
      cardSubtitle.appendChild(cardSubtitleMonth)
      
      const cardContentList = document.createElement("ul")
      cardContentList.classList.add('card-content-list')
      cardDescription.appendChild(cardContentList)

      card.content.forEach(item => {
        const cardItemList = document.createElement('li')
        cardItemList.textContent = item
        cardContentList.appendChild(cardItemList)

        if (card.title === "Empresa") {
          cardContainer.classList.add('special-card')
          cards.appendChild(cardContainer)

          cardName.classList.add('special-card-name')
          cardContainer.appendChild(cardName)

          cardDescription.classList.add('special-card-description')
          cardContainer.appendChild(cardDescription)
        }
      })

      const cardButton  = document.createElement('button')
      cardButton.textContent = card.button
      cardDescription.appendChild(cardButton)

      
      if (card.title === "Gratis") {
        cardButton.classList.add('special-button')
        cardDescription.appendChild(cardButton)
      }
      
    })
}
}

customElements.define('cads-component', Cads)