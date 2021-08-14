import { useEffect } from "react";
import styled from "styled-components";
import LayoutPopup from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import typeStore from "store/type";
import { RESET_ALERT } from "store/reducers/alert/action";

function PopupAlert() {
  const { open, text } = useSelector((state: typeStore) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        dispatch({ type: RESET_ALERT });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [open]);

  const onClosePopup = () => {
    dispatch({ type: RESET_ALERT });
  };

  return (
    <LayoutPopup
      open={open}
      width={329}
      height={80}
      top={100}
      fullScreen={false}
      onClosePopup={() => onClosePopup()}
    >
      <Content>
        <Header>
          <div className="left">
            <span>warning</span>
            <i className="fas fa-exclamation-circle alert"></i>
          </div>
          <div className="right">
            <i
              className="fas fa-times-circle close"
              onClick={() => onClosePopup()}
            ></i>
          </div>
        </Header>
        <Body>
          <h1>{text}</h1>
        </Body>
      </Content>
    </LayoutPopup>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: #000;
  overflow: hidden;
`;
const Header = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  .left {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    span {
      font-size: 12px;
      font-weight: bold;
    }
    .alert {
      margin-left: 4px;
      color: #f3ce28;
    }
  }
  .right {
    width: 24px;
    height: 100%;
    flex-grow: 1;
    cursor: pointer;
    .close {
      color: #999898;
    }
  }
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 14px;
    font-weight: bold;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin: 0;
  }
`;

export default PopupAlert;
