import React from 'react';
import router from 'umi/router';
import { SearchBar, NavBar, Icon } from 'antd-mobile';
import styles from './index.less';
import router from 'umi/router';
import store from 'store';

const Main: React.FC = (props) => {

	const goTo = (type: string) => {
		store.set('testType', type)
		router.push({
			pathname: '/test/question'
		})
	}
	return (
		<div className={styles["main-content"]}>
			<NavBar
				mode="light"
				icon={<Icon type="left" />}
				onLeftClick={router.goBack}
				rightContent={[]}
			>NavBar</NavBar>
			<SearchBar placeholder="请输入测试题目" />
			<div className={styles["top-content"]}>
				<span>精选测试</span>
				<span>查看全部</span>
			</div>
			<div className={styles["home-page"]}>
				<div className={styles["list-item"] + " " + styles["bg-1"]} onClick={() => {goTo('anxiety')}}>
					<div className={styles["item-left-content"]}>
						<div className={styles["lf-content-title"]}>默契大作战</div>
						<div className={styles["lf-content-count"]}>666888人已测</div>
						<div className={styles["lf-content-btn"]}>开始测试</div>
					</div>
					<div className={styles["item-right-content"]}>免费</div>
				</div>
				<div className={styles["list-item"] + " " + styles["bg-2"]} onClick={() => {goTo('charm')}}>
					<div className={styles["item-left-content"]}>
						<div className={styles["lf-content-title"]}>魅力值测试</div>
						<div className={styles["lf-content-count"]}>666888人已测</div>
						<div className={styles["lf-content-btn"]}>开始测试 > </div>
					</div>
					<div className={styles["item-right-content"]}>免费</div>
				</div>
				<div className={styles["list-item"] + " " + styles["bg-3"]} onClick={() => {goTo('safe')}}>
					<div className={styles["item-left-content"]}>
						<div className={styles["lf-content-title"]}>安全感测试</div>
						<div className={styles["lf-content-count"]}>666888人已测</div>
						<div className={styles["lf-content-btn"]}>开始测试 > </div>
					</div>
					<div className={styles["item-right-content"]}>免费</div>
				</div>
				<div className={styles["list-item"] + " " + styles["bg-4"]} onClick={() => {goTo('privity')}}>
					<div className={styles["item-left-content"]}>
						<div className={styles["lf-content-title"]}>焦虑测试</div>
						<div className={styles["lf-content-count"]}>666888人已测</div>
						<div className={styles["lf-content-btn"]}>开始测试 > </div>
					</div>
					<div className={styles["item-right-content"]}>免费</div>
				</div>
			</div>
		</div>
	)
}
export default Main;