import { useEffect } from "react";
import styled from "styled-components";
import Constant from "constant/index";
import { motion } from "framer-motion";

interface LayoutPopupProp {
  children: any;
  open: boolean;
  width: number;
  height?: number;
  top: number;
  onClosePopup: Function;
  fullScreen: boolean;
  borderRadius?: number;
}
function LayoutPopup({
  children,
  open,
  width,
  height,
  top = 40,
  onClosePopup,
  fullScreen,
  borderRadius = 6,
}: LayoutPopupProp) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <Container open={open}>
      <PopupContent
        width={width}
        height={height}
        top={top}
        fullScreen={fullScreen}
        borderRadius={borderRadius}
      >
        {children}
      </PopupContent>
      <BackgroundClose onClick={() => onClosePopup()} />
    </Container>
  );
}
const Container = styled.div<any>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: fixed;
  display: inline-block;
  display: ${(props) => (props.open ? "block" : "none")};
  overflow: scroll;
  overflow: hidden;
`;
const BackgroundClose = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PopupContent = styled(motion.div)`
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  margin: auto;
  z-index: 101;
  top: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  height: ${(props) => (props.height ? `${props.height}px` : "")};
  top: ${(props) => props.top}px;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  ${(props) =>
    props.fullScreen &&
    `
    top : 0;
    width : 100%;
    height : 100%;
    max-height : 100%;
  `}

  @media only screen and (min-width: ${Constant.SCREEN_SIZE.XS - 1}px) {
    top: ${(props) => props.top}px;
    width: ${(props) => props.width}px;
    max-height: ${(props) => props.height}px;
  }

  @media only screen and (max-width: ${Constant.SCREEN_SIZE.SSS}px) {
    width: 100%;
    max-height: 100%;
    top: 0;
  }
`;

export default LayoutPopup;
