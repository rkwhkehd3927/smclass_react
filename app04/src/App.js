import './App.css';
import MovieList from './components/MovieList';

function App() {
  // json 데이터, 배열 객체
  const movies = [
    {no:1,title:"Harry Potter 1",date:"01-01-2020"},
    {no:2,title:"Harry Potter 2",date:"01-01-2020"},
    {no:3,title:"Harry Potter 3",date:"01-01-2020"},
  ]

  var hdata = "";
  for(var i=0; i<movies.length;i++){

  }

  
  // 반복문 map 함수: return 해서 값을 돌려줌. for문: 반복만 함 = return 없음
  // 최초 스프링에서 데이터를 useEffect 로 가져와서  map으로 리스트를 출력
  const mlist = movies.map((movie)=>{ // movies 데이터를 하나씩 movie에 넣음
    return(
      <div className="card">
        <div className="card-header">{movie.no}</div>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.date}</p>
          <a href="#" className="btn btn-primary mt">edit</a>
          <a href="#" className="btn btn-primary">remove</a>
        </div>
      </div>
    );
  });


  return (
    <div className="main"> 
      <h2>게시판</h2>
      {mlist}
      
    </div>

    // <div className="main"> 
    //   <h2>게시판</h2>
    //   {/* <MovieList uBtn="update" dBtn="remove"/>
    //   <MovieList uBtn="변경" dBtn="제거"/>
    //   <MovieList/> */}
      
    // </div>
  );
}

export default App;
