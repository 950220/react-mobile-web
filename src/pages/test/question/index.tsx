import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { NavBar, Icon, Button, Modal, Toast } from 'antd-mobile';
import styles from './index.less';
import Image from '@/components/Image'

interface QuestionProps {
  questionData: any,
  type: string,
  dispatch: any,
  isLastQuestion: boolean
}

interface keyValueData {
  [key: string]: any
}

const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const { questionData, dispatch, type, isLastQuestion } = props
  const [selectItem, setSelectItem] = useState('')
  const [showModal, setShowModal] = useState(false)
  const titleMap: keyValueData = {
    privity: '默契大作战',
    charm: '魅力值测试',
    safe: '安全感测试',
    anxiety: '焦虑测试'
  }
  useEffect(() => {
    dispatch({
      type: 'question/getQuestionDataAction',
      payload: {}
    })
  }, [])

  const next = () => {
    dispatch({
      type: 'question/updateQuestion',
      payload: {
        question: questionData,
        selectItem: selectItem
      }
    })
    if (isLastQuestion) {
      setShowModal(true)
      dispatch({
        type: 'question/submitTestQuestionAction',
        payload: {}
      })
      .then((res: any) => {
        setShowModal(false)
        if (res.resultCode === 200) {

        } else {
          Toast.info('测试失败,请重试！！！', 3)
        }
      })
      .catch((err: any) => {
        setShowModal(false)
        Toast.info('测试失败,请重试！！！', 3)
      })
    } else {
      setSelectItem('')
    }
  }

	return (
		<div className={styles["question-content"]}>
			<NavBar
				mode="dark"
				icon={<Icon type="left" />}
				onLeftClick={router.goBack}
				rightContent={[]}
      >
        { titleMap[type] }
      </NavBar>
			<div className={styles["content"]}>
				<div className={styles["top"]}></div>
				<div className={styles["question-content"]}>
					<div className={styles["question"]}>{questionData.question ? questionData.question : ''}</div>
					<div className={styles["question-tip"]}>选出最符合你的答案</div>
				</div>
			</div>
			<div className={styles["select-content"]}>
				<div className={styles["select-item"]} onClick={() => {setSelectItem('A')}}>
					<div className={styles["select-item-content"]}>{questionData.selectionA ? questionData.selectionA : ''}</div>
					<div className={selectItem === 'A' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>A</div>
				</div>
				<div className={styles["select-item"]} onClick={() => {setSelectItem('B')}}>
					<div className={styles["select-item-content"]}>{questionData.selectionB ? questionData.selectionB : ''}</div>
					<div className={selectItem === 'B' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>B</div>
				</div>
				<div className={styles["select-item"]} onClick={() => {setSelectItem('C')}}>
					<div className={styles["select-item-content"]}>{questionData.selectionC ? questionData.selectionC : ''}</div>
					<div className={selectItem === 'C' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>C</div>
				</div>
				<div className={styles["select-item"]} onClick={() => {setSelectItem('D')}}>
					<div className={styles["select-item-content"]}>{questionData.selectionD ? questionData.selectionD : ''}</div>
					<div className={selectItem === 'D' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>D</div>
				</div>
				<div className={styles["select-item"]} onClick={() => {setSelectItem('E')}}>
					<div className={styles["select-item-content"]}>{questionData.selectionE ? questionData.selectionE : ''}</div>
					<div className={selectItem === 'E' ? styles["select-item-tag"] + " " + styles["select-item-tag-select2"] : styles["select-item-tag"] + " " + styles["select-item-tag-select1"]}>E</div>
				</div>
			</div>
			<div className={styles["btn-content"]}>
				<Button type="primary" size="large" disabled={selectItem === ''} onClick={next}>{isLastQuestion ? '测试结果' : '下一题' }</Button>
			</div>
      <Modal
        transparent
        visible={showModal}
      >
        <>
          <Image src="/ABROADMOBILEWEB/images/flightLoading1.gif"></Image>
        </>
      </Modal>
		</div>
	)
}
export default connect(({ loading, question }:keyValueData) => ({
  loading,
  questionData: question.questionData,
  type: question.type,
  isLastQuestion: question.isLastQuestion
}))(Question);