class Login extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/ `
       
        <style>

          *{
            box-sizing: border-box;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 350px;
          }

          .form-element {
            display: flex;
            flex-direction: column;
            
          }

          .form-element-label {
            color: hsl(0, 0%, 100%);
            font-family: "Lato", sans-serif;
          }
          
          .form-element-input input{
            width: 100%;
            background-color: hsl(214, 92%, 63%);
            padding: 0.5rem;
            border: none;
          }
          
          .form-element-button {
            display: flex;
            justify-content: center;
          }
          
          button {
            background-color: hsl(271, 63%, 53%);
            border: none;
            border-radius: 0.5rem;
            padding: 0.5rem;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            width
            : 100%;
          }

        </style>

        <form>
            <div class="form-element">
                <div class="form-element-label">
                    <label for="email>">Email</label>
                </div>
                <div class="form-element-input">
                    <input type="email" id="email" name="email" required>
                </div>
            </div>
            <div class="form-element">
                <div class="form-element-label">
                    <label for="password">Password</label>
                </div>
                <div class="form-element-input">
                    <input type="password" id="password" name="password" required>
                </div>
            </div>
            <div class="form-element-button">
                <button type="submit">Enviar</button>
            </div>
        </form>
        `
      }
  }
  
  customElements.define('login-component', Login)