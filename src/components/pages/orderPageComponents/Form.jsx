import {
  FormContainer,
  FormWrapper,
  RightSide,
  LeftSide,
  Title,
  CloseButton,
  TextAreaWrapper,
  TextArea,
  ChooseFileWrapper,
  ChooseFile,
  ContentPrice,
  ContentPriceValue,
  ContentPriceCurrency,
  ChooseFileLabel,
  CustomInput,
  SubmitButton,
  InputWrapper,
  SelectWrapper,
  ContentData,
} from "./Form.styles";
import { customStyles } from "./Select";
import Select from "react-select";
import { useState, useEffect } from "react";
import "./Form.css";
import { calcDeadline, calcPrice, calcTime } from "./Logic";
import MyInput from "./Input";
import { validateFields } from "./Validation";

const workTypeOptions = [
  {
    value: "edit",
    label: "Редагування",
  },
  {
    value: "translate",
    label: "Переклад",
  },
];

const editOptions = [
  { value: "ua", label: "Українська" },
  { value: "ru", label: "Російська" },
  { value: "en", label: "Англійська" },
  { value: "engNative", label: "Англійська (носій)" },
];

const translateOptions = [
  { value: "ukr/ruToEn", label: "Українська/російська — англійська" },
  { value: "enToUkr", label: "Англійська — українська" },
  { value: "enToRu", label: "Англійська — російська" },
  { value: "ruToUkr", label: "Російська — українська" },
  { value: "ukrToRu", label: "Українська — російська" },
];

const Order = () => {
  const [editType, setEditType] = useState(null);
  const [langOptions, setLangOtions] = useState([]);
  const [text, setText] = useState("");
  const [lang, setLang] = useState(null);
  const [mimetype, setMimetype] = useState("other");
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState("");
  const [isFocusedTextArea, setIsFocusedTextArea] = useState(false);
  // validation
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleWorkTypeSelect = (option) => {
    setEditType(option);
    if (option.value == "edit") setLangOtions(editOptions);
    if (option.value == "translate") setLangOtions(translateOptions);
  };

  const getPrice = () => {
    if (!editType || !lang || text.length == 0) return;
    const calculatedPrice = calcPrice(lang.value, mimetype, text.length);
    setPrice(Number(calculatedPrice.toFixed(2)));
    const timeForWork = calcTime(lang.value, mimetype, text.length);
    const deadline = calcDeadline(timeForWork, Date.now());
    setTime(deadline.deadlineDate);
  };

  useEffect(() => {
    getPrice();
  }, [text, lang]);

  return (
    <FormContainer>
      <FormWrapper>
        <RightSide>
          <Title>Замовити переклад або редагування</Title>
          <SelectWrapper>
            <Select
              placeholder={"Послуга"}
              defaultValue={null}
              onChange={handleWorkTypeSelect}
              options={workTypeOptions}
              components={{ IndicatorSeparator: () => null }}
              className="select_input"
              styles={customStyles}
            ></Select>
          </SelectWrapper>
          <TextAreaWrapper>
            <TextArea
              onChange={(e) => setText(e.target.value)}
              value={text}
              onFocus={() => setIsFocusedTextArea((prev) => !prev)}
              onBlur={() => setIsFocusedTextArea(false)}
              isFocused={isFocusedTextArea}
            />
            <ChooseFileWrapper show={text.length > 0 ? false : true}>
              Введіть текст або&nbsp;
              <ChooseFileLabel>
                завантажте файл
                <ChooseFile
                  type="file"
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
                />
              </ChooseFileLabel>
            </ChooseFileWrapper>
          </TextAreaWrapper>
          <InputWrapper>
            <MyInput
              value={email}
              onChange={setEmail}
              placeholder={"Ваша електронна пошта"}
            ></MyInput>
            <MyInput
              value={name}
              onChange={setName}
              placeholder={"Ваше ім'я"}
            ></MyInput>
            <MyInput placeholder={"Коментар або покликання"}></MyInput>
            <SelectWrapper>
              <Select
                onChange={setLang}
                placeholder={"Мова"}
                components={{ IndicatorSeparator: () => null }}
                className="select_input"
                styles={customStyles}
                options={langOptions}
              ></Select>
            </SelectWrapper>
          </InputWrapper>
        </RightSide>
        <LeftSide>
          <CloseButton></CloseButton>
          <ContentPrice>
            <ContentPriceValue>{price}</ContentPriceValue>
            <ContentPriceCurrency>грн</ContentPriceCurrency>
          </ContentPrice>
          <ContentData>{time}</ContentData>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              const validationResult = validateFields(email, name);
              if (!validationResult.email.valid) alert("Invalid email");
              if (!validationResult.name.valid) alert("Invalid name");
              if (validationResult.email.valid && validationResult.name.valid) {
                setEmail("");
                setName("");
                setText("");
                setTime("");
                setPrice(0);
                alert("Form submitted!");
              }
            }}
          >
            Замовити
          </SubmitButton>
        </LeftSide>
      </FormWrapper>
    </FormContainer>
  );
};

export default Order;
