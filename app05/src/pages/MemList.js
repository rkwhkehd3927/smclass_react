import React,{useEffect, useState} from "react";
import MovieList from '../components/MovieList';
import Form from '../components/Form';
import Nav from '../components/Nav';
import axios from "axios";
import MemberList from '../components/MemberList';


const MemList = () => {
  // json 데이터, 배열 객체, 일반 변수는 새로고침을 해야 화면에 적용됨
  // useState 변수를 자동으로 화면에 적용
  // useEffect를 사용하여 db에서 데이터를 가져와, movies에 저장
  const [users,setUsers] = useState([]);

  // 서버와 통신해서 데이터 가져오기
  // 스프링에 있는 url 주소 입력
  useEffect(
    () => {
      axios.get("https://localhost:8181/member/memberList") // 데이터 가져오기
      .then(
        response =>{
          console.log(response);
          setUsers(response.data);
        }
      )
    },[]
  )


  // ★ 데이터 출력 (select - get방식)
  // 반복문 map 함수: return 해서 값을 돌려줌. for문: 반복만 함 = return 없음
  // 최초 스프링에서 데이터를 useEffect 로 가져와서  map으로 리스트를 출력
  const members = 
  users.length?
  users.map((user)=>{ // movies 데이터를 하나씩 movie에 넣음
    return(
      <MemberList user={user} key={user.id}/>
    );
  }):"영화정보 데이터가 없습니다." // 삼항식을 사용하여 영화 정보 데이터가 없을때 처리
  ;


  return(
    <>

      <Nav/>
      <div classNameName="main"> 
        <h2>회원정보리스트</h2>
        <div>
          {members}
        </div>
      </div>
      
    
    </>
  )

}

export default MemList;