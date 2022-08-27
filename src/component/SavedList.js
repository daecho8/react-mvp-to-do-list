import { useState, useEffect } from "react";

const SavedList = () => {
    const [listState, setListState] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/list")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log((Object.keys(data)))
            // console.log((data[0]))
            // console.log((data[0]["list_name"]))
            setListState(data)
        })
    }, [listState])
    // console.log(listState[0]["id"])

    function deleteList(event) {
        event.preventDefault()
        console.log(event.currentTarget.id)
        let id = event.currentTarget.id
        fetch(`http://localhost:5000/api/list/${id}`, {
            method: "DELETE"
        }).then(res => {
            setListState({id: 0});
        });
        console.log(listState)
    }

    if (listState.id === 0) {
        return null;
    }

    return (
        <div>
            
            {listState.map(item => {
                return (
                    <ul >
                        <li key={item.id}>{item["list_name"]}
                        <button id={item.id} onClick={deleteList} className="delete_btn">DELETE</button>
                    </li>
                    </ul>
                    )
                })}

            </div>
    )
}

export default SavedList