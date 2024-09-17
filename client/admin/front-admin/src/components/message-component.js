class Message extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    document.addEventListener('message', this.handleMessage.bind(this))
    this.render()
  }

  handleMessage(event) {
    const alertBox = this.shadow.querySelector('.message')
    alertBox.classList.add('active')

    this.shadow.querySelector('p').textContent = event.detail.message

    setTimeout(() => {
      alertBox.classList.remove('active')
    }, 3000)
  }

  render() {
    this.shadow.innerHTML =
      /* html */ `
        <style>
          .message{        
            z-index: 5000;
            transition: opacity 0.3s;
            bottom: 1rem;
            right: 1rem;
            position: fixed;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s;
          }

          .message.active{
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
        </style>

        <div class="message">
          <div class="confirmation-dialog">
            <p></p>
          </div>
        </div>
    `
  }
}

customElements.define('message-component', Message)
