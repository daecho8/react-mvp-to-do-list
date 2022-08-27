// import React, {useState} from 'react';

// const DeleteBtn = () => {
//     const [listState, setListState] = useState([]);

//     function deleteList() {
       
//         fetch(`http://localhost:5000/api/list/${id}`, {
//             method: "DELETE"
//         }).then(res => {
//             console.log(res)
//             setListState({id: 0});
//         });
//     }

//     return (
//         <div>
//             <button onClick={deleteList} className="delete_btn">DELETE</button>
//         </div>
//     )
// }

// export default DeleteBtn