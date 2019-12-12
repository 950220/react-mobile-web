import React, { useState, useEffect } from 'react';
import router from 'umi/router'
import { Icon, NavBar, Toast } from 'antd-mobile'
import styles from './index.less'
import { getJokeData } from './service'
const { ContentLoaderOw } = require('@/components/ContentLoader')

const Joke: React.FC = (props) => {
  const [jokeList, setJokeList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const num: number = Math.floor(window.screen.height / 90)
  const listArr: number[] = new Array(num).fill(0)
  useEffect(() => {
    getJokeData().then((res: any) => {
      setIsLoading(false)
      if (res.resultCode === 200) {
        setJokeList(res.data)
      } else {
        Toast.info(res.errorDescription || '获取失败，请重试！', 3)
      }
    })
    .catch((err: any) => {
      setIsLoading(false)
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
      {
        isLoading ? 
        <>
        {
          listArr.map((item, index) => {
            return (
              <div className={styles["content-loader-item"]} key={index}>
                <ContentLoaderOw></ContentLoaderOw>
              </div>
            )
          })
        }
        </>
        :
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
      }
    </div>
  )
}

export default Joke;