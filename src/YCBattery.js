import { LitElement, html, css, unsafeCSS } from 'lit-element';

export class YCBattery extends LitElement {
  static get properties() {
    return {
      fillAmount: {
        type: Number
      }
    };
  }

  static get styles() {
    return css`
      .battery-holder {
        display: flex;
        align-items: flex-end;
        position: relative;
        margin: 8px 0 auto;
        width: 50px;
        height: 125px;
        border-style: solid;
        border-width: 5px;
        border-radius: 10px;
      }

      .battery-top {
        width: 20px;
        height: 8px;
        position: absolute;
        top: -13px;
        left: 10px;
        border-style: solid;
        border-width: 5px;
        border-bottom-style: hidden;
        border-radius: 5px;
        background-color: white;
      }

      .battery-content {
        width: 40px;
        margin: 5px auto;
      }
    `;
  }

  get height() {
    return (this.fillAmount / 100) * 115;
  }

  get hue() {
    return (this.fillAmount / 100) * 120;
  }

  render() {
    return html`
      <style>
        .battery-holder {
          border-color: hsl(${this.hue}, 60%, 50%);
        }

        .battery-top {
          border-color: hsl(${this.hue}, 60%, 50%);
        }

        .battery-content {
          height: ${this.height}px;
          background-color: hsl(${this.hue}, 60%, 50%);
        }
      </style>
      <div class="battery-holder">
        <div class="battery-top"></div>
        <div class="battery-content"></div>
      </div>
    `;
  }
}
