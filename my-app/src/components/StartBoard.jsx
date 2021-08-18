import React from 'react';

const StartBoard = (props) => {
    return (
      <div onClick={() => props.setMenuCondition('creating-board')} className="startBoard board-size board-title border">
        <h3>Create new board...</h3>
      </div>
    );
};

export default StartBoard;