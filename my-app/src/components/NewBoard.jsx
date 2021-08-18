import React from 'react';

const NewBoard = (props) => {
    return(
        <div className="board-list">
            <div className="board board-size">
                <h3>{props.title}</h3>
                <img onClick={() => props.remove(props.board)} className="red-x" src={props.red_x}/>
            </div>
        </div>
    );
};

export default NewBoard;