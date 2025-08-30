import { Route } from '../io/type/route'
import { globalState } from '../common/global-state'

export const routeList: Route[] = [
    { path: '/folder-config', component: 'folder-config' },
    {
        path: '/', action: () => {
            if (!globalState.workDir) {
                window.location.href = '/folder-config'
                return
            }
            window.location.href = '/music'
        }
    },
]