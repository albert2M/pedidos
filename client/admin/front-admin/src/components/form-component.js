class Form extends HTMLElement {
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

          .form{
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .form-header{
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: space-between;
          }

          .form-header-tabs ul{
            display: flex;
          }

          .form-header-tabs ul li{
            background-color: hsl(258, 58%, 42%);
            font-weight: 700;
          }

          .form-header-buttons{
            padding: 0 0.5rem;
          }

          .form-header-buttons ul{
            display: flex;
            gap: 0.5rem;
          }

          form{
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
          }

          .form-element{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-element-label label{
            color: hsl(0, 0%, 100%);
            font-weight: 700;
          }

          .form-element-input{
            width: 100%;
          }

          .form-element-input input{
            background-color: hsl(240, 92%, 75%);
            color: hsl(0, 0%, 100%);
            padding: 0.2rem 0.5rem;
            width: 100%;
          }
        </style>

        <section class="form">
          <div class="form-header">
            <div class="form-header-tabs">
              <ul>
                <li>General</li>
              </ul>
            </div>
            <div class="form-header-buttons">
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                </li>
              </ul>
            </div>
          </div>
          <div class="form-body">
            <form>
              <div class="form-element">
                <div class="form-element-label">
                  <label>Nombre</label>
                </div>
                <div class="form-element-input">
                  <input type="text" name="name">
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label>Email</label>
                </div>
                <div class="form-element-input">
                  <input type="email" name="email">
                </div>
              </div>
            </form>
          </div>
        </section>
        `
  }
}

customElements.define('form-component', Form)
