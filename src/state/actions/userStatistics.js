import * as Types from './types'

export const requestUsersStatistics = (limit, page) => ({
  type: Types.USERS_STATISTICS_REQUEST,
  payload: {
    limit,
    page
  }
})

export const selectUser = (user) => ({
  type: Types.SELECT_USER,
  payload: {
    user
  }
})
