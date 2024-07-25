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
          "title": "Gratis",
          "price": "$0",  
          "month": "/mes",
          "content": ['10 usuarios incluidos', '2 GB de almacenamiento', 'Soporte de correo electrónico', 'Acceso al centro de ayuda'],
          "button": "Regístrate gratis"      
        },
        {
          "title": "Pro",  
          "price": "$15",  
          "month": "/mes",
          "content": ['20 usuarios incluidos', '10 GB de almacenamiento', 'Soporte prioritario por correo electrónico', 'Acceso al centro de ayuda'],
          "button": "Empezar"
        },
        {
          "title": "Empresa",  
          "price": "$29",  
          "month": "/mes",
          "content": ['30 usuarios incluidos', '15 GB de almacenamiento', 'Soporte telefónico y por correo electrónico', 'Acceso al centro de ayuda'],
          "button": "Contáctenos"
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

      .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content:center;       
        gap: 2rem;
        padding: 0 20rem
      }

      .card {
        border: 1px solid #c6c6c6;
        color: white;
        border-radius: 0.5rem;
        height: fit-content ;
      }

      .special-card {
        border: 1px solid #0D6EFD;
        color: white;
        border-radius: 0.5rem;
        height: fit-content ;
      }

      .card-name {
        display:flex;
        justify-content:center;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background-color: #272B2F;   
      }

      .special-card-name {
        display:flex;
        justify-content:center;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background-color: #0D6EFD;  
      }

      .card-description {
        display:flex;
        flex-direction:column;
        border-top: 1px solid #ccc;
        align-items:center;
        height: fit-content
      }

      .special-card-description {
        display:flex;
        flex-direction:column;
        border-top: 1px solid #0D6EFD;
        align-items:center;
        height: fit-content
      }
      .card-subtitle {     
        display:flex;  
        max-height:5rem;   
        align-items: center;  
        gap: 0.5rem
      }
      .card-content-list {
        font-family: 'Open Sans', sans-serif;
        list-style-type: none;         
        margin-top: 0rem; 
        padding-right: 2.5rem
      }

      ul {
               
      }

      li {
        display:flex;
        justify-content: center;
        font-size: 0.9rem;
        text-align:center
      }

      button {
        color: white;
        background-color: #0D6EFD;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        border: none;
        width: 15rem;
        padding:0.5rem 0;
        border-radius: 0.3rem;
      }

      .special-button {
        color: #0D6EFD;
        background-color: #212529;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        border: 1px solid #0D6EFD ;
        width: 15rem;
        padding:0.5rem 0;
        border-radius: 0.3rem;
      }
    </style>
    
    <section class = "cards"></section>
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