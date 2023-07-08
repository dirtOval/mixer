import React from 'react';

const SearchResult = ({result}) => {

  return (
    <div className="search-result">
      <img src={result.snippet.thumbnails.default.url} />
      <h3>{result.snippet.title}</h3>
      <p>{result.snippet.description}</p>
    </div>
  )
}

export default SearchResult;