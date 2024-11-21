import { Colors } from "../../constants/styles";
import Icon from "../common/Icon";
import camera from "../../assets/icons/camera.svg";
import { useRef } from "react";

export default function PhotoSelector({
  selectedPhotos,
  maxCount,
  handler,
}: {
  selectedPhotos: File[];
  maxCount: number;
  handler: (newPhotos: File[]) => void;
}) {
  const selector = useRef<HTMLInputElement>(null);
  return (
    <div
      style={{
        color: Colors.primaryColor,
        borderColor: Colors.primaryColor,
        borderRadius: "0.5em",
        background: "none",
        width: "3em",
        height: "3em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        padding: "0.25em",
      }}
      onClick={() => {
        if (selectedPhotos.length >= maxCount) return;
        selector.current?.click();
        const files = selector.current!.files;
        const newFiles: File[] = [];
        if (files === null) return;
        for (let i = 0; i < files.length; i++) {
          newFiles.push(files[i]);
        }
        handler(newFiles.slice(0, 10 - selectedPhotos.length));
      }}
    >
      <Icon src={camera} alt="camera" autoSize />
      <input
        ref={selector}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        multiple
      />
      <span className="button-text">
        {selectedPhotos.length}/{maxCount}
      </span>
    </div>
  );
}
