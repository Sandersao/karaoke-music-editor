import { LitElement, css, html } from 'lit';
import { InputMetadata } from '../common/input-metadata';
export class FolderConfig extends LitElement {
  static readonly styles = css``;

  pathMeta = new InputMetadata(new Date())

  render() {
    return html`
        <h3>Fonder config</h3>
        <p>Please inform here the folder with your songs</p>
        <input type="date" .value="${this.pathMeta.val()}" @input="${this.pathMeta.val}"/>
        <button @click="${this.submit}">Submit</button>
    `
  }
  submit() {
    console.log(this.pathMeta.val());
  }
}