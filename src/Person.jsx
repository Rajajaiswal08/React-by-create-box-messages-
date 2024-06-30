// import { useState } from 'react'
// function Person() {
//   const [notes, setNotes] = useState([]);
//   const fromSubmitHandler = (e) => {
//     e.preventDefault();
//     const Title = e.target.Title.value;
//     const detail = e.target.detail.value;
//     e.target.reset();
//     if (Title != "" && detail != "") {
//       // console.log(notes)
//       //  console.log(Titles,details);
//       var finalNotes=[...notes, {Title, detail}]

//       setNotes(finalNotes)

//     }
//   };

//   return (
//     <div className='container border mt-5 p-3 d-flex'>
//       <div className='col-3'>
//         <div className='row-mg'>
//           <form onSubmit={fromSubmitHandler}>
//             <div className="mb-3">
//               <label className="form-label">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 name='Title'
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">
//                 detail
//               </label>
//               <textarea
//                 name="detail"
//                 className="form-control"
//               />
//             </div>
//             <button className='btn btn-primary'>add</button>
//           </form>
//         </div>
//       </div>
//       <div className='col-9 border'>
//         <div className='row'>
//           {
//             notes.map(
//               (v, i) => {
//                 console.log(notes)
//                 return <div className='col-4 p-3' key={i}>
//                   <div className='card p-2 border' style={{ height: 300 }}>
//                     <h4>{v.Title}</h4>
//                     <hr />
//                     <p>{v.detail}</p>
//                   </div>
//                 </div>
//               }
//             )
//           }
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Person;



import { useState } from 'react';

function Person() {
  const [notes, setNotes] = useState([]);

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    const Title = e.target.Title.value;
    const detail = e.target.detail.value;
    e.target.reset();
    if (Title !== "" && detail !== "") {
      var finalNotes = [...notes, { Title, detail }];
      setNotes(finalNotes);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className='container border mt-5 p-3 d-flex' style={{ background: 'linear-gradient(to right, #e0f7fa, #80deea, #26c6da)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div className='col-4'>
        <div className='row-mg'>
          <form onSubmit={fromSubmitHandler} className="p-3 border rounded" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#00796b' }}>Title</label>
              <input type="text" name='Title' className="form-control" style={{ borderColor: '#00796b', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#00796b' }}>Detail</label>
              <textarea name="detail" className="form-control" style={{ borderColor: '#00796b', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }} />
            </div>
            <button className='btn btn-primary w-100' style={{ backgroundColor: '#00796b', borderColor: '#00796b', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Add</button>
          </form>
        </div>
      </div>
      <div className='col-8 border' style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div className='row'>
          {notes.map((v, i) => (
            <div className='col-6 p-3' key={i}>
              <div className='card p-3 border' style={{ height: 300, backgroundColor: '#ffffff', color: '#333', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h4 style={{ color: '#00796b' }}>{v.Title}</h4>
                <hr />
                <p>{v.detail}</p>
                <button className='btn btn-danger' onClick={() => deleteNote(i)} style={{ position: 'absolute', top: 10, right: 10 }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Person;
