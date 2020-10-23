export const topicReducer = (state={}, action) => {
  switch (action.type) {
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics,
        lessonId: action.lessonId
      }
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    default:
      return state;
  }
}
