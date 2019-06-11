import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Datepicker = () => {
    return (
        <DayPicker
            format="DD/MM/YYYY"    
            placeholder="DD/MM/YYYY"
            component={props => <input className="form-control-sm form-control" {...props} />}
        />
    );
}

export default Datepicker;