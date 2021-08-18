import React from 'react';

const StartBoard = (props) => {
    return (
      <div onClick={() => props.changeFlag()} className="startBoard board-size board">
        <h3>Create new board...</h3>
      </div>
    );
};

export default StartBoard;