import React, { useRef, useState } from "react";
import Designer from "./Designer";
import Editor from "./Editor";
import { useDispatch } from "react-redux";
import { selectFalse } from "../../services/select";
import Banner from "../../components/Banner";
import designBack from "../../image/designBack.png";

interface ModalType {
  isOpen: boolean;
  message: string;
}

function Design() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<ModalType>({
    isOpen: false,
    message: "anjay",
  });
  const elStage = useRef(null);

  const checkDeselect = (e: any) => {
    //FIXME: e type은 konva의 getStage를 사용하여 type 지정의 어려움이 있음...
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      dispatch(selectFalse());
    }
  };

  function closeModal() {
    setModal({
      isOpen: false,
      message: "",
    });
  }

  return (
    <div>
      {modal.isOpen && (
        <div className="z-10 absolute min-h-screen w-full flex justify-center items-center">
          <div className="z-20 w-1/3 container p-5 bg-white rounded-lg">
            <p>{modal.message}</p>
            <button onClick={() => closeModal()} className="bg-blue-600 w-full rounded-sm text-white p-2 outline-none">
              ok
            </button>
          </div>
          <div onClick={() => closeModal()} className="bg-modal min-h-full absolute w-full"></div>
        </div>
      )}
      {/* 소개 시작 */}
      <Banner
        img={designBack}
        title="디자인"
        p1="자유롭게 이미지를 넣고 색상을 선택하여 "
        p2="원하는 상품의 디자인을 손쉽게 구현할 수 있습니다."
        contact={true}
      />
      {/* 본문 시작 */}
      <div className="lg:max-w-[1280px] md:max-w-[696px] mx-auto">
        <div className="px-3.5 xl:px-0 pt-16 md:pb-48 sm:pb-32 pb-16 ">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-5">
              <p className="mb-6 font-semibold">디자인 미리보기</p>
              <Designer checkDeselect={checkDeselect} elStage={elStage} />
            </div>
            <div className="w-full mt-5 md:mt-0 md:ml-5">
              <p className="mb-6 font-semibold">색상 선택</p>
              <Editor setModal={setModal} elStage={elStage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
