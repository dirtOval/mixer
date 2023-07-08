import React, {useState} from 'react';
import SearchModal from './SearchModal.jsx';

const SearchBar = ({setVideoId}) => {
  
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState({});

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
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
                   closeModal={closeModal}/>
    </>
  )
}

export default SearchBar;