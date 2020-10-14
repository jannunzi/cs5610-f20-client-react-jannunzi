const initialState = {
  courses: [],
  course: {
    _id: "1234",
    title: "SOME BOGUS COURSE"
  }
}

const courseReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_COURSES":
      return {
        ...state,
        course: action.course
      }
    default:
      return state
  }
}

export default courseReducer
