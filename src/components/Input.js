import '../css/input.css';
import { useState } from "react";

function Input(props) {

    let [first_name , setFirstName] = useState('');
    let [last_name , setLastName] = useState('');
    let [email , setEmail] = useState('');
    let [mobile_number , setMobileNumber] = useState('');
    let [query_for , setQueryFor] = useState('');


    return (
        <>
        
        <div class="form-floating mb-3">
            <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder} onChange={(e)=>{
                if(props.id == 'firstname') {
                    setFirstName(e.target.value);
                    console.log(first_name);
                }
                else if (props.id == 'lastname') {
                    setLastName(e.target.value);
                    console.log(last_name);
                }
                else if (props.id == 'email') {
                    setEmail(e.target.value);
                    console.log(email);
                }
                else if (props.id == 'mobile') {
                    setMobileNumber(e.target.value);
                    console.log(mobile_number);
                }
                else if (props.id == 'subject') {
                    setQueryFor(e.target.value);
                    console.log(query_for);
                }
                
            }}/>
            <label for={props.inputFor}>{props.label}</label>
        </div>
        </>

    );
}

export default Input;
