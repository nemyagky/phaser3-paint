import * as React from 'react';
import styled from "@emotion/styled";
import {useStore} from "../hooks/useStore";
import {observer} from "mobx-react-lite";
import * as mobx from "mobx";


const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  
  
  position: absolute;
  width: 100vw;
  height: 100vh;
  
  
  pointer-events: none;
`

const DotsSpan = styled.span`

`

const LogDots = styled.button`
  pointer-events: all;
`

const SubmitDots = styled.button`
  pointer-events: all;
`

const Main: React.FC = () => {
  const store = useStore();

  return (
    <Wrapper>
      <DotsSpan>{store.dots.length}</DotsSpan>
      {store.dots.length > 300 && (
        <SubmitDots onClick={() => {
          console.log(JSON.stringify(mobx.toJS(store.dots)));

          store.resetCanvas()
          store.resetDots();
        }}>Submit</SubmitDots>
      )}
      <LogDots onClick={() => {
        console.log(JSON.stringify(mobx.toJS(store.dots)));
      }}>Print dots in console</LogDots>
    </Wrapper>
  );
};

export default observer(Main);
