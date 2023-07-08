import React, {useState} from 'react';
import Modal from 'react-modal';

const SearchBar = ({setVideoId}) => {

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
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
      <form onSubmit={openModal}>
        <input className="search-bar" onChange={onChange} />
      </form>
      <Modal 
       isOpen={modalOpen}
       onRequestClose={closeModal}
       style={modalStyles}
       contentLabel={'Search'}>
        <button onClick={closeModal}>close</button>
        <h1>OH YEAH ITS SEARCHING TIME</h1>
      </Modal>
    </>
  )
}

export default SearchBar;