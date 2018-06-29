let initialState = {
    name: "",
    address: "",
    city: "",
    State: "",
    zipcode: 0,
    inputUrl: "",
    inputMortgage: 0,
    inputRent: 0
}

const ADD_TO_NAME = 'ADD_TO_NAME'
const ADD_ADDRESS = 'ADD_ADDRESS'
const ADD_CITY = 'ADD_CITY'
const ADD_STATE = 'ADD_STATE'
const ADD_ZIPCODE = 'ADD_ZIPCODE'
const ADD_URL = 'ADD_URL'
const ADD_MORTGAGE = 'ADD_MORTGAGE'
const ADD_RENT = 'ADD_RENT'

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_TO_NAME:
            return Object.assign({}, state, {str: action.payload})
        case ADD_ADDRESS:
            return Object.assign({}, state, {str: action.payload})
        case ADD_CITY:
            return Object.assign({}, state, {str: action.payload})
        case ADD_STATE:
            return Object.assign({}, state, {str: action.payload})
        case ADD_ZIPCODE:
            return Object.assign({}, state, {num: action.payload})
        case ADD_URL:
            return Object.assign({}, state, {str: state.str})
        case ADD_MORTGAGE:
            return Object.assign({}, state, {num: state.num})
        case ADD_RENT:
            return Object.assign({}, state, {num: state.num})
        default: return state
    }
}

export function addName(str) {
    if (typeof str !== "string") return;
    return {
      type: ADD_TO_NAME,
      payload: str
    };
  }

  export function addAddress(str) {
    if (typeof str !== "string") return;
    return {
      type: ADD_ADDRESS,
      payload: str
    };
  }

  export function addCity(str) {
    if (typeof str !== "string") return;
    return {
      type: ADD_CITY,
      payload: str
    };
  }

  export function addState(str) {
    if (typeof str !== "string") return;
    return {
      type: ADD_STATE,
      payload: str
    };
  }

  export function addZipcode(num) {
    return {
      type: ADD_ZIPCODE,
      payload: num
    };
  }

  export function addURL(str) {
    if (typeof str !== "string") return;
    return {
      type: ADD_URL,
      payload: str
    };
  }

  export function addMortgage(num) {
    return {
      type: ADD_MORTGAGE,
      payload: num
    };
  }

  export function addRent(num) {
    return {
      type: ADD_RENT,
      payload: num
    };
  }

