import { LitElement, html, css, unsafeCSS } from 'lit-element';

export class YCBattery extends LitElement {
  static get properties() {
    return {
      fillAmount: {
        type: Number
      },
      scaleSize: {
        type: Number
      }
    };
  }

  constructor() {
    super();
    this.scaleSize = 1;
  }

  static get styles() {
    return css`
      .battery-holder {
        display: flex;
        align-items: flex-end;
        position: relative;
        margin: 20px 0 auto;
        border-style: solid;
      }

      .battery-top {
        position: absolute;
        border-style: solid;
        border-bottom-style: hidden;
        background-color: white;
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
          width: ${50 * this.scaleSize}px;
          height: ${125 * this.scaleSize}px;
          border-width: ${5 * this.scaleSize}px;
          border-radius: ${10 * this.scaleSize}px;
        }

        .battery-top {
          border-color: hsl(${this.hue}, 60%, 50%);
          left: ${10 * this.scaleSize}px;
          top: ${Math.ceil(-13 * this.scaleSize)}px;
          width: ${20 * this.scaleSize}px;
          height: ${8 * this.scaleSize}px;
          border-width: ${5 * this.scaleSize}px;
          border-radius: ${5 * this.scaleSize}px;
        }

        .battery-content {
          height: ${this.height * this.scaleSize}px;
          width: ${40 * this.scaleSize}px;
          background-color: hsl(${this.hue}, 60%, 50%);
          margin: ${5 * this.scaleSize}px;
        }
      </style>
      <div class="battery-holder">
        <div class="battery-top"></div>
        <div class="battery-content"></div>
      </div>
    `;
  }
}
