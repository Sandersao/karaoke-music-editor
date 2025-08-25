import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class HelloWorld extends LitElement {
  static readonly styles = css`
    :host {
      color: green;
    }
  `;

  @property()
  name?: string = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}