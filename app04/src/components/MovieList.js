import React from 'react';

// prop 변수 2개 일때, {}를 사용해서 prop 변수를 분해하여 받음
// const MovieList = (prop) => {
const MovieList = ({uBtn,dBtn}) => {
  // 삼항식 사용
  // const uBtn = prop.uBtn?prop.uBtn:"수정"; // prop이 없을 경우 "수정" 사용
  // const dBtn = prop.dBtn?prop.dBtn:"삭제"; // prop이 없을 경우 "수정" 사용
  const upBtn = uBtn?uBtn:"수정"; // prop이 없을 경우 "수정" 사용
  const deBtn = dBtn?dBtn:"삭제"; // prop이 없을 경우 "수정" 사용
  return(

    <>
      <div className="card">
        <div className="card-header">Movie Info</div>
        <div className="card-body">
          <h5 className="card-title">Harry Potter</h5>
          <p className="card-text">01-01-2020</p>
          <a href="#" className="btn btn-primary mt">{uBtn}</a>
          <a href="#" className="btn btn-primary">{dBtn}</a>
        </div>
      </div>
    </>
    
  );

}

export default MovieList;