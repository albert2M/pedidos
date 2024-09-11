import isEqual from 'lodash-es/isEqual'
import { store } from '../redux/store.js'
import { showFormElement } from '../redux/crud-slice.js'

class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
    this.endpoint = `${import.meta.env.VITE_API_URL}/api/admin/users`
    this.currentPage = 1
  }

  async connectedCallback () {
    this.unsubscribe = store.subscribe(async () => {
      const currentState = store.getState()

      if (currentState.crud.tableEndpoint && isEqual(this.endpoint, currentState.crud.tableEndpoint)) {
        await this.loadData()
        await this.render()
      }
    })

    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch(this.endpoint)
    this.data = await response.json()
  }

  render () {
    // const startIndex = (this.currentPage - 1) * this.itemsPerPage
    // const endIndex = startIndex + this.itemsPerPage
    // const pageData = this.data.slice(startIndex, endIndex)
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
            padding: 0 0.5rem;
            position: relative;
            display: inline-block;
          }

          .filter-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
          }

          .filter-form {
            display: none;
            position: absolute;
            top: 35px;
            right: 1;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 1000;
            width: 20rem;
          }

          .filter-form.active {
            display: block;
          }

          .table-body{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 70vh;
            max-height: 70vh; /* Ajusta la altura máxima para que aparezca el scroll */
            overflow-y: auto; /* Agrega la barra de desplazamiento vertical */
          }

          .table-register{
            width: 80%;
            background-color:hsl(0, 0%, 0%);
            
          }

          .table-register-buttons{
            background-color: hsl(0, 0%, 100%);
            padding: 0rem 0.5rem;
          }

          .table-register-buttons ul{
            display: flex;
            justify-content: flex-end;
          }

          .table-register-content{
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            padding: 0.5rem;
          }

          .table-register-content li {
            color: hsl(0, 0%, 100%);
          }

          .table-footer{
            display: flex;
            justify-content: space-between;
            background-color: hsl(0, 0%, 100%);
            padding: 0.2rem 0.5rem;
          }

          .table-info span{
            color: hsl(#2323F6);
            font-weight: 700;
            padding: 0.5rem;
          }

          .pagination-button {
            cursor: pointer;
            padding: 0.2rem 0.5rem;
            background-color: hsl(240, 92%, 25%);
            color: white;
            margin: 0 0.25rem;
            border-radius: 0.25rem;
            border: none;
          }
          .pagination-button[disabled] {
            background-color: grey;
            cursor: not-allowed;
          }

          .pagination-input {
            width: calc(1ch * var(--max-digits, 3));
            padding: 0.2rem;
            font-size: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            text-align: center;
            outline: none;
            transition: border-color 0.2s;
            width: 5rem;
          }
          
          .pagination-input[data-max-digits='1'] {
            width: calc(1ch * 1);
          }

          .pagination-input[data-max-digits='2'] {
            width: calc(1ch * 2);
          }

          .pagination-input[data-max-digits='3'] {
            width: calc(1ch * 3);
          }

          .pagination-input[data-max-digits='4'] {
            width: calc(1ch * 4);
          }

          .pagination-input:focus {
            border-color: #007bff; /* Cambia el color del borde al hacer focus */
          }
    </style>

    <section class="table">
      <div class="table-header">
        <div class="filter-button">          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>                      
        </div>
        <form class="filter-form">
            <div class="form-group">
              <label for="filter-name">Nombre:</label>
              <input type="text" id="filter-name" name="filter-name">
            </div>
            <div class="form-group">
              <label for="filter-email">Email:</label>
              <input type="email" id="filter-email" name="filter-email">
            </div>
            <div class="form-group">
              <label for="filter-creation-date">Fecha de creación:</label>
              <input type="date" id="filter-creation-date" name="filter-creation-date">
            </div>
            <div class="form-group">
              <label for="filter-update-date">Fecha de actualización:</label>
              <input type="date" id="filter-update-date" name="filter-update-date">
            </div>
            <div class="form-actions">
              <button type="button" id="apply-filter">Aplicar</button>
              <button type="reset">Limpiar</button>
            </div>
          </form>
      </div>

      <div class="table-body"></div>

      <div class="table-footer">
        <div class="table-info">
            <span>${this.data.count} ${this.data.count > 1 ? 'registros' : 'registro'} en total, mostrando ${this.data.meta.size} por página</span>
        </div>
        <div class="table-pagination"></div>
      </div>
    </section>
    `

    const tables = this.shadow.querySelector('.table-body')
    tables.innerHTML = '' // Limpiar contenido anterior

    this.data.rows.forEach(element => {
      const tableRegister = document.createElement('div')
      tableRegister.classList.add('table-register')
      tables.appendChild(tableRegister)

      const tableRegisterButtons = document.createElement('div')
      tableRegisterButtons.classList.add('table-register-buttons')
      tableRegister.appendChild(tableRegisterButtons)

      const registerButtons = document.createElement('ul')
      registerButtons.classList.add('register-buttons')
      tableRegisterButtons.appendChild(registerButtons)

      const editButton = document.createElement('li')
      editButton.classList.add('edit-button')
      editButton.dataset.id = element.id
      editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
      registerButtons.appendChild(editButton)

      const deleteButton = document.createElement('li')
      deleteButton.classList.add('delete-button')
      deleteButton.dataset.id = element.id
      deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
      registerButtons.appendChild(deleteButton)

      const tableRegisterContent = document.createElement('ul')
      tableRegisterContent.classList.add('table-register-content')
      tableRegister.appendChild(tableRegisterContent)

      // Object.entries(element).forEach(([key, value]) => {
      //   const elementItemList = document.createElement('li')
      //   elementItemList.textContent = `${key}: ${value}`
      //   tableRegisterContent.appendChild(elementItemList)
      // })

      let elementItemList = document.createElement('li')
      elementItemList.textContent = `nombre: ${element.name}`
      tableRegisterContent.appendChild(elementItemList)

      elementItemList = document.createElement('li')
      elementItemList.textContent = `email: ${element.email}`
      tableRegisterContent.appendChild(elementItemList)

      elementItemList = document.createElement('li')
      elementItemList.textContent = `creado el: ${element.createdAt}`
      tableRegisterContent.appendChild(elementItemList)
    })

    this.renderRegisterButtons()
    this.addFilterToggle()
    this.renderPagination() // Llamada para renderizar la paginación
  }

  async renderRegisterButtons () {
    this.shadow.querySelector('.table-body').addEventListener('click', async (event) => {
      if (event.target.closest('.edit-button')) {
        const id = event.target.closest('.edit-button').dataset.id
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/${id}`)
        const data = await response.json()

        const formElement = {
          data
        }

        store.dispatch(showFormElement(formElement))
      }

      if (event.target.closest('.delete-button')) {

      }
    })
  }

  addFilterToggle () {
    const filterButton = this.shadow.querySelector('.filter-button')
    const filterForm = this.shadow.querySelector('.filter-form')
    const tableSection = this.shadow.querySelector('.table')

    filterButton.addEventListener('click', (e) => {
      if (e.target.matches('svg')) {
        filterForm.classList.toggle('active')
      }
    })

    tableSection.addEventListener('click', (e) => {
      if (!e.target.matches('svg') && !filterForm.contains(e.target)) {
        filterForm.classList.remove('active')
      }
    })
  }

  renderPagination () {
    const paginationContainer = this.shadow.querySelector('.table-pagination')
    paginationContainer.innerHTML = ''

    const totalPages = Math.ceil(this.data.length / this.itemsPerPage)

    const prevButton = document.createElement('button')
    prevButton.textContent = 'Anterior'
    prevButton.classList.add('pagination-button')
    prevButton.disabled = this.currentPage === 1
    prevButton.addEventListener('click', () => this.changePage(this.currentPage - 1))
    paginationContainer.appendChild(prevButton)

    const pageInput = document.createElement('input')
    pageInput.type = 'text' // Tipo inicial como texto para mostrar el número actual
    pageInput.value = this.data.meta.currentPage
    pageInput.classList.add('pagination-input')
    pageInput.style.textAlign = 'center' // Para centrar el texto dentro del input

    pageInput.addEventListener('click', () => {
      pageInput.type = 'number' // Cambiar a tipo número al hacer click para ingresar un número
      pageInput.select() // Seleccionar el contenido actual para facilitar la entrada
    })

    // Manejar el cambio de página cuando el input pierde el foco o se presiona Enter
    pageInput.addEventListener('blur', () => this.handlePageInput(pageInput, totalPages))
    pageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handlePageInput(pageInput, totalPages)
      }
    })

    paginationContainer.appendChild(pageInput)

    const nextButton = document.createElement('button')
    nextButton.textContent = 'Siguiente'
    nextButton.classList.add('pagination-button')
    nextButton.disabled = this.currentPage === totalPages
    nextButton.addEventListener('click', () => this.changePage(this.currentPage + 1))
    paginationContainer.appendChild(nextButton)
  }

  handlePageInput (inputElement, totalPages) {
    const pageNumber = parseInt(inputElement.value, 10)

    if (isNaN(pageNumber) || pageNumber < 1) {
      inputElement.value = this.currentPage // Restaurar el número actual si la entrada es inválida
    } else if (pageNumber > totalPages) {
      this.changePage(totalPages) // Ir a la última página si el número ingresado es mayor al total de páginas
    } else {
      this.changePage(pageNumber) // Cambiar a la página deseada
    }

    inputElement.type = 'text' // Volver a mostrar como texto el número de la página
    inputElement.value = this.currentPage // Actualizar el valor mostrado en el input
  }

  changePage (pageNumber) {
    this.currentPage = pageNumber
    this.render()
  }
}

customElements.define('table-component', Table)
