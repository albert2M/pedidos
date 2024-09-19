import { store } from '../redux/store.js'
import { refreshTable, showFormElement } from '../redux/crud-slice.js'

class DeleteModal extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    document.addEventListener('showDeleteModal', this.handleShowDeleteModal.bind(this))
    // Dicumento (en cuqalquier parte) escucha evento personalizado 'showDeleteModal'
    // que se disparará con 'new CustomEvent()'
    // ¿Por qué se usa bind(this)?
    /* bind(this) asegura que el contexto de this dentro de la función handleShowFilterModal siempre sea el componente en el que estamos trabajando.
    Sin el bind(this), el contexto de this podría cambiar cuando el evento sea ejecutado, haciendo que this ya no se refiera a la instancia correcta del componente.
    handleShowFilterModal, lo que normalmente haría es realizar alguna acción cuando el evento showFilterModal ocurra. */

    this.render()
  }

  handleShowDeleteModal(event) {
    this.endpoint = event.detail.endpoint
    this.element = event.detail.element
    this.shadow.querySelector('.delete-modal').classList.add('active')
  }

  render() {
    this.shadow.innerHTML =
      /* html */ `
        <style>
          .delete-modal{
            align-items: center;
            background-color: hsla(0, 0%, 0%, 50%);
            display: flex;
            height: 100vh;
            justify-content: center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 5000;
            transition: opacity 0.3s;
            opacity: 0;
            visibility: hidden;
          }

          .delete-modal.active{
            opacity: 1;
            visibility: visible;
          }

          .confirmation-dialog {
            background-color: hsla(0, 0%, 100%, 50%);
            border: none;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          .modal-buttons {
            display: flex;
            justify-content: space-around;
            margin-top: 15px;
          }

          button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .confirm {
            background-color: red;
            color: white;
          }

          .cancel {
            background-color: grey;
            color: white;
          }     
        </style>

        <div class="delete-modal">
          <div class="confirmation-dialog">
            <p>¿Estás seguro que quieres eliminar?</p>
            <div class="modal-buttons">
              <button class="confirm" id="confirmDelete">Sí, eliminar</button>
              <button class="cancel" id="cancelDelete">Cancelar</button>
            </div>
          </div
        </div>
    `

    this.shadow.querySelector('.cancel').addEventListener('click', () => {
      this.shadow.querySelector('.delete-modal').classList.remove('active')
    })

    this.shadow.querySelector('.confirm').addEventListener('click', async () => {
      await fetch(this.element, {
        method: 'DELETE'
      })

      store.dispatch(refreshTable(this.endpoint))

      const formElement = {
        data: null
      }

      store.dispatch(showFormElement(formElement))

      document.dispatchEvent(new CustomEvent('message', {
        detail: {
          message: 'Dato eliminado correctamente'
        }
      }))

      this.shadow.querySelector('.delete-modal').classList.remove('active')
    })
  }
}

customElements.define('delete-modal-component', DeleteModal)
