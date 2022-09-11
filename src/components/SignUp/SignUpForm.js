import { React } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';

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
    <Box>
      <Text>IKEA Family에 가입하시겠어요?</Text>
      <Form>
        <Label htmlFor="name">이름</Label>
        <Input id="name" type="text" required />
        <Label htmlFor="tel">휴대폰</Label>
        <Input id="tel" type="tel" required />
        <Label htmlFor="address">주소</Label>
        <Input id="address" type="text" required />
        <AddressBtn type="button" onClick={handleClick}>
          주소 찾기
        </AddressBtn>
        <Label htmlFor="email">이메일</Label>
        <Input id="email" type="email" required />
        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" type="password" required />
        <SubmitBtn>가입 완료하기</SubmitBtn>
      </Form>
    </Box>
  );
};

const SubmitBtn = styled.button`
  width: 100%;
  height: 56px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color: black;
  border-radius: 64px;
  &:hover {
    background-color: #333;
  }
`;

const AddressBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: #0058a3;
  color: white;
  padding: 0 32px;
  border-radius: 64px;
  width: 144px;
  height: 56px;
  margin-bottom: 32px;
  &:hover {
    background-color: #014785;
  }
`;

const Label = styled.label`
  margin-bottom: 2px;
  font-size: 14px;
`;

const Form = styled.form`
  width: 448px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  width: 100%;
  height: 3rem;
  padding: 0 8px;
  font-size: 0.875rem;
  margin-bottom: 32px;
`;

const Text = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Box = styled.div`
  padding: 2rem 5rem;
`;

export default SignUpForm;
