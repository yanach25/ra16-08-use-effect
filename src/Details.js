import {useEffect, useState} from "react";
import Spinner from "./Spinner";

function Details(props) {
    const {id} = props.info;
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_URL}${id}.json`).then(res => res.json()).then(res => {
            setInfo(res);
            setLoading(false);
        })
    }, [id])

    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={info?.avatar} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{info?.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">City: {info?.details.city}</li>
                <li className="list-group-item">Company: {info?.details.company}</li>
                <li className="list-group-item">Position: {info?.details.position}</li>
            </ul>
                {isLoading ? <Spinner/> : ''}
        </div>
    )
}

export default Details;
