import React, { useState } from 'react';
import router from 'umi/router'
import { NavBar, Button, Modal, Toast } from 'antd-mobile'
import Icon from '@/components/Icon'
import styles from './index.less'
import Iframe from 'react-iframe'
import { registerUser } from './service.js'
const alert = Modal.alert;

const Register: React.FC = props => {

  const [captchaUrl, setCaptchaUrl] = useState(`http://39.108.232.210:9165/member/captcha?${new Date().getTime()}`)
  const [checkTerm, setCheckTerm] = useState(false);
  const [showTerm, setShowTerm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  const register = () => {
    if (!username) {
      let warning = alert('提示', '请输入用户名', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    if (!password) {
      let warning = alert('提示', '请输入密码', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    if (!confirmPassword) {
      let warning = alert('提示', '请输入确认密码', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    if (password !== confirmPassword) {
      let warning = alert('提示', '两次输入的密码不一致', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    if (!captcha) {
      let warning = alert('提示', '请输入验证码', [
        { text: '知道了', onPress: () => {warning.close()}},
      ]);
      return
    }
    let params = {
      username,
      password,
      captcha
    }
    registerUser(params).then((res: any) => {
      if (res.resultCode === 200) {
        alert('提示', '注册成功', [
          { text: '返回登录', onPress: () => {router.goBack}},
        ]);
      } else {
        Toast.info(res.errorDescription || '注册失败', 3)
        setCaptchaUrl(`http://39.108.232.210:9165/member/captcha?${new Date().getTime()}`)
      }
    })
    .catch((err: any) => {
      Toast.info('注册失败!!请重试', 3)
      setCaptchaUrl(`http://39.108.232.210:9165/member/captcha?${new Date().getTime()}`)
    })
  }
  return (
    <div className={styles["register-content"]}>
      <NavBar
				mode="light"
				icon={<Icon type="zuo-1" className='left-icon'/>}
				onLeftClick={router.goBack}
				rightContent={[]}
      >
        注册
      </NavBar>
      <div className={styles["content"]}>
        <div className={styles["input-item"]}>
          <input placeholder="请输入用户名" onBlur={(e) => {setUsername(e.target.value)}}/>
        </div>
        <div className={styles["input-item"]}>
          <input placeholder="请输入密码" onBlur={(e) => {setPassword(e.target.value)}}/>
        </div>
        <div className={styles["input-item"]}>
          <input placeholder="请输入确认密码" onBlur={(e) => {setConfirmPassword(e.target.value)}}/>
        </div>
        <div className={styles["input-item"]}>
          <input placeholder="请输入验证码" onBlur={(e) => {setCaptcha(e.target.value)}}/>
          <img src={captchaUrl} onClick={() => {setCaptchaUrl(`http://39.108.232.210:9165/member/captcha?${new Date().getTime()}`)}}/>
        </div>
      </div>
      <div className={styles["register-term"]}>
        <Icon
          type={
            checkTerm ? "tiaokuanxuanzhong-" : "tiaokuanweixuanzhong-"
          }
          className={styles[checkTerm ? "m-radio-checked" : "m-radio"]}
          onClick={() => {setCheckTerm(!checkTerm)}}
        />
        同意服务使用协议 <a onClick={() => {setShowTerm(true)}}>用户注册协议</a>
      </div>
      <div className={styles["register-bottom"]}>
        <Button type="primary" size="small" className="btn-common" onClick={register} disabled={!checkTerm}>注册</Button>
      </div>
      <Modal
        closable
        transparent
        visible={showTerm}
        wrapClassName="term-wrap-modal"
        className="term-modal"
        onClose={() => {setShowTerm(false)}}
      >
        <>
          <Iframe url="" id="iframe" className={styles["iframe"]} />
        </>
      </Modal>
    </div>
  )
}

export default Register;