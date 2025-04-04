const renderDescription = (text) => {
  if (!text) return <span>No description available</span>; 
  return text.split('\n').map((line, index) => (
    <span key={index}>{line}<br /></span>
  ));
};

export { renderDescription };
