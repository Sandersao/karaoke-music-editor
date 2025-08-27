import { Router } from "@vaadin/router";
import { Route } from '../io/type/route'

export class RouterService {
    private router: Router = new Router(document.querySelector('#outlet'))

    public route (routeList: Route[]) {
        return this.router.setRoutes(routeList as any[])
    }
}