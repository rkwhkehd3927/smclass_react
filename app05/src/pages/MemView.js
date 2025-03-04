import React,{useState} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import View from '../components/View';
import { useParams } from "react-router-dom"; // parameter 값을 받음
import { useEffect } from 'react';
import axios from 'axios';
import MemList from '../components/MemList';




const MemView = () => {
  // json 데이터, 배열 객체, 일반 변수는 새로고침을 해야 화면에 적용됨
  // useState 변수를 자동으로 화면에 적용
  // useEffect를 사용하여 db에서 데이터를 가져와, movies에 저장
  const [users,setUsers] = useState([]);
  const params = useParams(); // parameter 값을 변수로 저장
  console.log("useParams id: " + params.id);

  // setMovies에 넣어주기
  // const movies = [
    // {no:1,title:"Harry Potter 1",date:"01-01-2020"},
    // {no:2,title:"Harry Potter 2",date:"01-01-2020"},
    // {no:3,title:"Harry Potter 3",date:"01-01-2020"},
  // ]

  // 서버와 통신해서 데이터 가져오기
  // 스프링에 있는 url 주소 입력
  useEffect(
    () => {
      axios.get(`https://localhost:8181/member/memberList?id=${params.id}`) // 데이터 가져오기
      .then(
        response =>{
          console.log(response);
          setUsers(response.data);
        }
      )
    },[params.id]
  )


  // ~~~~~~~ 추가, 수정, 삭제

  // 데이터 추가 (inset - post방식)
  // const addMovie = (movie) =>{
  //   // setMovies([...movies,movie,]); // 데이터 3개 -> 모두 지우고, 최종 데이터만 저장
  //   setUsers([user,...users,]); // 데이터 3개 -> 모두 지우고, 최종 데이터만 저장
  // }


  // // 데이터 삭제 (delete - delete방식) 
  // const delMovie = (no) =>{
  //   console.log("삭제 번호: "+no);
  //   // 데이터 삭제: filter = 해당되는 데이터를 리턴하여 돌려줌
  //   setMovies(
  //     movies.filter((movie)=>{
  //       return(movie.no != no)// 얘(no)만 빼고 return 시키기
  //     })

  //   )
  // }



  // 데이터 수정 (update - put방식)


  // ★ 데이터 출력 (select - get방식)
  // 반복문 map 함수: return 해서 값을 돌려줌. for문: 반복만 함 = return 없음
  // 최초 스프링에서 데이터를 useEffect 로 가져와서  map으로 리스트를 출력
  const mlist = 
  users.length?
  users.map((user)=>{ // movies 데이터를 하나씩 movie에 넣음
    return(
      <MemList user={user} key={user.no}/>
    );
  }):"영화정보 데이터가 없습니다." // 삼항식을 사용하여 영화 정보 데이터가 없을때 처리
  ;


  return(
    <>
      <Nav/>
      <div classNameName="main"> 
        <h2>영화상세보기</h2>
        <div>
          <View user={users}/>
        </div>
      </div>
    </>
  )

}

export default MemView;