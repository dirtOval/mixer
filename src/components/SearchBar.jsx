import React, {useState} from 'react';
import SearchModal from './SearchModal.jsx';

const SearchBar = ({setVideoId}) => {

  const sample = {
    items: [
      {
        snippet: {
          title: 'im gay',
          description: 'dick dick dick dick dick',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/YLtEc-kvOqA/default.jpg'
            }
          }
        }
      }
    ]
  }
  
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(sample);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    fetch('https://www.googleapis.com/youtube/v3/search?' +
          new URLSearchParams({
            key: process.env.REACT_APP_API_KEY,
            part: 'id,snippet',
            q: search,
            maxResults: 5
          }))
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSearchResults(data);
        setModalOpen(true);
      })
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <form className="search-form" onSubmit={openModal}>
        <input className="search-bar" onChange={onChange} />
      </form>
      <SearchModal modalOpen={modalOpen}
                   closeModal={closeModal}
                   searchResults={searchResults}/>
    </>
  )
}

export default SearchBar;