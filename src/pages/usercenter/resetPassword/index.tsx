import React, { useState } from 'react';
import router from 'umi/router'
import styles from './index.less';
import { NavBar, Button, Toast, Modal } from 'antd-mobile';
import Icon from '@/components/Icon'
import { resetPassword } from './service.js'
const alert = Modal.alert

const ResetPassword: React.FC = props => {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const changePass = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Toast.info('请输入密码信息', 3);
      return
    }
    if (newPassword !== confirmPassword) {
      Toast.info('两次输入的密码不一致，请检查', 3);
      return
    }
    let params = {
      oldPassword,
      newPassword,
      confirmPassword
    }
    resetPassword(params).then((res: any) => {
      if (res.resultCode === 200) {
        alert('提示', '密码重置成功',[
          { text: '知道了', onPress: () => {router.goBack}}
        ])
      } else {
        Toast.info(res.errorDescription || '密码重置失败', 3);
      }
    })
    .catch((err: any) => {
      Toast.info('密码重置失败', 3);
    })
  }
  return (
    <div className={styles["changePass-content"]}>
      <NavBar
				mode="light"
				icon={<Icon type="zuo-1" className='left-icon'/>}
				onLeftClick={router.goBack}
				rightContent={[]}
      >
        重置密码
      </NavBar>
      <div className={styles["content"]}>
        <div className={styles["input-item"]}>
          <input placeholder="请输入旧密码" onBlur={(e) => {setOldPassword(e.target.value)}}/>
        </div>
        <div className={styles["input-item"]}>
          <input placeholder="请输入新密码" onBlur={(e) => {setNewPassword(e.target.value)}}/>
        </div>
        <div className={styles["input-item"]}>
          <input placeholder="请输入确认密码" onBlur={(e) => {setConfirmPassword(e.target.value)}}/>
        </div>
      </div>
      <div className={styles["changePass-bottom"]}>
        <Button type="primary" size="small" className="btn-common" onClick={changePass}>重置密码</Button>
      </div>
    </div>
  )
}

export default ResetPassword;