class Warning extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
        <style>
    dialog {
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

  <dialog id="confirmationDialog">
    <p>¿Estás seguro que quieres eliminar?</p>
    <div class="modal-buttons">
      <button class="confirm" id="confirmDelete">Sí, eliminar</button>
      <button class="cancel" id="cancelDelete">Cancelar</button>
    </div>
  </dialog>
        `
  }
}

customElements.define('form-component', Warning)
