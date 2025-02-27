import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  // 화면이 리로딩되면 실행되는 함수
  // use Effect: 최초 데이터를 가져와서 화면에 출력 시, 사용
  // 특정 변수 변경 시, 명령어를 실행해야 할 때 사용
  useEffect(
    () => {
      console.log("useEffect 실행: "+count);
    }
  );
  useEffect(
    () => {
      console.log("처음 한번만 실행");
    },[] 
  );
  useEffect(
    () => {
      console.log("useEffect count1: "+count);
    },[count] 
  );
  useEffect(
    () => {
      console.log("useEffect count2: "+count);
    },[count2]
  );

  // 카운트
  // function countBtn(){} <-- 이거랑 같음
  const countBtn = () => {
    // alert("카운트 증가");
    // console.log(count);
    setCount(count+1); // 그냥 count = count+1; 하면 적용 안됨
  }

  const countBtn2 = () => {
    // alert("카운트 증가");
    // console.log(count);
    setCount2(count2+1); // 그냥 count = count+1; 하면 적용 안됨
  }


  return (
    <div className="main">
      <h2>게시판</h2>

      <div className="idTxt">카운트: {count}</div>
      <button onClick={countBtn}>카운트 증가</button>
      <br/>
      <div className="idTxt">카운트: {count2}</div>
      <button onClick={countBtn2}>카운트 증가</button>

      <Form/>

         
    </div>
  );
}

export default App;
