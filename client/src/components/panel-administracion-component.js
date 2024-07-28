class PanelAdministracion extends HTMLElement {
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
          "nombre": "Pepe",
          "email": "Pepe@gmail.com",  
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
        .filter-panel {
            position: relative;
            width: 35%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            margin-bottom: 1rem;
            border: 2px solid black /* Quitar esto */
        }
        #filter-input {
            width: 100%;
            padding: 10px 10px 10px; /* Añade espacio a la derecha para el icono */
            border: 1px solid #ccc;
            border-radius: 3px;
            
        }
        .filterIcon {
            position: absolute;
            left: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        .dropdown {
            display: none;
            position: absolute;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-top: 1rem;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .dropdown.visible {
            display: block;
        }
        .results {
            margin-top: 1rem;
        }
        .result-item {
            background-color: black;
            color: white;
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .result-item-actions {
            display: flex;
            gap: 0.5rem;
        }
        .edit-panel {
            display: none;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            background-color: white;
            border-radius: 5px;
            margin-top: 1rem;
        }
        .edit-panel.visible {
            display: flex;
        }  
    </style>
    
    <div class="filter-panel">
        <input type="text" id="filter-input">
        <svg class=filterIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
        <div class="dropdown" id="filter-options">
        <label><input type="text" name="filter" value="nombre"> Nombre</label>
        <label><input type="text" name="filter" value="email"> Email</label>
        <label><input type="text" name="filter" value="fecha_creacion"> Fecha de creación</label>
        <label><input type="text" name="filter" value="fecha_actualizacion"> Fecha de actualización</label>
    </div>
    <div class="results" id="results"></div>
      </div>
   

    <div class="edit-panel" id="edit-panel">
      <div class="tabs">
        <button id="tab-general">General</button>
        <button id="tab-products">Productos asignados</button>
      </div>
      <div class="fields">
          <input type="text" id="edit-name" placeholder="Nombre">
          <input type="email" id="edit-email" placeholder="Email">
      </div>
      <div class="actions">
          <button id="clear-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
          </button>
          <button id="save-button">💾</button>
      </div>
    </div>
        `;

        this.shadowRoot.querySelector('#filterIcon').addEventListener('click', () => {
            this.shadowRoot.querySelector('#filter-options').classList.toggle('visible');
        });

        this.shadowRoot.querySelectorAll('input[name="filter"]').forEach(radio => {
            radio.addEventListener('change', (event) => {
                this.filterBy(event.target.value);
            });
        });

        this.shadowRoot.querySelector('#clear-button').addEventListener('click', () => {
            this.clearEditFields();
        });

        this.shadowRoot.querySelector('#save-button').addEventListener('click', () => {
            this.saveEdit();
        });
    }

    filterBy(criteria) {
        const input = this.shadowRoot.querySelector('#filter-input').value.toLowerCase();
        this.filteredData = this.data.filter(item => item[criteria].toLowerCase().includes(input));
        this.renderResults();
    }

    renderResults() {
        const resultsContainer = this.shadowRoot.querySelector('#results');
        resultsContainer.innerHTML = '';
        this.filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <div>
                    <p>Nombre: ${item.nombre}</p>
                    <p>Email: ${item.email}</p>
                    <p>Fecha de creación: ${item.fecha_creacion}</p>
                    <p>Fecha de actualización: ${item.fecha_actualizacion}</p>
                </div>
                <div class="result-item-actions">
                    <button class="edit-button">✏️</button>
                    <button class="delete-button">🗑️</button>
                </div>
            `;
            resultItem.querySelector('.edit-button').addEventListener('click', () => {
                this.editItem(item);
            });
            resultItem.querySelector('.delete-button').addEventListener('click', () => {
                this.deleteItem(item);
            });
            resultsContainer.appendChild(resultItem);
        });
    }

    editItem(item) {
        this.shadowRoot.querySelector('#edit-name').value = item.nombre;
        this.shadowRoot.querySelector('#edit-email').value = item.email;
        this.shadowRoot.querySelector('#edit-panel').classList.add('visible');
    }

    deleteItem(item) {
        this.data = this.data.filter(dataItem => dataItem !== item);
        this.filteredData = this.filteredData.filter(filteredItem => filteredItem !== item);
        this.renderResults();
    }

    clearEditFields() {
        this.shadowRoot.querySelector('#edit-name').value = '';
        this.shadowRoot.querySelector('#edit-email').value = '';
    }

    saveEdit() {
        const name = this.shadowRoot.querySelector('#edit-name').value;
        const email = this.shadowRoot.querySelector('#edit-email').value;
        const item = this.filteredData.find(dataItem => dataItem.nombre === name);
        if (item) {
            item.nombre = name;
            item.email = email;
            this.renderResults();
        }
        this.clearEditFields();
        this.shadowRoot.querySelector('#edit-panel').classList.remove('visible');
    }
}

customElements.define('panel-administracion-component', PanelAdministracion)