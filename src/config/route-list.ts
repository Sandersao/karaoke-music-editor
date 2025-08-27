import { Route } from '../io/type/route'

export const routeList: Route[] = [
    { path: '/folder-config', component: 'folder-config' },
    { path: '/', action: () => { window.location.href = '/folder-config' } },
]