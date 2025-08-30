import { LitElement, css, html } from 'lit';
import { targetVal } from '../common/target-val'
import { FolderService } from '../service/folder.service'
import { HttpService } from '../service/http.service';

export class FolderConfig extends LitElement {
  static readonly styles = css``;

  path: string = null

  private readonly service: FolderService = new FolderService(new HttpService())

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
    if(!this.path){
      throw new Error('Path must be ');
    }
    this.service.put({path: this.path})
  }
}