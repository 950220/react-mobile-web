import React from 'react';
import router from 'umi/router'
import { NavBar, InputItem,  TextareaItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form';
import Icon from '@/components/Icon'
import styles from './index.less'

const ContactUs: React.FC = (props) => {
  const { getFieldProps } = props.form

  const submit = () => {
  }
  return (
    <div className={styles["content-wrapper"]}>
      <NavBar
				mode="light"
				icon={<Icon type="zuo-1" className="left-dark-icon"/>}
				onLeftClick={router.goBack}
				rightContent={[]}
			>联系我们</NavBar>
      <div className={styles["content"]}>
        <div className={styles["content-input"]}>
          <InputItem />
        </div>
        <div className={styles["content-textarea"]}>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '',
            })}
            rows={5}
            count={100}
          />
        </div>
        <div className={styles["contact-bottom"]}>
          <Button type="primary" size="small" className="btn-common" onClick={submit} >提交</Button>
        </div>
      </div>
    </div>
  )
}
export default createForm()(ContactUs);