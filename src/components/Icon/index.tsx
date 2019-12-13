import React from 'react';

interface IconProps {
  type: string;
  className?: string;
  onClick?: () => void;
}
const Icon:  React.FC<IconProps> = (props: IconProps) =>{
  const { type, className, onClick } = props
  const onIconClick = () => {
    onClick&&onClick()
  }
  return <i className={`bbqIconFont bbq-${type} ${className}`} onClick={onIconClick}/>
}
export default Icon;