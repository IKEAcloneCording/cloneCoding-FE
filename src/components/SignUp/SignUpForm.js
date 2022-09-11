import { React, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Postcode from '@actbase/react-daum-postcode';

const SignUpForm = () => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== ''
            ? `, ${data.buildingName}`
            : data.buildingName;
      }
      fullAddress +=
        extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">이름</label>
        <input id="name" type="text" />
      </form>
      <label htmlFor="address">주소</label>
      <input id="address" type="text" />
      <button type="button" onClick={handleClick}>
        주소찾기
      </button>
    </div>
  );
};

export default SignUpForm;
