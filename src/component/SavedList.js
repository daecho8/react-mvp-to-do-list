import { useState, useEffect } from "react";

const SavedList = () => {
    const [listState, setListState] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/list")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log((data))
            console.log((data[0]))
            console.log((data[0]["list_name"]))
            setListState(data)
            })
    }, [])

    return (
        <div>
            {/* <button onClick={clickShow}>SHOW ALL LIST</button> */}
            {listState.map(item => {
                return (<div key={item}>{item["list_name"]}</div>)
            })}
        </div>
    )
}

export default SavedList