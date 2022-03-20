import {useState} from "react";

function List(props) {
    const {list, onActivate} = props;
    const [active, setActive] = useState(null)

    const handleOnActivate = (item) => {
        setActive(item.id);
        onActivate(item);
    }

    const listEls = list.map((item) => (
        <li key={item.id}
            className={`list-group-item ${item.id === active ? 'active' : ''}`}
            onClick={() => handleOnActivate(item)}
        >
            {item.name}
        </li>
    ));
    return(
        <ul className="list-group">
            {listEls}
        </ul>
    )
}

export default List
