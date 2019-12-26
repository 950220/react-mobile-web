import React from 'react';
import router from 'umi/router'
import { NavBar } from 'antd-mobile'
import Icon from '@/components/Icon'
import styles from './index.less'

const ContactUs: React.FC = (props) => {
  return (
    <div>
      <NavBar
				mode="light"
				icon={<Icon type="zuo-1" className="left-dark-icon"/>}
				onLeftClick={router.goBack}
				rightContent={[]}
			>联系我们</NavBar>
    </div>
  )
}
export default ContactUs;