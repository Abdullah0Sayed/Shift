function FilterInputCheckBox(props) {
    return (

        <>
        
                   
                    <div class="checkbox">
                        <label for={props.labelFor} className='check-box-label'>{props.label}</label>
                        <input type="checkbox" name={props.inputName} value="" id={props.labelFor} />
                    </div>
        </>
    );
}


export default FilterInputCheckBox;