import { RouterService } from './service/router.service'
import {elementList} from './config/element-list'
import {routeList} from './config/route-list'

(async () => {
    elementList.forEach(e => {
        customElements.define(e.tag, e.element);
    })

    const routerService = new RouterService()
    routerService.route(routeList)
})()