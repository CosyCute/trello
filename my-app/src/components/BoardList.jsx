import React, {useState} from 'react';
import ListItems from './ListItems';
const BoardList = (props) => {
    
    const [cardPoints, setCardPoints] = useState([]);

    const addPoint = (e) =>{
        setCardPoints([...cardPoints, e])
    }
    return (
        <div>
            <div className="list border">
                <div className="card">
                    <h3>{props.list}</h3>
                    <input onKeyDown={(e) => {if (e.key === "Enter") addPoint(e.target.value)}}/>
                    {cardPoints.map((e) => <ListItems cardPoints={cardPoints} point={e}/>)}
                </div>
            </div>
        </div>
    );
};

export default BoardList;