import { memo } from "react";

const style = {
  width: "100%",
  height: "100px",
  backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
  const { open } = props;
  const data = [...Array(2000).keys()];
  console.log("ChildAreaがレンダリングされた！");
  data.forEach(() => {
    console.log("...")
  })
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  )
});