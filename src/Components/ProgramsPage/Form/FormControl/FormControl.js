import './FormControl.css';

function FormControl(props) {
    const { element, type, label, id, data, addClass, value } = props;
    if (!data) {
        return "";
    }
    if (element && element === "select") {
        return (
            <div className="form-control">
                <label htmlFor="course-select">{label}</label>
                <select id={id}>
                    {data.map((option, index) => {
                        return <option key={index}>{option}</option>;
                    })}
                </select>
            </div>
        );
    }

    if (element && element === "input" && type === "checkbox") {
        return (
            <>
                {data.map((option, index) => (
                    <div className="form-control" key={index}>
                        <label htmlFor={`time-variation-${index + 1}`}>
                            {option}
                        </label>

                        <input type={type} id={`time-variation-${index + 1}`} value={option} />
                    </div>
                ))}
            </>
        );
    }

    if(element && element === 'input') {
        return(
            <input className={ addClass } type={ type } value={ value }></input>
        )
    }
}
export default FormControl;
