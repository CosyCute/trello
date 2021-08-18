import React from 'react';
import check_mark from'../assets/png/check-mark.png'
const ListItems = (props) => {
    return (
        <div className="card-item">
            <h3>{props.point}</h3>
            <img src={check_mark}/>
        </div>
    );
};

export default ListItems;