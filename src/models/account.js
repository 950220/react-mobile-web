import store from "store";
import {
  loginIn
} from '@/services/account'

export default {
  namespace: "account",
  state: { 
    token: store.get('token'),
    guid: store.get('guid'),
    expires_in: store.get('expires_in'),
    refresh_token: store.get('refresh_token'),
    userInfo:{

    }
  },
  effects: {
    *loginAction({ payload }, { call, put }) {
      const { params, fail, success } = payload
      const res = yield call(loginIn, params);
      if (res.resultCode === 200) {
        store.set('token', res.data.token)
        store.set('userId', res.data.id)
        yield put({ type: 'setToken', payload: { ...res.data}})
        yield put({ type: 'setUserId', payload: {...res.data}})
        yield put({ type: 'setUserInfo', payload: {...res.data}})
        success && success()
      } else {
        fail && fail(res)
      }
    },
    *registerAction({ payload }, { call, put }) {
    },
    *getUserInfoAction({ payload }, { call, put }) {
    }
  },
  reducers: {
    setToken(state, { payload }){
      return { ...state, token: payload.token}
    },
    setUserId(state, { payload }){
      return { ...state, username: payload.id}
    },
    setUserInfo(state, { payload }){
      return { ...state, userInfo: payload}
    }
  }
};
