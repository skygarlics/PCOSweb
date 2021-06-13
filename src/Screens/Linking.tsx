const config = {
    screens: {
        Main: {
            screens: {
                TimerHome: 'TimerHome',
                CheckListEditor: 'CheckListEditor',
                CaseScreen: 'CaseScreen', 
            }
        },
        NotFound: '*',
    },
}

const linking = {
    prefixes: ['/'],
    config
}

export default linking;