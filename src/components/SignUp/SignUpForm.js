import { React, useState } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { api } from '../../shared/api';

const SignUpForm = () => {
  const open = useDaumPostcodePopup();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: '',
    phone_number: '',
    address: '',
    email: '',
    password: '',
  });

  const { name, phone_number, address, email, password } =
    inputValue;

  const handleInput = (e) => {
    const { id, value } = e.target;

    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  const isValidEmail =
    email.includes('@') && email.includes('.');

  const specialLetter = password.search(
    /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi
  );

  const isValidPassword =
    password.length >= 8 && specialLetter >= 1;

  const isValidInput =
    name.length >= 1 &&
    phone_number.length >= 1 &&
    address.length >= 1;

  const handleButtonValid = async (e) => {
    e.preventDefault();
    if (
      !isValidInput ||
      !isValidEmail ||
      !isValidPassword
    ) {
      alert('양식에맞게 채워주세요.');
      return;
    }
    try {
      await api.post(`/api/signup`, {
        data: {
          email,
          password,
          name,
          phone_number,
          address,
        },
      });
      alert('회원가입이 완료되었습니다.');
      console.log('inputValue2', inputValue);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Box>
      <Text>IKEA Family에 가입하시겠어요?</Text>
      <Form>
        <Label htmlFor="name">이름</Label>
        <Input
          id="name"
          type="text"
          onChange={handleInput}
          dafaultValue={name}
        />
        <Label htmlFor="phone_number">휴대폰</Label>
        <Input
          id="phone_number"
          type="tel"
          onChange={handleInput}
          defaultValue={phone_number}
        />
        <Label htmlFor="address">주소</Label>
        <Input
          id="address"
          type="text"
          onChange={handleInput}
          defaultValue={address}
        />
        <AddressBtn type="button" onClick={handleClick}>
          주소 찾기
        </AddressBtn>
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          onChange={handleInput}
          defaultValue={email}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          onChange={handleInput}
          defaultValue={password}
        />
        <SubmitBtn onClick={handleButtonValid}>
          가입 완료하기
        </SubmitBtn>
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
    background-color: #004f93;
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
