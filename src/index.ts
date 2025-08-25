import {elementList} from './config/element-list'

elementList.forEach(e => {
    customElements.define(e.tag, e.element);
})