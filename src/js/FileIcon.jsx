import React from 'react';
import cn from 'classnames';

import '../css/style.less';


function getExtensionFromFilename(filename) {
  const sections = filename.split('.');
  return sections[sections.length - 1];
}


const className = (props) => cn('file-icon', {
  'file-icon--medium': props.size === 'medium',
  'file-icon--large': props.size === 'large',
});


const Icon = ({
  file,
  size,
  filename,
}) => {
  const extension = filename && ! file ? getExtensionFromFilename(filename) : file;
  return (
    <div className={className({ size })} data-file={extension.toLowerCase()} />
  );
};


export default Icon;
