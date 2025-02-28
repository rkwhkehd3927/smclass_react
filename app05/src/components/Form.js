import React,{useState} from "react";

const Form = ({addMovie}) =>{


  const [count,setCount] = useState(4);
  const [no,setNo] = useState(0);
  const [title,setTitle] = useState(''); 
  const [date,setDate] = useState(''); 


  const saveBtn = () =>{
    alert("영화정보를 저장합니다.");
    console.log("번호: "+count);
    console.log("영화제목: "+title);
    console.log("날짜: "+date);

    // 영화 정보 저장 함수
    addMovie({no:count,title:title,date:date})
    resetData();
    setCount(count+1); // db에서 sequence로 대체
  }

  // input 화면 지우기
  const resetData = () =>{
    setTitle("");
    setDate("");
  }



  return (
    <>
      <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Movie title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Date</label>
            <input type="text" value={date} onChange={(e)=>setDate(e.target.value)}
             className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="button" onClick={saveBtn} className="btn btn-primary">저장</button>
      </form>
    
    
    </>
  );
}

export default Form;