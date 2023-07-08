import React from 'react';
import Modal from 'react-modal';
import SearchResult from './SearchResult.jsx';

const SearchModal = ({modalOpen, closeModal, searchResults}) => {

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

  return (
    <Modal 
       isOpen={modalOpen}
       onRequestClose={closeModal}
       style={modalStyles}
       contentLabel={'Search'}>
        <button onClick={closeModal}>close</button>
        {searchResults.items.map((result, idx) => (
          <SearchResult result={result} key={idx} />
        ))})
      </Modal>
  )
}

export default SearchModal;