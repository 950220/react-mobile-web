import React from 'react';
import { staticUrl } from '@/config.js';
interface ImageProps {
  src: string;
  className?: string;
}
const Image:  React.FC<ImageProps> = (props: ImageProps) =>{
  const { src, className } = props;
  return <img className={className} src={`${staticUrl}${src}`}/>;
}
export default Image;