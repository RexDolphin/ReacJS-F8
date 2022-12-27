import React, { useEffect, useState } from "react";

// docs
/* useEffect(callback, [])
  ----> Chỉ gọi callback 1 lần sau khi component mounted
/* useEffect(callback, [deps])
  ----> Callback sẽ được gọi lại mỗi khi deps thay đổi

  -------------
  1. Callback luôn được gọi sau khi component mounted
  2. Cleanup function luôn được gọi trước khi component unmounted
  2. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
*/
const tabs = ['posts','comments','albums', 'photos'];
function Content(){
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [typeTab, setTypeTab] = useState(['posts']);
  const [showButtonScroll, setShowButtonScroll] = useState(false);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [clockCountDown, setClockCountDown] = useState(180);
  const [avatar, setAvatar] = useState(); 
  // const []
  useEffect(()=>{
    console.log("typeTab change: ", typeTab);
    fetch(`https://jsonplaceholder.typicode.com/${typeTab}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  },[typeTab])

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if(window.scrollY >= 300){
        setShowButtonScroll(true);
      } else {
        setShowButtonScroll(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    console.log("addEventListener")

    // Cleanup function
    return () => {
      console.log("Unmounting")
      window.removeEventListener('scroll',handleScroll);
    }
  },[])

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    // cleanup function
    return ()=> {
      console.log("unmount resize");
      window.removeEventListener('resize', handleResize);
    }
  },[])

  // countdown
  // useEffect( () => {
  //   let intervalCountDown = setInterval(() => {
  //     // setClockCountDown(clockCountDown - 1) // do useEffect call 1 lần nên khi lấy clockCountDown - 1 thì nó sẽ lấy 180 - 1 = 179 và cho dù setInterval chạy bao nhiêu lần đi nữa thì vẫn clockCountDown vẫn là 180
  //     setClockCountDown(prevState => prevState - 1); 
  //     console.log("runnnnn ")
  //   }, 1000);
  //   return () => {
  //     console.log("Clear setInterval");
  //     clearInterval(intervalCountDown);
  //   }
  // }, [])

  useEffect(() => {
    return () => {
     avatar && URL.revokeObjectURL(avatar.preview) // nếu để k như vầy sẽ lỗi vì lúc này avatar khai báo lúc đầu là undefined nên khi chọn ảnh thi avatar thay đổi sẽ chạy useEffect trước.
                                              //  Lúc đó sẽ k có preview nên sẽ lỗi trong lần chạy đầu. Nên fai thêm avatar vào check nếu có avatar thì mới xoá preview
    }
  },[avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    // console.log(file)
  }

  const lessons = [
    {
      id: 1,
      name: 'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
      id: 2,
      name: 'SPA/MPA là gì'
    },
    {
      id: 3,
      name: 'Arrow function'
    },
  ];
  const [lessonId, setLessonId] = useState(1);
  const [showCommentLesson, setShowCommentLesson] = useState(1)

  useEffect(()=>{
    const handleComment = ({detail}) => {
      console.log("detail: ", detail);
    }
    window.addEventListener(`lesson-${lessonId}`,handleComment);
    return () => {
      lessonId && window.removeEventListener(`lesson-${lessonId}`,handleComment)
    }
  },[lessonId])
  return(
    <React.Fragment>
      <h1>Content----- {widthWindow}</h1>
      <div>
        <h2>Clock CountDown: {clockCountDown}</h2>
        <input type='file' onChange={handlePreviewAvatar} />
        {avatar && (
          <img src={avatar.preview} alt="" width='30%' height="30%" style={{objectFit: 'cover'}} />
        )}
      </div>
      <div>
        <h2>Fake Chat App</h2>
        <ul>
          {
            lessons.map(les => (
              <li
                key={les.id}
                style=
                {{
                  color: (lessonId === les.id) ? 'red' : '#333'
                }}
                onClick={() => setLessonId(les.id)}>
                {les.name}
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <div>
          {tabs.map(tab => (
            <button 
              key={tab}
              style={typeTab === tab ? {background:'blue', color: 'yellow'} : {background: 'white', color: 'black'} }
              onClick={() => setTypeTab(tab)}
              >{tab}</button>
          ))}
        </div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <h3>{typeTab}</h3>
        <ul>
          {posts.map((post) => (<li key={post.id}>{(post && post.title ? post.title : post.name)}</li>))}
        </ul>
      </div>
      {
        showButtonScroll && 
        <button 
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20
          }}
          // onClick={() => scrollToTop()}
        >Scroll to TOP</button>
      }
    </React.Fragment>
  )
}




export default Content;