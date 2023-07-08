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
              url: 'https://en.wikipedia.org/wiki/Cat#/media/File:Felis_catus-cat_on_snow.jpg'
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
    console.log(`Items in search: ${searchResults.items.length}`)
    setModalOpen(true);
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