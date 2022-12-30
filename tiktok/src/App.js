// import logo from './logo.svg';
// import { nanoid } from 'nanoid'
// import Content from './Content';
// import ContentUseRef from './ContentUseRef';
// import Content_Memo_UseCallback from './Content_Memo_UseCallback'
// import Content_UseMemo from './Content_UseMemo'
// import Content_UseReducer from './Content_UseReducer'
// // import './App.css';
// import React, { useState } from 'react';


// let orders = [100, 200, 300];
// let courses = [
//   {
//     id: 1,
//     name: 'Javascript'
//   },
//   {
//     id: 2,
//     name: 'Node JS'
//   },
//   {
//     id: 3,
//     name: 'React JS'
//   },
// ]
// function App() {

//   // const[counter, setCounter] = useState(() => {
//   //   const total = orders.reduce((total, cur)=> total+ cur);
//   //   console.log(total)
//   //   return total
//   // }); // dùng function làm initalState thì sẽ re-render sau mỗi lần user click (chỉ chạy lần đầu khi init App)

//   // const [infoUser, setInfoUser] = useState({
//   //   name: 'Nguyen Van A',
//   //   age: 30,
//   //   address: 'Ho Chi Minh, VN'
//   // })
//   // let handleAddInfoUser = () => {
//   //   // setInfoUser({
//   //   //   ...infoUser,
//   //   //   gender: 'Male'
//   //   // })
//   //   setInfoUser(prev => ({
//   //     ...prev,
//   //     bio: 'Loi Rex'
//   //   }))
//   //   console.log(infoUser);
//   // }
//   // let handleIncrease = () => {
//   //   setCounter(counter + 1);
//   // }
//   // const gifts = [
//   //   'CPU i9',
//   //   'Ram 32GB RGB',
//   //   'RGB Keyboard'
//   // ];
//   // const [gift, setGift] = useState()
//   // let handleRandomGift = () => {
//   //   setGift(() => {
//   //     let index = Math.floor(Math.random() * gifts.length);
//   //     console.log("🚀 ~ file: App.js:43 ~ setGift ~ index", index)
//   //     console.log(gifts[index])
//   //     return gifts[index];
//   //   })
//   // }
//   // const [name, setName] = useState();
//   // const [email, setEmail] = useState();
//   // let onSubmitForm = () => {
//   //   // call API
//   //   console.log({
//   //     name,
//   //     email
//   //   })
//   // }
//   // // console.log(name || "Chưa nhập input");

//   // const [checkedRadio, setCheckedRadio] = useState(courses[0]);
//   // const [checkedCheckBoxArr, setCheckedCheckBoxArr] = useState([]);
//   // // console.log(checkedRadio);
//   // const onHandleRadioSubmit = () => {
//   //   console.log({ idSubmit: checkedRadio.id, nameSubmit: checkedRadio.name })
//   // }
//   // const onHandleCheckboxSubmit = () => {
//   //   console.log({ idSubmit: checkedRadio.id, nameSubmit: checkedRadio.name })
//   //   console.log("Khoá học được chọn là")
//   //   let courseSelected = [];
//   //   let ids = checkedCheckBoxArr;
//   //   for (let id of ids) {
//   //     for (let course of courses) {
//   //       if (id === course.id) courseSelected.push(course.name)
//   //     }
//   //   }
//   //   console.log(courseSelected)
//   // }
//   // const getCourseSelected = (id) => {
//   //   console.log("Course checked: ", id);
//   //   setCheckedCheckBoxArr(prev => {
//   //     let isChecked = checkedCheckBoxArr.includes(id);

//   //     if (isChecked) {
//   //       // uncheck
//   //       console.log("voday")
//   //       return checkedCheckBoxArr.filter(item => item !== id);
//   //     } else {
//   //       return [...prev, id];
//   //     }
//   //   })
//   // }

//   // // Todo list
  
//   // const [jobs, setJobs] = useState(() => {
//   //   let storageJob = localStorage.getItem('newJobs');
//   //   let storageJobsDeleted = localStorage.getItem('jobs-deleted');
//   //   let arrayChung = [];
//   //   if (storageJob && storageJob !== null) {
//   //     console.log("voday");
//   //     arrayChung.push(...JSON.parse(storageJob))
//   //   }
//   //   console.log(arrayChung)
//   //   if (storageJobsDeleted && storageJobsDeleted !== null) {
//   //     arrayChung.push(...JSON.parse(storageJobsDeleted))
//   //   }
//   //   return [...arrayChung];
//   // });
//   // const [job, setJob] = useState('');
//   // // check xem localStorage đã có newJobs chưa NẾU CÓ THÌ SHOW

//   // const onAddJob = () => {
//   //   console.log(job)
//   //   setJobs(prev => {
//   //     let isExistedjob = jobs.filter(item => item.name === job);
//   //     if (isExistedjob && isExistedjob.length > 0) {
//   //       console.log("Tồn tại");
//   //       setJob('')
//   //       return [...prev];
//   //     } else {
//   //       console.log("Chưa tồn tai");
//   //       let newJobObj = {
//   //         name: job,
//   //         is_deleted: false
//   //       }
//   //       let jsonJobs = JSON.stringify([...prev, newJobObj]);
//   //       localStorage.setItem('newJobs', jsonJobs);
//   //       setJob('')
//   //       return [...prev, newJobObj];
//   //     }
//   //   })
//   // }

//   // const onDeleteJob = (job) => {
//   //   console.log("Job sẽ xoá: ", job)
//   //   console.log("jobs tổng", jobs);
//   //   setJobs(prev => {
//   //     let jobActive = jobs.filter(item => item.name !== job.name && item.is_deleted === false); // job sẽ xoá
//   //     let jobDeleted = jobs.filter(item => item.is_deleted === true); // job sẽ xoá
//   //     console.log("jobActive: ", jobActive)
//   //     let arrJobDeleted = [...jobDeleted, {
//   //       name: job.name,
//   //       is_deleted: !job.is_deleted
//   //     }];
//   //     console.log(arrJobDeleted);
//   //     localStorage.setItem('newJobs', (jobActive && jobActive.length > 0) ? JSON.stringify(jobActive) : []);
//   //     localStorage.setItem('jobs-deleted', JSON.stringify(arrJobDeleted));
//   //     // setJobs([...JSON.parse(localStorage.getItem('newJobs')), ...JSON.parse(localStorage.getItem('jobs-deleted'))]);
//   //     return [...((jobActive && jobActive.length > 0) ? JSON.parse(localStorage.getItem('newJobs')) : []), ...((arrJobDeleted && arrJobDeleted.length > 0) ? JSON.parse(localStorage.getItem('jobs-deleted')) : [])];
//   //   })
//   // }
//   // const onRevertJob = (job) => {
//   //   console.log("Job sẽ revert: ", job)
//   //   setJobs(prev => {
//   //     // lấy mãng job chưa xoá từ jobs tổng
//   //     let jobActive = jobs.filter(item => item.is_deleted === false);
//   //     let jobDeleted = jobs.filter(item => item.name !== job.name && item.is_deleted === true);

//   //     let arrJobRevert = [...jobActive, { name: job.name, is_deleted: !job.is_deleted }]
//   //     console.log(arrJobRevert);
//   //     localStorage.setItem('newJobs', (arrJobRevert && arrJobRevert.length > 0) ? JSON.stringify(arrJobRevert) : []);
//   //     localStorage.setItem('jobs-deleted', JSON.stringify(jobDeleted));
//   //     return [...((arrJobRevert && arrJobRevert.length > 0) ? JSON.parse(localStorage.getItem('newJobs')) : []), ...JSON.parse(localStorage.getItem('jobs-deleted'))].sort();
//   //   })
//   // }
//   // const Button = ({ job, onClick }) => {
//   //   let title = job.is_deleted === false ? 'Xoá' : 'Khôi phục';
//   //   let Component = 'button';
//   //   let propObj = {};
//   //   if (job && job.is_deleted) {
//   //     propObj.onClick = onClick
//   //   } else {
//   //     propObj.onClick = onClick
//   //   }
//   //   return <Component {...propObj}>{title}</Component>
//   // }
//   // const [showToggle, setShowToggle] = useState(false);
//   return (
//     // <div style={{ padding: '32px' }}>
//     //   {/* <h1>{counter}</h1>
//     //   <button onClick={handleIncrease}>Increase</button>
//     //   <hr/>
//     //   <h1>Info User:</h1>
//     //   <div>{infoUser.name}</div> 
//     //   <div>{infoUser.age}</div> 
//     //   <div>{infoUser.address}</div> 
//     //   <button onClick={handleAddInfoUser}>Add Info</button>
//     //   <h1 >After Add Info User:</h1>
//     //   <div>{JSON.stringify(infoUser)}</div> */}
//     //   <h2>{gift || 'Chưa có phần thưởng'}</h2>
//     //   <button onClick={handleRandomGift}>Lấy thưởng</button> <br />
//     //   <h1>Two way Binding</h1>
//     //   <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
//     //   <button onClick={() => setName('Nguyen Van AAAA')}>Change Name</button>
//     //   <br />
//     //   <hr />
//     //   <label htmlFor="email">Name</label>
//     //   <input value={name} type="text" onChange={(e) => setName(e.target.value)} /><br />
//     //   <label htmlFor="email">Email</label>
//     //   <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//     //   <button onClick={onSubmitForm}>Register</button>
//     //   <br />
//     //   <hr />
//     //   <h1>Two way Binding with Radio Button</h1>
//     //   {
//     //     courses.map(course => (
//     //       <div key={course.id}>
//     //         <input
//     //           type="radio"
//     //           checked={checkedRadio && checkedRadio.id === course.id}
//     //           onChange={() => setCheckedRadio(course)} /> {course.name}
//     //       </div>
//     //     ))
//     //   }
//     //   <button onClick={onHandleRadioSubmit}>Register</button>
//     //   <br />
//     //   <hr />
//     //   <h1>Two way Binding with <i>Checkbox</i> Button</h1>
//     //   {
//     //     courses.map(course => (
//     //       <div key={course.id}>
//     //         <input
//     //           type="checkbox"
//     //           checked={checkedCheckBoxArr && checkedCheckBoxArr.includes(course.id)}
//     //           onChange={() => getCourseSelected(course.id)} /> {course.name}
//     //       </div>
//     //     ))
//     //   }
//     //   <button onClick={onHandleCheckboxSubmit}>Register</button>
//     //   <h1>Todolist with useState</h1>
//     //   <input type='text' value={job} onChange={(e) => setJob(e.target.value)} />
//     //   <button onClick={onAddJob}>Add Job</button>

//     //   <ul>
//     //     {
//     //       jobs.map((item, index) => (
//     //         <React.Fragment key={index}>
//     //           {/* <li style={ item.is_deleted ? { textDecoration: 'line-through'} : {color:'red'}}>{item.name}<span><Button job={item} onClick={item.is_deleted == false ? () => {onDeleteJob({index})} : () => onRevertJob(index) }></Button></span></li> */}
//     //           <li style={item.is_deleted ? { textDecoration: 'line-through' } : { color: 'red' }}>{item.name}<span><Button job={item} onClick={item.is_deleted === false ? () => onDeleteJob(item) : () => onRevertJob(item)} ></Button></span></li>

//     //         </React.Fragment>
//     //       ))
//     //     }
//     //   </ul>
//     // </div>
//     // <div style={{padding: '32px'}}>
//     //   <button onClick={() => setShowToggle(!showToggle)}>Toggle</button>
//     //   {/* {showToggle && <Content />} */}
//     //   {/* {showToggle && <ContentUseRef />} */}
//     //   {/* {showToggle && <Content_Memo_UseCallback />} */}
//     //   {/* {showToggle && <Content_UseMemo />} */}
//     //   {showToggle && <Content_UseReducer />}
//     // </div>
//   );
// }


// import Content_UseContext from './Content_UseContext'
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';

// function App() {
//   const toggleContextObject = useContext(ThemeContext);
//   return (
//     <div style={{padding: '2rem'}}>
//       <button onClick={toggleContextObject.toggleTheme}>Toggle Theme</button>
//       <Content_UseContext/>
//     </div>
//   )
// }
import Content_UseContext from './Content_UseContext'
import { useHookCustom, actions } from './store';
// import { useContext } from 'react';
// import { StoreContext } from './store';
function App() {
  const [state, dispatch] = useHookCustom();

  const {todos, todoInput} = state;
  console.log("todoInput: ", todoInput)
  console.log('state: ', state);
  const handleAddTodo = () => {
    dispatch(actions.add_todo(todoInput))
  }
  console.log(todos)
  return (
    <div style={{padding: '2rem'}}>
      <h1>Hello Anh Em </h1>
      <input 
        value={todoInput}
        placeholder="Nhập công việc...." 
        onChange={e => dispatch(actions.setTodoInput(e.target.value))}/>
        <button onClick={handleAddTodo}>Thêm</button>
    </div>
  )
}
export default App;