import '../css/input.css';


function Input(props) {
    return (
        <>
        
        <div class="form-floating mb-3">
            <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder}/>
            <label for={props.inputFor}>{props.label}</label>
        </div>
        </>

    );
}

export default Input;