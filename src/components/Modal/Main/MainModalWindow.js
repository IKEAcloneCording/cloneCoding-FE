import React from 'react';
import './MainModalWindow.css';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';

function MainModalWindow({ open, close, header, content }) {
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open && (
        <section>
          <Sideheader>
            <CloseButton
              type="button"
              className="close"
              onClick={close}
            >
              <GrFormClose />
            </CloseButton>
          </Sideheader>
          <main>{content}</main>
        </section>
      )}
    </div>
  );
}
const Sideheader = styled.div`
background-color: #0058A3;
padding-top:30px;
`
const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border-radius: 100%;
  background-color: #fff;
  padding: 5px;
  margin-left: 370px;
  font-size: 30px;
  
`;

MainModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};
export default MainModalWindow;
