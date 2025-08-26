import { LitElement, css, html } from 'lit';
import { targetVal } from '../common/target-val'

export class FolderConfig extends LitElement {
  static readonly styles = css``;

  path: string = null

  render() {
    return html`
        <h3>Fonder config</h3>
        <p>Please inform here the folder with your songs</p>
        <form @submit="${this.submit}">
          <input type="text" .value="${this.path}" @input="${(e: InputEvent) => this.path = targetVal(e.target)}"/>
          <button>Submit</button>
        </form>
    `
  }

  submit(e: SubmitEvent) {
    e.preventDefault()
    console.log(this.path)
  }
}