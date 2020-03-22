import React, {FunctionComponent} from "react";

interface IScrollProps {
  children?: JSX.Element
}

const Scroll = (props: IScrollProps): JSX.Element => {
  return (
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
          {props.children}
      </div>
  )
};

export default Scroll;
