import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

const plugins = typeof window === 'undefined'
    ? []
    : [createPersistedState({
        storage: window.sessionStorage
    })]

const store = createStore({
    modules: {},
    plugins
})

export default store
