import React, { useEffect, useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import close from "../../image/close.png";
import pallete from "../../image/pallete.png";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setmaincolor, setpreview, setposition } from "../../services/mainItem";
import { selectFalse } from "../../services/select";
import { changesetone, changesettwo } from "../../services/setItem";

interface FileType {
  stream: string;
  width: number;
  height: number;
  label: string;
}

export default function Editor({ elStage, setModal }: { elStage: any; setModal: any }) {
  const [fileUpload, setFileUpload] = React.useState<FileType>({
    stream: "",
    width: 0,
    height: 0,
    label: "",
  });
  const [color, setColor] = useColor("hex", "#121212");
  const [PLToggle, setPLToggle] = useState(false);
  const mainItem = useSelector((state: RootState) => state.mainItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setmaincolor(color.hex));
  }, [dispatch, color]);

  function _designLabel(fileName: string, labelId: string) {
    let setFileName = fileName;
    let main_picker = document.getElementById("main_picker") as HTMLElement;
    //엘러먼트 요소 타입 지정해주기
    let setone_picker = document.getElementById("setone_picker") as HTMLElement;
    let settwo_picker = document.getElementById("settwo_picker") as HTMLElement;
    if (setFileName === null) {
      setFileName = "Front Design";
    }
    switch (labelId) {
      case "main_logo":
        main_picker.innerHTML = setFileName;
        break;
      case "setOne_logo":
        setone_picker.innerHTML = setFileName;
        break;
      case "setTwo_logo":
        settwo_picker.innerHTML = setFileName;
        break;
      default:
    }
  }

  useEffect(() => {
    function _calculate_image_size(type: string, originalWidth: number, originalHeight: number) {
      const canvas = Math.round((40 * elStage.current.clientWidth) / 100);

      if (originalWidth >= canvas) {
        const maxWidth = canvas;
        const maxHeight = Math.round((55 * elStage.current.clientWidth) / 100);
        var ratio = 0; // Used for aspect ratio
        var width = originalWidth; // Current image width
        var height = originalHeight; // Current image height

        let newWidth = maxWidth;
        let newHeight = maxWidth;

        if (width > maxWidth && width > height) {
          ratio = width / height;
          newHeight = maxWidth / ratio;
          newWidth = maxWidth;
        } else if (height > maxHeight && height > width) {
          ratio = height / width;
          newWidth = maxHeight / ratio;
          newHeight = maxHeight;
        }

        if (type === "width") {
          return newWidth;
        } else {
          return newHeight;
        }
      }
      return originalWidth;
    }

    if (fileUpload.stream.length > 0) {
      // 이부분 진짜 죽는줄... 무한 루프 걸려서
      //빈 객체에서 fileUpload.label과 같이 빈객체를 참고하게 되면 error가 뜨는데 error를 해결하고자 객체의 값을
      //미리 설정해 주니 if 조건문의 값이 항상 투르가 되버려 무한루프에 빠졌었음...

      switch (fileUpload.label) {
        case "main_logo":
          dispatch(setpreview(fileUpload.stream));
          dispatch(
            setposition({
              ...mainItem.positions,
              width: _calculate_image_size("width", fileUpload.width, fileUpload.width),
              height: _calculate_image_size("height", fileUpload.width, fileUpload.height),
            })
          );
          break;
        case "setOne_logo":
          dispatch(changesetone(fileUpload.stream));
          break;
        default:
          dispatch(changesettwo(fileUpload.stream));
          break;
      }

      setFileUpload({
        stream: "",
        width: 0,
        height: 0,
        label: "",
      });
    }
  }, [dispatch, fileUpload]);

  function uploaddesign(e: any) {
    const file = e.target.files[0];
    const labelId = e.target.id;
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

    // check is file an image
    if (file && acceptedImageTypes.includes(file["type"])) {
      const design = URL.createObjectURL(file);
      // set label image
      _designLabel(file.name, labelId);

      // Get image width
      let img = new Image();
      img.src = design;
      img.onload = function () {
        setFileUpload({
          stream: design,
          width: img.width,
          height: img.height,
          label: labelId,
        });
      };
    } else {
      setModal({
        isOpen: true,
        message: "jpg, jpeg, png 유형의 파일만 업로드 가능합니다.",
      });
      e.target.value = null;
    }
  }

  const deleteMainPreview = () => {
    dispatch(setpreview(""));
  };

  const deleteSetLabel = (label: string) => {
    switch (label) {
      case "setOne_logo":
        dispatch(changesetone(""));
        break;
      case "setTwo_logo":
        dispatch(changesettwo(""));
        break;
      default:
        break;
    }
  };

  const colorList = [
    { hax: "#f44336", name: "a" },
    { hax: "#e91e63", name: "b" },
    { hax: "#9c27b0", name: "c" },
    { hax: "#673ab7", name: "d" },
    { hax: "#3f51b5", name: "e" },
    { hax: "#2196f3", name: "f" },
    { hax: "#03a9f4", name: "g" },
    { hax: "#00bcd4", name: "h" },
    { hax: "#009688", name: "i" },
    { hax: "#4caf50", name: "j" },
    { hax: "#8bc34a", name: "k" },
    { hax: "#cddc39", name: "l" },
    { hax: "#ffeb3b", name: "m" },
    { hax: "#ffc107", name: "n" },
    { hax: "#ff9800", name: "o" },
    { hax: "#ff5722", name: "p" },
    { hax: "#795548", name: "q" },
    { hax: "#607d8b", name: "r" },
  ];

  return (
    <div onClick={() => dispatch(selectFalse())} className="w-full">
      {PLToggle ? (
        <div>
          <div className="fixed w-full h-full bg-black opacity-50 top-0 left-0 "></div>
          <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-7 rounded-lg pb-9">
            <div className="flex justify-between pb-5 pt-9">
              <p>색상 선택</p>
              <img src={close} alt="close" onClick={() => setPLToggle(!PLToggle)} />
            </div>
            <ColorPicker width={window.innerWidth / 2} height={220} color={color} onChange={setColor} hideHSV dark />
            <div className="flex justify-end">
              <div
                className="bg-blue-600 w-full md:w-1/2 mx-auto py-4 rounded-md flex justify-center mt-5"
                onClick={() => setPLToggle(!PLToggle)}
              >
                <p className="text-white">적 용 하 기</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-full">
        <div className="mb-10">
          <div className="flex flex-wrap ">
            <div className="bg-a bg-b bg-c bg-d bg-e bg-f bg-g bg-h bg-i bg-j bg-k bg-l bg-m bg-n bg-o bg-p bg-q bg-r"></div>
            {colorList.map(function (color, i) {
              return (
                <div
                  key={i}
                  className={`w-8 h-8 bg-${color.name} cursor-pointer rounded-md m-2.5`}
                  onClick={() => {
                    dispatch(setmaincolor(color.hax));
                  }}
                ></div>
              );
            })}
            <img
              src={pallete}
              alt="pallete"
              className="w-8 h-8 m-2.5 cursor-pointer"
              onClick={() => setPLToggle(!PLToggle)}
            />
          </div>
        </div>
        <div className="mb-10">
          <label className="block mb-2 text-sm font-semibold">메인 로고</label>
          <label className="block cursor-pointer mb-3 bg-gray-100 py-3 px-4 pr-8 rounded " htmlFor="main_logo">
            <div className="flex justify-between w-full">
              <span className=" block text-gray-400" id="main_picker">
                클릭해서 이미지를 업로드 하세요.
              </span>
              <button className="pointer-events-auto" onClick={() => deleteMainPreview()}>
                <img src={close} alt="close" />
              </button>
            </div>
            <input id="main_logo" onChange={uploaddesign} className="w-full hidden" type="file" />
          </label>
        </div>
        <div className="mb-10">
          <label className="block mb-2 text-sm font-semibold">패턴 1</label>
          <label className="block cursor-pointer mb-3 bg-gray-100  py-3 px-4 pr-8 rounded " htmlFor="setOne_logo">
            <div className="flex justify-between w-full">
              <span className=" block text-gray-400" id="setone_picker">
                클릭해서 이미지를 업로드 하세요.
              </span>
              <button className="pointer-events-auto" onClick={() => deleteSetLabel("setOne_logo")}>
                <img src={close} alt="close" />
              </button>
            </div>
            <input id="setOne_logo" onChange={uploaddesign} className="w-full hidden" type="file" />
          </label>
        </div>
        <div className="mb-10">
          <label className="block mb-2 text-sm font-semibold">패턴 2</label>
          <label className="block cursor-pointer mb-3 bg-gray-100  py-3 px-4 pr-8 rounded " htmlFor="setTwo_logo">
            <div className="flex justify-between w-full">
              <span className=" block text-gray-400" id="settwo_picker">
                클릭해서 이미지를 업로드 하세요.
              </span>
              <button className="pointer-events-auto" onClick={() => deleteSetLabel("setTwo_logo")}>
                <img src={close} alt="close" />
              </button>
            </div>
            <input id="setTwo_logo" onChange={uploaddesign} className="w-full hidden" type="file" />
          </label>
        </div>
        <div></div>
      </div>
    </div>
  );
}
