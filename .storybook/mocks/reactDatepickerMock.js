import React from 'react';

const DatePicker = ({ onChange, selected }) => {
    return <input type="date" onChange={(e) => onChange(e.target.value)} value={selected} />;
};

export default DatePicker;
