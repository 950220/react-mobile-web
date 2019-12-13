import React from 'react';
import { connect } from 'dva';
import router from 'umi/router'
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.less'

interface UserInfoProps {
  userInfo: any,
  account: any,
  dispatch: any
}

interface keyValueData {
  [key: string]: any
}

const UserInfo: React.FC<UserInfoProps>= props => {

  const { dispatch, userInfo } = props

  const changePass = () => {
    router.push('/usercenter/changePassword')
  }
  return (
    <div className={styles["userinfo"]}>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={router.goBack}
        rightContent={[]}
      >个人资料</NavBar>
      <div className={styles["userinfo-content"]}>
        <div className={styles["userinfo-content-avatar"]}>
          <span>头像</span>
          <div className={styles["userinfo-content-avatar-right"]}>
            <div className={styles["userinfo-content-avatar-right-upload"]}>
              <div className={styles["userinfo-content-avatar-right-box"]}>
                <img src={userInfo.avatar ? userInfo.avatar : require('@/assets/images/logo.jpg')} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["userinfo-content-nickname"]}>
          <span>昵称</span>
          <div className={styles["userinfo-content-nickname-right"]}>
            {
              userInfo.nickname ? 
              <span>{userInfo.nickname}</span>
              :
              <span>未填写</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-sex"]}>
          <span>性别</span>
          <div className={styles["userinfo-content-sex-right"]}>
            {
              userInfo.sex ? 
              <span>{userInfo.sex}</span>
              :
              <span>未知</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-brithday"]}>
          <span>出生日期</span>
          <div className={styles["userinfo-content-brithday-right"]}>
            {
              userInfo.birthday ? 
              <span>{userInfo.birthday}</span>
              :
              <span>未填写</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-worker"]}>
          <span>职业</span>
          <div className={styles["userinfo-content-worker-right"]}>
            {
              userInfo.profession ? 
              <span>{userInfo.profession}</span>
              :
              <span>未填写</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-qq"]}>
          <span>QQ</span>
          <div className={styles["userinfo-content-qq-right"]}>
            {
              userInfo.qq ? 
              <div>{userInfo.qq}</div>
              :
              <span>绑定</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-wechat"]}>
          <span>微信</span>
          <div className={styles["userinfo-content-wechat-right"]}>
            {
              userInfo.wx ? 
              <div>{userInfo.wx}</div>
              :
              <span>绑定</span>
            }
          </div>
        </div>
        <div className={styles["userinfo-content-pass"]}>
          <span>密码</span>
          <div className={styles["userinfo-content-pass-right"]}>
            <span onClick={changePass}>修改</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(({ loading, account}: keyValueData) => ({
  loading,
  account,
  userInfo: account.userInfo
}))(UserInfo);