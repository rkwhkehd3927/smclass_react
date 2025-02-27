import React,{useState} from 'react';

const Form = () =>{

  const [id,setId] = useState('aaa');
  const [pw,setPw] = useState('');

  // 로그인 버튼
  const loginBtn = () => {
  alert("enter키가 입력되었습니다.")
  }
  const keyPress = (e) => {
    if(e.keyCode == 13){
      loginBtn();
      // console.log("버튼 클릭");
      alert("enter키가 입력되었습니다.")
    }
  }

  return(
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">ID</label>
          <input type="text" value={id} on onChange={(e)=>setId(e.target.value)}
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)}
          onKeyUp={keyPress}
          className="form-control" id="exampleInputPassword1"/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="button" onClick={loginBtn} className="btn btn-primary">Login</button>
      </form>   
    </>

  );
}

export default Form;