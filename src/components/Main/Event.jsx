import React from 'react';
import styled from 'styled-components';
const Event = () => {
  return (
    <div>
      <EventTitle>진행 중인 이벤트 및 프로모션</EventTitle>
      <EventImg>
        <img src="img/event0.png" alt="event" />
        <img src="img/event1.png" alt="event" />
        <img src="img/event3.png" alt="event" />
        <img src="img/event2.png" alt="event" />
      </EventImg>
    </div>
  );
};
const EventImg = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 370px;
  }
`;
const EventTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 80px 0 30px 0;
`;
export default Event;
