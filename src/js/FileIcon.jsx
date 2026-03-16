function getExtensionFromFilename(filename) {
  const sections = filename.split('.');
  return sections[sections.length - 1];
}


const className = (size) =>
  `file-icon${size === 'medium' || size === 'large' ? ` file-icon--${size}` : ''}`;


const Icon = ({
  file,
  size,
  filename,
}) => {
  const extension = filename && ! file ? getExtensionFromFilename(filename) : file;
  return (
    <div className={className(size)} data-file={extension.toLowerCase()} />
  );
};


export default Icon;
