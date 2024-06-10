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
            "subtitle": "$0 / mes",  
            "content": ['10 usuarios incluidos', '2 GB de almacenamiento', 'Soporte de correo electrónico', 'Acceso al centro de ayuda'],
            "button": "Regístrate gratis"      
          },
          {
            "title": "Pro",  
            "subtitle": "$15 / mes",
            "content": ['20 usuarios incluidos', '10 GB de almacenamiento', 'Soporte prioritario por correo electrónico', 'Acceso al centro de ayuda'],
            "button": "Empezar"
          },
          {
            "title": "Empresa",  
            "subtitle": "$29 / mes",
            "content": ['30 usuarios incluidos', '15 GB de almacenamiento', 'Soporte telefónico y por correo electrónico', 'Acceso al centro de ayuda'],
            "button": "Contáctenos"
          }

        ]
    }

    render () {
  this.shadow.innerHTML =
    /*html*/`
      <style>
      
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        *{
          box-sizing: border-box;
        }

        h2, h3, p, button {
          color:#DEE2E6;
          font-family: 'Poppins', sans-serif;
          font-weight: 300

        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          gap: 2rem;
        }

        .card {
          border: 1px solid #ccc;
          color: white;
          border-radius: 0.5rem;
        }

        .card-name {
          display:flex;
          justify-content:center;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          background-color: #272B2F    
        }

        .card-description {
          border-top: 1px solid #ccc;
        }
        .card-content-list {
          
          list-style-type: none;
        }

        button {
          color: white;
          background-color: #0D6EFD;
          font-size: 1.1rem;
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

        const cardSubtitle = document.createElement('h3')
        cardSubtitle.textContent = card.subtitle
        cardDescription.appendChild(cardSubtitle)
        
        const cardContentList = document.createElement("ul")
        cardContentList.classList.add('card-content-list')
        cardDescription.appendChild(cardContentList)

        card.content.forEach(item => {
          const cardItemList = document.createElement('li')
          cardItemList.textContent = item
          cardContentList.appendChild(cardItemList)
        })

        const cardButton  = document.createElement('button')
        cardButton.textContent = card.button
        cardDescription.appendChild(cardButton)
      })
  }
}

customElements.define('cads-component', Cads)