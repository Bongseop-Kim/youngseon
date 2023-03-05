import React from "react";
import { Stage, Layer } from "react-konva";
import Tie from "./Tie";
import DesignView from "./DesignView";
import { Provider } from "react-redux";
import { store } from "../../store/store";

export default function Designer({ elStage, checkDeselect }: { elStage: any; checkDeselect: any }) {
  return (
    <div className="bg-gray-100 rounded-lg ">
      <div id="myDesign" ref={elStage} className="relative p-0 lg:p-10 flex justify-center items-center">
        <Stage
          //drag&drop 면적
          className="absolute"
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          width={400}
          height={700}
        >
          <Layer>
            {/* Layer 사이에 있어서 provider가 전달 되지 않았던 문제 발생... */}
            <Provider store={store}>
              <DesignView />
            </Provider>
          </Layer>
        </Stage>
        <Tie />
      </div>
    </div>
  );
}
