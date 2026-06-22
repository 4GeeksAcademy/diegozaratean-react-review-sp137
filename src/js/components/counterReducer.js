export function counterReducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1, message: 'cambiaste'}
        case 'decrement':
            return {count: state.count - 1 ,message: 'volvi'}
        default:
            return new Error('no se encontro la acion')
    }
}
