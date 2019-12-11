import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Toast } from 'antd-mobile'
import Redirect from 'umi/redirect';

interface basicProps {
  userId: string,
  token: string,
  dispatch: any,
  children: any
}
interface keyValueData {
  [key: string]: any
}
const BasicLayout: React.FC<basicProps> = (props: basicProps) => {
  const { userId, token, dispatch } = props
  console.log(userId, token)
  useEffect(() => {
    if (userId && token) {
      dispatch({
        type: 'account/getUserInfoAction',
        payload: {
          params: { userId },
          loginExpired: () => {
            Toast.info('登录已过期，请重新登录', 1)
          },
          fail: () => {
            Toast.info('获取用户信息失败，请重试', 1)
          }
        }
      })
    }
  }, [])
  return (
    userId && token ? 
    <div className={styles.normal}>
      {props.children}
    </div>
    :
    <Redirect to="/member/login" />
  );
};

export default connect(({ loading, account}: keyValueData) => ({
  loading,
  account,
  userId: account.userId,
  token: account.token
}))(BasicLayout);
