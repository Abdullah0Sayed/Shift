import '../css/input.css';
import { useState } from "react";

function Input(props) {

    const { type, id, placeholder, inputFor, label, value, onChange } = props;

    return (
        <>

            <div class="form-floating mb-3">
                <input type={type}
                    className="form-control"
                    name={id}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    required />
                <label for={props.inputFor}>{props.label}</label>
            </div>
        </>

    );
}


export default Input;
