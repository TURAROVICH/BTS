export const state = () => ({
    toggleConnect:false,
    addToken:false
})

export const mutations = {
    toggle(state,val){
        state.toggleConnect = val
    },
    addToken(state,val){
        state.addToken = val
    }
}