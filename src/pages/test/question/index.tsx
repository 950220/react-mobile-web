import React from 'react';
import router from 'umi/router';
import { NavBar, Icon, Button } from 'antd-mobile';
import styles from './index.less';

interface QuestionProps {
	questionData: any,
	selectItem: string
}

const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
	const { questionData, selectItem } = props
	return (
		<div className={styles["question-content"]}>
			<NavBar
				mode="light"
				icon={<Icon type="left" />}
				onLeftClick={router.goBack}
				rightContent={[]}
			>NavBar</NavBar>
			<div className={styles["content"]}>
				<div className={styles["top"]}></div>
				<div className={styles["question-content"]}>
					<div className={styles["question"]}>{questionData.question}</div>
					<div className={styles["question-tip"]}>选出最符合你的答案</div>
				</div>
			</div>
			<div className={styles["select-content"]}>
				<div className={styles["select-item"]}>
					<div className={styles["select-item-content"]}>{questionData.selectionA}</div>
					<div className={selectItem === 'A' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>A</div>
				</div>
				<div className={styles["select-item"]}>
					<div className={styles["select-item-content"]}>{questionData.selectionB}</div>
					<div className={selectItem === 'B' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>B</div>
				</div>
				<div className={styles["select-item"]}>
					<div className={styles["select-item-content"]}>{questionData.selectionC}</div>
					<div className={selectItem === 'C' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>C</div>
				</div>
				<div className={styles["select-item"]}>
					<div className={styles["select-item-content"]}>{questionData.selectionD}</div>
					<div className={selectItem === 'D' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>D</div>
				</div>
				<div className={styles["select-item"]}>
					<div className={styles["select-item-content"]}>{questionData.selectionE}</div>
					<div className={selectItem === 'E' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>E</div>
				</div>
			</div>
			<div className={styles["btn-content"]}>
				<Button type="primary" size="large" disabled={selectItem === ''}>下一题</Button>
			</div>
		</div>
	)
}
export default Question;