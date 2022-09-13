import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from './ModalWindow';
import styled from 'styled-components';

function ModalButton({ buttonName, title, content }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={openModal}>
        {buttonName}
      </Button>
      <ModalWindow
        open={modalOpen}
        close={closeModal}
        header={title}
        content={content}
      >
        {' '}
      </ModalWindow>
    </div>
  );
}

const Button = styled.button`
  text-decoration: underline;
`;

ModalButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default ModalButton;
