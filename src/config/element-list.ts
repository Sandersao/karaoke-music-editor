import { HelloWorld } from '../component/hello-world'
import { HeadConfig } from '../component/head-config'

export const elementList: { tag: string, element: CustomElementConstructor }[] = [
    { tag: 'hello-world', element: HelloWorld },
    { tag: 'head-config', element: HeadConfig }
]