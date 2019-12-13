import React, { useState } from 'react';
import { connect } from 'dva';
import { NavBar, Icon, Tag } from 'antd-mobile';
import styles from './index.less';
import router from 'umi/router';

interface ResultProps {
  userInfo: any
}

interface keyValueData {
  [key: string]: any
}

const Result: React.FC<ResultProps> = (props: ResultProps) => {

  const { userInfo } = props

  const [resultList, setResultList] = useState([])
  const [tagList, setTagList] = useState([])

  const leftClick = () => {
    router.goBack()
  }

  return (
    <div className={styles["result-content"]}>
      <NavBar
				mode="dark"
				icon={<Icon type="left" />}
				onLeftClick={leftClick}
				rightContent={[]}
			>测试结果</NavBar>
      <div className={styles["top"]}></div>
      <div className={styles["content"]}>
        <div className={styles["content-header"]}>
          <img src="" />
          <div className={styles["content-header-right"]}>
            <div className={styles["content-header-right-top"]}>
              <div></div>
              <div>{userInfo.nickname}</div>
              <div style={{"clear": "both"}}></div>
            </div>
            <div className={styles["tag-content"]}>
              {
                tagList.map((item: any) => {
                  return (
                    <Tag key={item.tagName}>{item.tagName}</Tag>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className={styles["content-layout-data"]}>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>外向</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>内向</div>
          </div>
          <div className={styles["content-layout-empty-item"]}>
            <div className={styles["content-layout-empty-tp"]}>  </div>
            <div></div>
            <div className={styles["content-layout-empty-dn"]}>  </div>
          </div>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>追求</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>知足</div>
          </div>
          <div className={styles["content-layout-empty-item"]}>
            <div className={styles["content-layout-empty-tp"]}>  </div>
            <div></div>
            <div className={styles["content-layout-empty-dn"]}>  </div>
          </div>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>自主</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>通融</div>
          </div>
          <div className={styles["content-layout-empty-item"]}>
            <div className={styles["content-layout-empty-tp"]}>  </div>
            <div></div>
            <div className={styles["content-layout-empty-dn"]}>  </div>
          </div>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>亲密</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>独立</div>
          </div>
          <div className={styles["content-layout-empty-item"]}>
            <div className={styles["content-layout-empty-tp"]}>  </div>
            <div></div>
            <div className={styles["content-layout-empty-dn"]}>  </div>
          </div>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>随性</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>计划</div>
          </div>
          <div className={styles["content-layout-empty-item"]}>
            <div className={styles["content-layout-empty-tp"]}>  </div>
            <div></div>
            <div className={styles["content-layout-empty-dn"]}>  </div>
          </div>
          <div className={styles["content-layout-data-item"]}>
            <div className={styles["content-layout-data-item-tp"]}>融入</div>
            <div></div>
            <div className={styles["content-layout-data-item-dn"]}>独处</div>
          </div>
        </div>
        <div className={styles["content-layout-word"]}>
          {
            resultList.map((item: any, index: number) => {
              return (
                <div className={styles["content-layout-word-other-item"]}>
                  <div></div>
                  <div><span>{index + 1}.</span>{item.resultText}</div>
                  <div style={{"clear": "both"}}></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default connect(({ loading, account }: keyValueData) => ({
  loading,
  userInfo: account.userInfo
}))(Result);