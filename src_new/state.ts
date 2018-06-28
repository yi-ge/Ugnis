import lape from 'lape'

interface Router {
    path: 'default' | 'fonts' | 'colors' | 'component'
    componentId?: string
}

interface Component {
    name: string
    exports: any[] //working on this
    nodes: any[]
}

interface Color {
    name: string
    hexValue: string
}

interface Spacing {
    name: string
    size: number
}

interface FontSizes {
    name: string
    size: number
    lineHeight: number
}

interface Font {
    fontName: string
    fontUrl: string
    sizes: FontSizes[]
}

interface State {
    router: Router
    components: { [id: string]: Component }
    colors: Color[]
    spacing: Spacing[]
    fonts: Font[]
}

const defaultState: State = {
    router: {
        path: 'default',
    },
    components: {
        id: {
            name: '',
            exports: [],
            nodes: [],
        },
    },
    colors: [],
    spacing: [
        {
            name: 'S',
            size: 4,
        },
    ],
    fonts: [
        {
            fontName: 'Roboto"',
            fontUrl: 'https://fonts.googleapis.com/css?family=Roboto"',
            sizes: [
                {
                    name: 'small',
                    size: 12,
                    lineHeight: 14,
                },
            ],
        },
    ],
}

export default lape(defaultState)
