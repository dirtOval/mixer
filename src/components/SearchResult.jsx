import React from 'react';

const SearchResult = ({result, setVideoId, closeModal}) => {

  const onClick = (e) => {
    setVideoId(result.id.videoId);
    closeModal();
  }

  return (
    <div className="search-result" onClick={onClick}>
      <img src={result.snippet.thumbnails.default.url} />
      <h3>{result.snippet.title}</h3>
      <p>{result.snippet.description}</p>
    </div>
  )
}

export default SearchResult;