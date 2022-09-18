export const logger = (store)=>(next)=>(action)=>{
    // console.log('Current State',store.getState().computedStates)
    // console.log('Current Action',action.action.payload)
    next(action);
}