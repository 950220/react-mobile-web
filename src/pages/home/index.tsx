import React from 'react';
import router from 'umi/router'
import styles from './index.less'

interface IRouterPath {
  [key:string]: string
}
const Home: React.FC = (props) => {

  const goTo = (type: string) => {
    let routerPath:IRouterPath = {
      testMain: '/test/main',
      joke: '/joke',
      userCenter: '/userCenter'
    }
    router.push({
      pathname: routerPath[type]
    })
  }
  return (
    <div className={styles["home-content"]}>
      <div className={styles["content-top"]}>欢迎进入</div>
      <div className={styles["content-midden"]}>
        <div className={styles["content-item"]} onClick={() => {goTo('testMain')}}>
          <img src="../../assets/images/menuIcon4.png" />
          <div className={styles["content-item-title"]}>
            <div>进入测试</div>
            <div>更快更方便，省时省力</div>
          </div>
        </div>
        <div className={styles["content-item"] + " " + styles["mgtp"]} onClick={() => {goTo('joke')}}>
          <img src="../../assets/images/menuIcon7.png" />
          <div className={styles["content-item-title"]}>
            <div>每日幽默</div>
            <div>更快更方便，省时省力</div>
          </div>
        </div>
        <div className={styles["content-item"] + " " + styles["mgtp"]} onClick={() => {goTo('userCenter')}}>
          <img src="../../assets/images/menuIcon5.png" />
          <div className={styles["content-item-title"]}>
            <div>个人中心</div>
            <div>更快更方便，省时省力</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;