import React from 'react';
import Modal from 'react-modal';

const SearchModal = (props) => {

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
       isOpen={props.modalOpen}
       onRequestClose={props.closeModal}
       style={modalStyles}
       contentLabel={'Search'}>
        <button onClick={props.closeModal}>close</button>
        <h1>OH YEAH ITS SEARCHING TIME</h1>
      </Modal>
  )
}

export default SearchModal;