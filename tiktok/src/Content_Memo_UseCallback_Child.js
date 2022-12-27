import React, { useEffect, memo } from "react";
function Content_Memo_UseCallback_Child({onIncrease}){

  console.log('re-render')
  return(
    <React.Fragment>
      <h1>Content_Memo_UseCallback_Child</h1>
      <button onClick={onIncrease}>Increase</button>
    </React.Fragment>
  )
}

export default memo(Content_Memo_UseCallback_Child);
// export default Content_Memo_UseCallback_Child; // không có memo thì sẽ re-render component con liên tục