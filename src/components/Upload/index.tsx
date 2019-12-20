import React, { useState, useRef } from 'react';
import axios from "axios";
import styles from './index.less';

interface UploadProps {
  before?: () => void;
  success?: (res: any) => void;
  error?: () => void;
  url: string;
}

const Upload: React.FC<UploadProps> = props => {

  const [isUploading, setIsUploading] = useState(false)

  const inputRef: any = useRef({})
  const formRef: any = useRef({})

  const inputChange = () => {
    if (isUploading) {
      return
    }
    // 判断是否是清空触发的change
    console.log(inputRef)
    if (inputRef&&inputRef.current.files.length === 0) {
      return
    }
    doInputUpload()
  }

  const doInputUpload = () => {
    setIsUploading(true)
    if (props.before) {
      props.before()
    }
    const formData = new FormData(formRef.current)
    axios({
      url: props.url,
      method: 'post',
      data: formData,
      withCredentials: true
    })
    .then((res: any) => {
      const data = res.data
      setIsUploading(false)
      if (data.resultCode === 200) {
        if (props.success) {
          props.success(data)
        }
      } else {
        if (props.error) {
          props.error()
        }
      }
      formRef.current.reset()
    })
    .catch(res => {
      setIsUploading(false)
      if (props.error) {
        props.error()
      }
      formRef.current.reset()
    })
  }
  return (
    <div className={styles["upload__warpper"]}>
      <div className={styles["upload"]}>
        <form ref={formRef} className={styles["upload-form"]}>
          <input ref={inputRef} onChange={inputChange} className={styles["upload-btn"]} type="file" name="Filedata" accept="image/jpeg,image/gif,image/png,image/jpg" />
        </form>
      </div>
    </div>
  )
}
export default Upload;