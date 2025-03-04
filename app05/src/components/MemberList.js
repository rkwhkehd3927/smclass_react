import React from 'react';
import { Link } from "react-router-dom";

// prop 변수 2개 일때, {}를 사용해서 prop 변수를 분해하여 받음
// const MovieList = (prop) => {
const MemberList = ({user}) => {
  // 삼항식 사용
  // const uBtn = prop.uBtn?prop.uBtn:"수정"; // prop이 없을 경우 "수정" 사용
  // const dBtn = prop.dBtn?prop.dBtn:"삭제"; // prop이 없을 경우 "수정" 사용

  return(
    // console.log(props.movie);

    <>
      <div className="card">
        <div className="card-header">아이디 {user.id}</div>
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/memView/${user.id}`}>{user.name}</Link>

          </h5>
          <p className="card-text">{user.email}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a className="btn btn-primary">삭제</a>
        </div>
      </div>
    </>
    
  );

}

export default MemberList;