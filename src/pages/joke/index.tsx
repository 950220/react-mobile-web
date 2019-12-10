import React, { useState, useEffect } from 'react';
import router from 'umi/router'
import { Icon, NavBar, Toast } from 'antd-mobile'
import styles from './index.less'
import { getJokeData } from './service'

const Joke: React.FC = (props) => {
  const [jokeList, setJokeList] = useState([])

  useEffect(() => {
    getJokeData().then((res: any) => {
      if (res.resultCode === 200) {
        setJokeList(res.data)
      } else {
        Toast.info(res.errorDescription || '获取失败，请重试！', 3)
      }
    })
    .catch((err: any) => {
      Toast.info('获取失败，请重试！', 3)
    })
  }, [])
  
  return (
    <div className={styles["joke-page"]}>
      <NavBar
				mode="dark"
				icon={<Icon type="left" />}
				onLeftClick={router.goBack}
				rightContent={[]}
      >
        幽默笑话
      </NavBar>
      <div className={styles["joke-list"]}>
        {
          jokeList&&jokeList.map((item, index) => {
            return (
              <div className={styles["joke-item"]} key={index}>
                <div className={styles["joke-item-text"]}>{ item.content }</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Joke;