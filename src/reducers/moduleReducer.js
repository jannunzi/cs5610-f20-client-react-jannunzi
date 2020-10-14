const initialState = {
  modules: []
}

const moduleReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FIND_MODULES_FOR_COURSE":
      debugger
      return {
        ...state,
        modules: action.modules
      }
    case "DELETE_MODULE":
      return {
        ...state,
        modules: state.modules.filter(module => module._id !== action.module._id)
      }
    case "CREATE_MODULE":
      return {
        ...state,
        modules: [
          ...state.modules,
          action.module
        ]
      }
    case "UPDATE_MODULE":
      debugger
      return {
        ...state,
        modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
      }
    default:
      return state
  }
}

export default moduleReducer
