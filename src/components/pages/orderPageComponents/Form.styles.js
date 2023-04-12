import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;
export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 17fr 6fr;
  grid-gap: 10px;
  padding-top: 80px;
  margin-bottom: 120px;
  width: 100%;
  max-width: 1280px;
  padding-left: 60px;
  padding-right: 60px;
  border-radius: 16px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  margin: 0;
  max-width: 100%;
  margin-bottom: 70px;
  @media (max-width: 767px) {
    margin-bottom: 38px;
  }
`;
export const SelectWrapper = styled.div`
  height: 68px;
  margin-bottom: 30px;
`;
export const TextAreaWrapper = styled.div`
  width: 100%;
  max-width: 660px;
  position: relative;
`;
export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 660px;
  min-height: 200px;
  min-width: 100%;
  border-radius: 16px;
  border: ${({isFocused}) => (isFocused ? "solid 2px blue" : "solid 1px #eeeeee")};
  outline: none;
  padding: 20px 30px;
  margin-bottom: 25px;
`;
export const ChooseFileWrapper = styled.div`
  display: ${({show}) => (show ? "block" : "none")};
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  color: grey;
`;
export const ChooseFile = styled.input`
  display: none;
  overflow: visible;
`;
export const ChooseFileLabel = styled.label`
  color: #0068e4;
  cursor: pointer;
`;
export const InputWrapper = styled.div`
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1109px) {
    max-width: 500px;
  }
  @media (max-width: 767px) {
    max-width: 700px;
  }
`;
export const CustomInput = styled.input`
  width: 345px;
  height: 60px;
  border-radius: 8px;
  border: ${({isFocused}) => (isFocused ? "solid 2px blue" : "solid 1px #eeeeee")};
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.05px;
  margin: 0 0 30px;
  padding-left: 19px;
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.05px;
    color: #a0a1a4;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  height: 100%;
  padding-top: 108px;
  text-align: right;
  @media (max-width: 767px) {
    text-align: center;
    margin: 0 auto;
  }
`;
export const CloseButton = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  display: block;
  margin-left: auto;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  margin: 0;
  max-width: 100%;
  &:before {
    content: "";
    background: #1b2235;
    width: 32px;
    height: 4px;
    transform: rotate(-45deg);
    position: absolute;
    inset: 0;
    margin: auto;
  }
  &:after {
    content: "";
    background: #1b2235;
    width: 32px;
    height: 4px;
    transform: rotate(45deg);
    position: absolute;
    inset: 0;
    margin: auto;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ContentPrice = styled.div`
  display: inline-flex;
  align-items: flex-end;
`;
export const ContentPriceValue = styled.div`
  margin-left: auto;
  font-size: 60px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: -0.19px;
  text-align: right;
  color: #0068e4;
`;
export const ContentPriceCurrency = styled.div`
  color: #0068e4;
  margin-bottom: 13px;
`;
export const ContentData = styled.div`
  color: #0068e4;
  margin-bottom: 13px;
`;
export const SubmitButton = styled.button`
  width: 260px;
  display: block;
  margin-left: auto;
  text-align: center;
  color: #fff;
  text-decoration: none;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.05px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 7px 14px #00000029;
  background-color: #252e47;
  margin-top: 50px;
`;
