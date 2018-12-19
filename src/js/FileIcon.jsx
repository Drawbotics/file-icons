import React from 'react';

import '../css/style.less';


const Icon = ({ file }) => {
  return (
    <div className="file-icon" data-file={file} />
  );
};


export default Icon;
