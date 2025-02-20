import { useCursor } from "./cursorAnimation";
import "./customCursor.css";

export const Cursor = () => {
  const { cursorX, cursorY } = useCursor();

  return (
    <div
      className="cursor"
      style={{
        top: `${cursorY}px`,
        left: `${cursorX}px`,
      }}
    />
  );
};
