import React from "react";
import useImage from "use-image";
import { Image, Transformer } from "react-konva";
import type { RootState } from "../../store/store";
import { dragstart, dragend, setposition } from "../../services/mainItem";
import { useSelector, useDispatch } from "react-redux";
import { selectTrue } from "../../services/select";

export default function DesignView() {
  const shapeRef = React.useRef<any>();
  const trRef = React.useRef<any>();
  const selected = useSelector((state: RootState) => state.select);
  const mainItem = useSelector((state: RootState) => state.mainItem);
  const dispatch = useDispatch();
  const [image] = useImage(mainItem.preview);

  React.useEffect(() => {
    if (selected.value) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [selected.value]);

  return (
    <>
      <Image
        ref={shapeRef}
        isSelected={selected.value}
        image={image}
        draggable
        {...mainItem.positions}
        onClick={() => dispatch(selectTrue())}
        onTap={() => dispatch(selectTrue())}
        onDragStart={() => {
          dispatch(dragstart());
        }}
        onDragEnd={(e: any) => {
          dispatch(
            dragend({
              ...mainItem.positions,
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            })
          );
        }}
        onTransformEnd={(e: any) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the mainItem better we will reset scale on transform end
          const node: any = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          dispatch(
            setposition({
              ...mainItem.positions,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            })
          );
        }}
      />
      {selected.value && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}
