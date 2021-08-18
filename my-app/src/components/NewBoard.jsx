import React from 'react';

const NewBoard = (props) => {
    return(
        <div className="board-list">
            <div onClick={() => props.change(props.board)} className="board-title board-size border">
                <h3>{props.board.title}</h3>
            </div>
            <div>
                <img onClick={() => props.remove(props.board)} className="red-x" src={props.red_x} alt="exit"/>
            </div>
        </div>
    );
};

export default NewBoard;