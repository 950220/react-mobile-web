import store from "store";
import {
  getQuestionData,
  submitQuestionResult
} from './service'

export default {
  namespace: "question",
  state: {
    questionData: {},
    questionDataList: [],
    results: [],
    type: store.get('testType'),
    questionIndex: 0,
    isLastQuestion: false
  },
  effects: {
    *getQuestionDataAction({ payload }, { call, put }) {
      const res = yield call(getQuestionData, {type: store.get('testType')});
      if (res.resultCode === 200) {
        yield put({ type: 'setQuestionData', payload: res.data})
      }
    },
    *submitTestQuestionAction({ payload }, { call, put, select }) {
      let params = {
        results: yield select(state => state.results),
        userId: store.get('userId'),
        type: store.get('testType')
      }
      const res = yield call(submitQuestionResult, { ...params });
      return yield res;
    }
  },
  reducers: {
    setQuestionData(state, { payload }){
      state.questionDataList = payload
      if (payload.length > state.questionIndex) {
        console.log(111)
        state.questionData = payload[state.questionIndex]
        state.questionIndex ++
      }
      if (payload.length === state.questionIndex) {
        state.isLastQuestion = true
      }
      return { ...state }
    },
    updateQuestion(state, { payload }){
      const { question, selectItem } = payload
      state.results.push({
        subjectId: question.subjectId,
        selectItem: selectItem
      })
      if (state.questionDataList.length > state.questionIndex) {
        state.questionData = state.questionDataList[state.questionIndex]
        state.questionIndex ++
      }
      if (state.questionDataList.length === state.questionIndex) {
        state.isLastQuestion = true
      }
      return { ...state }
    }
  }
};
