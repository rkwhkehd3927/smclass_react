import React from 'react';

// prop 변수 2개 일때, {}를 사용해서 prop 변수를 분해하여 받음
// const MovieList = (prop) => {
const MovieList = ({movie,delMovie}) => {
  // 삼항식 사용
  // const uBtn = prop.uBtn?prop.uBtn:"수정"; // prop이 없을 경우 "수정" 사용
  // const dBtn = prop.dBtn?prop.dBtn:"삭제"; // prop이 없을 경우 "수정" 사용


  const deleteBtn = () =>{
    alert(movie.no+"번 데이터를 삭제합니다.");
    delMovie(movie.no); // 삭제
  }

  return(
    // console.log(props.movie);

    <>
      <div className="card">
        <div className="card-header">번호 {movie.no}</div>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">수정</a>
          <a onClick={deleteBtn} className="btn btn-primary">삭제</a>
        </div>
      </div>
    </>
    
  );

}

export default MovieList;