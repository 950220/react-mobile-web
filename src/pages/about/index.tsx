import React from 'react';
import router from 'umi/router'
import { NavBar, Icon, WingBlank, WhiteSpace, Card, Toast } from 'antd-mobile';
import Image from '@/components/Image'
import styles from './index.less'
import copy from 'copy-to-clipboard';

const About: React.FC = (props) => {

  const copyAddress = () => {
    if (copy('https://github.com/950905/react-mobile-web')) {
      Toast.info('复制成功', 2)
    }
  }

  return (
    <div>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={router.goBack}
        rightContent={[]}
      >关于我们</NavBar>
      <div>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="开发"
              thumb={require('@/assets/images/username.png')}
            />
            <Card.Body>
              <div className={styles["list-item"]}>
                <label className={styles["title"]}>name</label>
                <span className={styles["content"]}>lws</span>
              </div>
              <div className={styles["list-item"]}>
                <label className={styles["title"]}>email</label>
                <span className={styles["content"]}>lws950905@163.com</span>
              </div>
              <div className={styles["list-item"]}>
                <label className={styles["title"]}>github</label>
                <span className={styles["content-1"]}><button className={styles["content-btn"]} onClick={copyAddress}>复制</button></span>
              </div>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="微信小程序"
              thumb={require('@/assets/images/username.png')}
            />
            <Card.Body>
              <Image src="/joke_wx.jpg"></Image>
            </Card.Body>
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    </div>
  )
}

export default About