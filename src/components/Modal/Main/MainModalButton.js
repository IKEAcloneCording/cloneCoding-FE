import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainModalWindow from './MainModalWindow';
import styled from 'styled-components';
import { MdOutlinePersonOutline } from 'react-icons/md';

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
        <MdOutlinePersonOutline className="icon" />
        {buttonName}
      </Button>
      <MainModalWindow
        open={modalOpen}
        close={closeModal}
        header={title}
        content={content}
      >
      </MainModalWindow>
    </div>
  );
}

const Button = styled.button`
    height: 40px;
  border-radius: 40px;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0 10px 0 40px;
  display: flex;
  &:hover {
    background-color: #eee;
  }
   .icon {
    font-size: 22px;
    margin-right: 8px;
  }
`;

ModalButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default ModalButton;
