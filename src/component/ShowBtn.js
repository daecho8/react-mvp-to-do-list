import React, {useState, useEffect} from "react";

const ShowBtn = () => {

    const [listState, setListState] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/list")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            console.log((data[0].id))
            setListState(data)
          })
    }, [])

    const clickShow =(event) => {
        event.preventDefault()
      }

    return (
        <div>
            <input type="button" value="SHOW ALL LIST" onClick={clickShow}/>
        </div>
    )
}

export default ShowBtn