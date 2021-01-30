import { call, put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
import * as Types from './actions/types'

function* fetchUserStatistics(action) {
  try {
    const requestConfig = {
      params: {
        limit: action.payload.limit,
        page: action.payload.page
      }
    }

    const response = yield call(axios.get, 'http://localhost:8888/list.users.statistic/', requestConfig)
    yield put({ type: Types.USERS_STATISTICS_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: Types.USERS_STATISTICS_FAIL, message: err.message });
  }
}

function* rootSaga() {
  yield all([
    takeEvery(Types.USERS_STATISTICS_REQUEST, fetchUserStatistics)
  ])
}

export default rootSaga
