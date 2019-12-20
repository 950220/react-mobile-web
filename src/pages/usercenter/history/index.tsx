import React, { useEffect } from 'react';
import { connect } from 'dva';
import router from 'umi/router'
import { NavBar } from 'antd-mobile';
import moment from 'moment';
import Icon from '@/components/Icon'
import styles from './index.less';

interface keyValueData {
  [key: string]: any
}

interface HistoryProps {
  loading: any,
  history: any,
  dispatch: any,
  userId: string
}

const History: React.FC<HistoryProps> = (props: HistoryProps) => {

  const { history, dispatch, userId } = props

  const titleTexT: keyValueData = {
    privity: '默契大作战',
    charm: '魅力值测试',
    safe: '安全感测试',
    anxiety: '焦虑测试'
  }

  useEffect(() => {
    dispatch({
      type: 'usercenter/getTestHistoryAction',
      payload: {
        params: {
          userId
        }
      }
    })
  }, [])

  const goToDetail = (id: number) => {
    router.push({
      pathname: '/test/result',
      query: {
        testId: id
      }
    })
  }
  return (
    <div className={styles["history-wrapper"]}>
      <NavBar
				mode="dark"
				icon={<Icon type="zuo-1" className={styles["left-icon"]}/>}
				onLeftClick={router.goBack}
				rightContent={[]}
			>测试记录</NavBar>
      <div className={styles["page-loadmore-wrapper"]}>
        {
          history.map((item: any, index: number) => {
            return (
              <div key={item.id} className={styles["history-content"]} onClick={() => {goToDetail(item.id)}}>
                <div className={styles["history-item"]}>
                  <div className={styles["history-item-title"]}><span>{titleTexT[item.testType]}</span></div>
                  <div className={styles["history-flex-row"]}>
                    <span className={styles["flex-1"]}>{moment(item.testTime).format('YYYY-MM-DD HH:mm')}</span>
                    <span className={styles["score-text"]}>{item.score}</span>
                  </div>
                </div>
                <Icon type="you-1" className={styles["right-icon"]}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default connect(({loading, usercenter, account}: keyValueData) => ({
  loading,
  history: usercenter.history,
  userId: account.userId
}))(History);