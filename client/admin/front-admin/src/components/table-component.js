class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  // connectedCallback () {
  //   this.render()
  // }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        Nombre: 'Carlos',
        Email: 'carlossedagambin@gmail.com',
        'Fecha de creación': '2024-04-22',
        'Fecha de actualización': '2024-04-22'
      },
      {
        Nombre: 'Carlos',
        Email: 'carlossedagambin@gmail.com',
        'Fecha de creación': '2024-04-22',
        'Fecha de actualización': '2024-04-22'
      },
      {
        Nombre: 'Carlos',
        Email: 'carlossedagambin@gmail.com',
        'Fecha de creación': '2024-04-22',
        'Fecha de actualización': '2024-04-22'
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
       
        <style>
          *{
            box-sizing: border-box;
          }

          ul{
            list-style: none;
            margin: 0;
            padding: 0;
          }

          svg{
            fill: hsl(240, 92%, 25%);
            height: 1.8rem;
            width: 1.8rem;
          }

          svg:hover{
            cursor: pointer;
            fill: hsl(240, 92%, 55%);
          }

          .table{
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .table-header{
            background-color: hsl(0, 0%, 100%);
            padding: 0.2rem 0.5rem;
          }

          .table-header-buttons ul{
            display: flex;
            gap: 0.5rem;
          }

          .table-body{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .table-register{
            width: 80%;
          }

          .table-register-buttons{
            background-color: hsl(0, 0%, 100%);
            padding: 0.2rem 0.5rem;
          }

          .table-register-buttons ul{
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
          }

          .table-register-data{
            background-color: hsl(0, 0%, 0%);
            padding: 0.2rem;
          }

          .table-register-data ul{
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }

          .table-register-data ul li{
            color: hsl(0, 0%, 100%);
          }

          .table-footer{
            display: flex;
            justify-content: space-between;
          }

          .table-info span{
            color: hsl(0, 0%, 0%);
            font-weight: 700;
          }
        </style>

        <section class="table">
          <div class="table-header">
            <div class="table-header-buttons">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
                    </li>
                </ul>
            </div>
          </div>



          <div class="table-body">
            <div class="table-register">
                <div class="table-register-buttons">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </li>
                    </ul>
                </div>
                <div class="table-register-data">
                    <ul>
                        <li>Nombre: Carlos</li>
                        <li>Email: carlossedagambin@gmail.com</li>
                        <li>Fecha de creación: 2024-04-22</li>
                        <li>Fecha de actualización: 2024-04-22</li>
                    </ul>
                </div>
            </div>
          </div>



          <div class="table-footer">
            <div class="table-info">
                <span>1 registro en total, mostrando 10 por página</span>
            </div>
            <div class="table-pagination"></div>
          </div>
        </section
        `
    const tables = this.shadow.querySelector('.table-body')
    this.data.forEach(element => {
      const tableContainer = document.createElement('div')
      tableContainer.classList.add('product')
      tables.appendChild(tableContainer)
    })
  }
}

customElements.define('table-component', Table)
