import './App.css';
import List from "./List";
import Details from "./Details";
import {useEffect, useState} from "react";

function App() {
    const [list, setList] = useState([]);
    const [info, setInfo] = useState(null);

    useEffect(() => {
            fetch(`${process.env.REACT_APP_URL}users.json`).then((res) => res.json()).then(res => {
                setList(res);
            })
        },
        []
    )

    const onActivate = (res) => {
        setInfo(res);
    }

    const detailsEl = <Details info={info}/>
    const emptyDetails = (
        <div style={{width: '18rem'}}>

        </div>
    )

    return (
        <div className="App">
            <List list={list} onActivate={onActivate}/>
            {info ? detailsEl : emptyDetails}
        </div>
    );
}

export default App;
