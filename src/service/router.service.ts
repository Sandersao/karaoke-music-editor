import { Router } from "@vaadin/router";

export class RouterService {
    private router: Router = new Router(document.querySelector('#outlet'))

    public route (routeList: {path: string, component: string}[]) {
        return this.router.setRoutes(routeList)
    }
}