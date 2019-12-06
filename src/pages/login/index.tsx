import React ,{ useState,useReducer } from 'react';
import router from 'react-router'
import { connect } from "dva";
import styles from './index.less';
import { Button, Modal } from 'antd-mobile';
const alert = Modal.alert;

interface LoginProps {
  dispatch: Function
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = props

  const login = () => {
    if (!username) {
      let warning = alert('警告', '请输入用户名', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    if (!password) {
      let warning = alert('警告', '请输入密码', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    let params = {
      username,
      password
    }
    setLoading(true)
    dispatch({
      type: 'account/loginAction',
      payload: {
        params: params,
        success: () => {
          setLoading(false)
          router.replace({
            pathName: '/home'
          })
        },
        fail:(res: any) => {
          setLoading(false)
          let warning = alert('警告', res.errorDescription, [
            { text: '重试', onPress: () => {warning.close()}},
          ]);
        }
      }
    })
  }
  return (
    <div className={styles["login-content"]}>
      <div className={styles["login-top"]}>
        <div className={styles["lg-frtit"]}>账户登录</div>
      </div>
      <div className={styles["lg-form"]}>
        <div className={styles["lg-formc"]}>
          <div className={styles["lg-formc-item"] + " " + styles["icon-username"]}>
            <input type="text" name="username"  placeholder="请输入您的用户名" onBlur={(e) => {setUsername(e.target.value)}}/>
          </div>
          <div className={styles["lg-formc-item"] + " " + styles["icon-password"]}>
            <input name="password" v-model="loginForm.password" placeholder="请输入您的密码" onBlur={(e) => {setPassword(e.target.value)}}/>
          </div>
        </div>
      </div>
      <div className={styles["login-bottom"]}>
        <div className={styles["login-btn"]}>
          <Button type="primary" size="small" className="btn-common" onClick={login} loading={loading}>{loading ? '登录中...' : '登录'}</Button>
        </div>
        <div className={styles["forgetpaw"]}>
          <div>去注册</div>
          <div>忘记密码</div>
        </div>
        <div className={styles["lg-third"]}>
          <div className={styles["lg-third-title"]}>———————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;———————</div>
        </div>
      </div>
    </div>
  )
}
export default connect(({ loading }) => ({
  loading
}))(Login);