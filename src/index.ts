import { RouterService } from './service/router.service'
import {elementList} from './config/element-list'

elementList.forEach(e => {
    customElements.define(e.tag, e.element);
})

const routerService = new RouterService()
routerService.route([
    {path: '/folder-config', component: 'folder-config'},
])