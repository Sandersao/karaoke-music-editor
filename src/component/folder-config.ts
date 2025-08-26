import {LitElement, css, html} from 'lit';
export class FolderConfig extends LitElement {
  static readonly styles = css``;

  private path: string = null
  private _handlePath = (event:InputEvent) => this.path = (event.target as HTMLInputElement).value

  render() {
    return html`
        <h3>Fonder config</h3>
        <p>Please inform here the folder with your songs</p>
        <input type="text" .value="${this.path}" @input="${this._handlePath}"/>
        <button @click="${this.submit}">Submit</button>
    `
  }
  submit(){
    console.log(this.path);
    
  }
}