import React from 'react';
import router from 'umi/router'
import { connect } from 'dva';
import { NavBar, Button } from 'antd-mobile';
import Icon from '@/components/Icon'
import styles from './index.less';
import Image from '@/components/Image'

const { UserInfoLoaderOw } = require('@/components/ContentLoader')

interface centerProps {
  userInfo: any,
  dispatch: any
}
interface IRouterPath {
  [key: string]: string
}
interface keyValueData {
  [key: string]: any
}

const Center: React.FC<centerProps> = (props: centerProps) => {
  const { userInfo, dispatch } = props

  const goToPath = (type: string) => {
    const routerPath: IRouterPath = {
      userInfo: '/usercenter/userInfo',
      history: '/usercenter/history',
      collect: '/usercenter/collect',
      integration: '/usercenter/integration',
      contactUs: '/usercenter/contactUs'
    }
    router.push(routerPath[type])
  }

  const loginOut = () => {
    dispatch({
      type: 'account/loginOutAction',
      payload: {}
    })
    window.location.href = '/m/'
  }
  return (
    <div className={styles["usercenter"]}>
      <NavBar
				mode="dark"
				icon={<Icon type="zuo-1" className="left-light-icon"/>}
				onLeftClick={router.goBack}
				rightContent={[
          <Icon
            key="1"
            type="icon_overseas_navbar_OnlineService"
            className={styles["right-header-icon"]}
            onClick={() => {goToPath('contactUs')}}
          />
        ]}
			>个人中心</NavBar>
      <div className={styles["usercenter-top"]}>
        <div className={styles["usercenter-top-info"]}>
          <Image src={userInfo.avatar ? `/avatar/${userInfo.avatar}` : require('@/assets/images/logo.jpg')} />
          <div className={styles["usercenter-top-info-text"]} onClick={() => { goToPath('userInfo') }}>
            <div>{userInfo.nickname ? userInfo.nickname : '游客33589'}</div>
            <div>{userInfo.intro ? userInfo.intro : '这个人很懒，什么都没留下...'}</div>
          </div>
          <div className={styles["usercenter-top-info-right"]} onClick={() => { goToPath('userInfo') }}>
            <Icon type="you-1" className={styles["right-icon"]}/>
          </div>
        </div>
      </div>
      <div className={styles["usercenter-content"]}>
        <div className={styles["usercenter-content-menu"]}>
          <div onClick={() => { goToPath('history') }}>
            <img src={require("@/assets/images/mI1.png")} />
            <div>测试记录</div>
          </div>
          <div onClick={() => { goToPath('collect') }}>
            <img src={require("@/assets/images/mI2.png")} />
            <div>收藏记录</div>
          </div>
          <div onClick={() => { goToPath('integration') }}>
            <img src={require("@/assets/images/mI3.png")} />
            <div>积分</div>
          </div>
        </div>
        <div className={styles["usercenter-content-loginout"]}>
          <Button type="primary" size="large" onClick={loginOut}>安全登出</Button>
        </div>
      </div>
    </div>
  )
}

export default connect(({ loading, account }: keyValueData) => ({
  loading,
  userInfo: account.userInfo
}))(Center)