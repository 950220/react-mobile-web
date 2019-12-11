import React from 'react';
import styles from './index.less';
import store from 'store';
import Redirect from 'umi/redirect';

const LoginLayout: React.FC = props => {
  const userId = store.get('userId');
  const token = store.get('token');
  return (
    userId && token ? 
    <Redirect to="/" />
    :
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default LoginLayout;
