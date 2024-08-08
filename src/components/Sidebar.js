import '../css/sidebar.css';
import FilterInputCheckBox from './FilterInputCheckBox';
function Sidebar() {
    return (
        <div className='sidebar'>

            <form action='' method='' className='filter-form'>
                <div className='filter-by-price'>
                    <h4 className='filter-heading'>التصنيف</h4>
                   <FilterInputCheckBox labelFor="polished" label="ملمع سيارات" inputName="polished" />
                   <FilterInputCheckBox labelFor="Thermalinsulation" label="عازل حراري" inputName="Thermalinsulation" />
                </div>

               
                {/* <div className='filter-by-date-posted'>
                    <h4 className='filter-heading'>المضاف حديثاً</h4>
                   <FilterInputCheckBox labelFor="recent-added" label="أحدث المنتجات" inputName="recent-products" />
                   <FilterInputCheckBox labelFor="add-since-weak" label="مضاف منذ أسبوع" inputName="add-since-weak" />
                   <FilterInputCheckBox labelFor="add-since-month" label="مضاف منذ شهر" inputName="add-since-month" />
                </div> */}
                <hr/>
                <div className='filter-by-range-price'>
                    <h4 className='filter-heading'>مدى السعر ( بالريال السعودي)</h4>
                    <div className='range-price-box'>
                        <div className='range-price-from'>
                            <label for="price-from" className='range-price-label'>من</label>
                            <input type="number" name="price-from" min="1" max="150" placeholder='1' className='input-number-range'/>
                        </div>
                        <div className='range-price-to'>
                            <label for="price-to" className='range-price-label'>حتى</label>
                            <input type="number" name="price-to" min="1" max="150" placeholder='1' className='input-number-range'/>
                        </div>
                    </div>
                   
                </div>
                <hr/>
                <div className='show-results-btn'>
                    <button type="submit" onClick={()=>{}}>إظهار النتائج</button>
                </div>

            </form>
        </div>


    );


}

export default Sidebar;