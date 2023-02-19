import React from "react";
import { useState } from "react";
import Banner from "../../components/Banner";
import contactBg from "../../image/contactBg.png";
import RadioInput from "../../components/RadioInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function QuoteContact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    accountNumber: "",
    request: "",
  });

  const { name, company, phone, email, accountNumber, request } = form;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [tie, setTie] = React.useState();
  const [fabric, setFabric] = React.useState();
  const [design, setDesign] = React.useState();
  const [label, setLabel] = React.useState();
  const [box, setBox] = React.useState();
  const [account, setAccount] = React.useState();

  const fileInput = React.useRef<any>(null);
  const [designFile, setDesignFile] = useState();

  const handleButtonClick = (e: any) => {
    fileInput.current.click();
  };
  const handleChange = (e: any) => {
    setDesignFile(e.target.files[0]);
  };

  const radioData = { tie, fabric, design, label, box, account };
  let today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var hours = today.getHours();
  var minuutes = today.getMinutes();
  var dateString = year + "-" + month + "-" + day + "-" + hours + "-" + minuutes;
  console.log(radioData);
  const onSubmit = async () => {
    navigate("/");
    try {
      //응답 성공
      const response = await axios.post("http://localhost:8080/data", {
        //보내고자 하는 데이터
        ...radioData,
        ...form,
        date: dateString,
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  };

  return (
    <>
      {/* 소개 시작 */}
      <div className="wrap">
        <Banner
          img={contactBg}
          title="견적문의"
          p1="영선산업에서 제공하는 최상의 품질과 기술력을 경험해보세요."
          p2="문의를 남겨주시면 최대한 빠르게 답변드리겠습니다."
          contact={true}
        />
        {/* 본문 시작 */}
        <div className=" pt-10 ms:pt-16 md:pb-48 sm:pb-32 pb-16 px-3.5 xl:px-0 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="bg-gray-100 py-5 px-6 md:px-16 mb-8 rounded-md">
            <p className="font-semibold mb-2">
              정보 작성 및 이미지 첨부 후 문의하기 버튼을 누르시면 견적서가 발송됩니다.
            </p>
            <p>
              디자인파일 또는 로고, 그 외 참조파일은 40MB까지 첨부 가능합니다. 40MB를 초과하는 경우{" "}
              <a
                className="font-light bg-opacity-80 text-white bg-blue-600 sm:bg-transparent sm:text-inherit sm:p-0 sm:rounded-none sm:font-normal rounded-md p-1"
                href="mailto:ystie@naver.com"
                title="이름_업체명_참조파일"
              >
                메일<span className="hidden sm:inline">(biblecookie@naver.com)</span>
              </a>
              로 보내주세요.
            </p>
          </div>
          <div className="text-[90%] sm:text-base">
            <div className="flex py-3">
              <div className="font-semibold bg-gray-100 w-2/6 sm:w-44 flex justify-center rounded-md leading-[3.75rem] mr-3 sm:mr-7 shrink-0">
                이름
              </div>
              <form>
                <input
                  className="border border-inpgray py-2.5 pl-3 rounded-md sm:w-80 focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full text-subgray w-full"
                  value={name}
                  placeholder="이름을 입력해주세요."
                  name="name"
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="flex py-4">
              <div className="font-semibold bg-gray-100 w-2/6 sm:w-44 flex justify-center leading-[3.75rem] rounded-md mr-3 sm:mr-7 shrink-0">
                회사명
              </div>
              <form>
                <input
                  className="border border-inpgray py-2.5 pl-3 rounded-md sm:w-80 focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full text-subgray w-full"
                  value={company}
                  placeholder="회사명을 입력해주세요."
                  name="company"
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="flex py-4">
              <div className="font-semibold bg-gray-100 w-2/6 sm:w-44 flex justify-center leading-[3.75rem] rounded-md mr-3 sm:mr-7 shrink-0">
                연락처
              </div>
              <form>
                <input
                  className="border border-inpgray py-2.5 pl-3 rounded-md sm:w-80 focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full text-subgray w-full"
                  value={phone}
                  placeholder="연락처를 입력해주세요."
                  name="phone"
                  onChange={onChange}
                />
              </form>
            </div>
            <div className="flex py-4">
              <div className="font-semibold bg-gray-100 w-2/6 sm:w-44 flex justify-center leading-[3.75rem] rounded-md mr-3 sm:mr-7 shrink-0">
                이메일
              </div>
              <form>
                <input
                  className="border border-inpgray py-2.5 pl-3 rounded-md sm:w-80 focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full text-subgray w-full"
                  value={email}
                  placeholder="이메일을 입력해주세요."
                  name="email"
                  onChange={onChange}
                />
              </form>
            </div>
            <form onSubmit={onSubmit}>
              <div className="md:flex items-center py-4">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  넥타이 종류
                </label>
                <div className="md:pl-4 grid grid-cols-2 flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0">
                  <RadioInput label="일반 넥타이(날염)" value="일반 넥타이(날염)" checked={tie} setter={setTie} />
                  <RadioInput label="일반 넥타이(선염)" value="일반 넥타이(선염)" checked={tie} setter={setTie} />
                  <RadioInput label="지퍼타이" value="지퍼타이" checked={tie} setter={setTie} />
                  <RadioInput label="보타이" value="보타이" checked={tie} setter={setTie} />
                  <RadioInput label="스카프" value="스카프" checked={tie} setter={setTie} />
                </div>
              </div>
              <div className="md:flex items-center py-4">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  원단 재질
                </label>
                <div className="md:pl-4 grid grid-cols-2 flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0">
                  <RadioInput label="실크" value="실크" checked={fabric} setter={setFabric} />
                  <RadioInput label="폴리에스터" value="폴리에스터" checked={fabric} setter={setFabric} />
                </div>
              </div>
              <div className="md:flex items-center py-4">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  디자인
                </label>
                <div className="md:pl-4 grid grid-cols-2 auto-fill flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0 items-center ">
                  <RadioInput label="디자인 있음" value="디자인 있음" checked={design} setter={setDesign} />
                  <RadioInput label="디자인 없음" value="디자인 없음" checked={design} setter={setDesign} />
                  <React.Fragment>
                    <div
                      className="border border-inpgray py-2 rounded-md col-span-3 md:col-end-auto flex items-center cursor-pointer"
                      onClick={handleButtonClick}
                    >
                      <input
                        className="px-2 py-1 rounded-md mx-1 "
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        onChange={handleChange}
                      />
                    </div>
                  </React.Fragment>
                </div>
              </div>
              <div className="md:flex items-center py-4 ">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  라벨
                </label>
                <div className="md:pl-4 grid grid-cols-3 auto-fit flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0 items-center break-keep">
                  <RadioInput label="품표(기본)" value="품표(기본)" checked={label} setter={setLabel} />
                  <RadioInput label="로고 라벨" value="로고 라벨" checked={label} setter={setLabel} />
                  <RadioInput label="필요 없음" value="필요 없음" checked={label} setter={setLabel} />
                </div>
              </div>
              <div className="md:flex items-center py-4">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  포장
                </label>
                <div className="md:pl-4 grid grid-cols-3 auto-fit flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0 items-center tracking-tighter">
                  <RadioInput label="개별 폴리백(기본)" value="개별 폴리백(기본)" checked={box} setter={setBox} />
                  <RadioInput label="고급 하드케이스" value="고급 하드케이스" checked={box} setter={setBox} />
                  <RadioInput label="일반 케이스(종이)" value="일반 케이스(종이)" checked={box} setter={setBox} />
                </div>
              </div>
              <div className="md:flex items-center py-4">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] rounded-md block text-center">
                  수량
                </label>
                <div className="tracking-tighter md:pl-4 grid grid-cols-3 auto-fit flex-1 md:grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-x-2 gap-y-4 mt-4 md:mt-0 items-center">
                  <RadioInput label="100개" value="100개" checked={account} setter={setAccount} />
                  <RadioInput label="300개" value="300개" checked={account} setter={setAccount} />
                  <RadioInput label="500개" value="500개" checked={account} setter={setAccount} />
                  <div className="flex col-span-4 md:col-span-2 items-center justify-between">
                    <RadioInput label="기타" value="기타" checked={account} setter={setAccount} />
                    <input
                      className="py-2.5 pl-3 rounded-md ml-2 border border-inpgray focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full w-full sm:w-3/4 "
                      value={accountNumber}
                      placeholder="수량을 입력해주세요."
                      name="accountNumber"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex py-4 w-full">
                <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] h-min rounded-md block text-center">
                  요청사항
                </label>
                <div className="md:pl-4 flex-1 w-full mt-4 md:mt-0">
                  <textarea
                    className="py-2.5 pl-3 rounded-md w-full h-[7rem] border border-inpgray focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue text-subgray"
                    value={request}
                    placeholder="요청사항을 입력해주세요."
                    name="request"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="md:flex justify-center mt-[2rem] md:mt-16">
                <button className="bg-blue-600 text-white w-full md:w-[27rem] h-[5.625rem] rounded-md" type="submit">
                  견적 문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuoteContact;
