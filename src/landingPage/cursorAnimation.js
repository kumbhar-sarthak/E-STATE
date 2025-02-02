import { useReducer, useEffect } from "react";

const cursorReducer = (state, action) => {
  switch (action.type) {
    case "upate_mouse_position":
      return {
        ...state,
        mouseX: action.payload.x,
        mouseY: action.payload.y,
      };

    case "update_cursor_postion":
      return {
        ...state,
        cursorX: action.payload.x,
        cursorY: action.payload.y,
      };

    default:
      return state;
  }
};

export const useCursor = () => {
  const initialState = {
    mouseX: 0,
    mouseY: 0,
    cursorX: 0,
    cursorY: 0,
  };

  const [state, dispatch] = useReducer(cursorReducer, initialState);

  useEffect(() => {
    const handleMouse = (e) => {
      dispatch({
        type: "upate_mouse_position",
        payload: {
          x: e.clientX,
          y: e.clientY,
        },
      });
    };

    document.addEventListener("mousemove", handleMouse);

    return () => {
      document.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useEffect(() => {
    const animateCursor = () => {
      const Xdist = state.mouseX - state.cursorX;
      const Ydist = state.mouseY - state.cursorY;

      if (Math.abs(Xdist) > 1 || Math.abs(Ydist) > 1) {
        dispatch({
          type: "update_cursor_postion",
          payload: {
            x: state.cursorX + Xdist * 0.1,
            y: state.cursorY + Ydist * 0.1,
          },
        });
      }

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor)
  }, [state.mouseX, state.mouseY, state.cursorX, state.cursorY]);

  return { cursorX: state.cursorX, cursorY: state.cursorY };
};
