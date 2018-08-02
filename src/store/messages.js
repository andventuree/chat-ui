import axios from "axios";

// action types
const GET_MESSAGE = "GET_MESSAGE";
const GET_MESSAGES = "GET_MESSAGES";

// actions
export const getMessage = message => {
  return { type: GET_MESSAGE, message };
};
export const getMessages = messages => {
  return { type: GET_MESSAGES, messages };
};

// thunks
export const fetchMessages = () => {
  return dispatch => {
    return axios
      .get("/spotim/chat/messages")
      .then(res => res.data)
      .then(messages => {
        dispatch(getMessages(messages));
      })
      .catch(err => console.error(err));
  };
};

export const postMessage = messagePayload => {
  console.log(messagePayload);
  return dispatch => {
    return axios
      .post("/spotim/chat/messages", messagePayload)
      .then(res => res.data)
      .then(newMessage => {
        dispatch(getMessage(newMessage));
      })
      .catch(err => console.error(err));
  };
};

// reducer
export default (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case GET_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};
