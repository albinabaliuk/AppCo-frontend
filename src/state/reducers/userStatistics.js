import * as Types from '../actions/types'

const initialState = {
  isRequesting: false,
  limit: 16,
  page: 1,

  selectedUser: null,

  data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.USERS_STATISTICS_REQUEST: {
      return {
        ...state,
        page: action.payload.page,
        isRequesting: true
      }
    }

    case Types.USERS_STATISTICS_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        data: action.data || []
      }
    }

    case Types.USERS_STATISTICS_FAIL: {
      return {
        ...state,
        isRequesting: false
      }
    }

    case Types.SELECT_USER: {
      return {
        ...state,
        selectedUser: action.payload.user
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
