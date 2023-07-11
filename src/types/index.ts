export type RootStackParamList = {
    loginToken: {}
    login: {}
    register: {}
    alarm: {}
    settings: {}
    "register-medication": {}
    "tab-screens": {}
    home: {},
    app: {}
}

export type RootTabParamList = {
    home: {}
    register: {}
    medication: {}
    alarm: { id: string }
}