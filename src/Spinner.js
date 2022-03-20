import ReactDOM from "react-dom";

function Spinner() {
    return (
        <PortalSpinner>
            <div className="spinner-wrapper">
                <span  style={{width: '3rem', height: '3rem'}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                </span>
            </div>
        </PortalSpinner>
    )
}

function PortalSpinner(props) {
    return ReactDOM.createPortal(
        props.children,
        document.body
    );
}

export default Spinner;
