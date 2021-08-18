import React, {useState} from 'react';
const CreateBoard = (props) => {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="CreateBoard board">
            <div className="create-board-head">
                <h3>Creating a board</h3>
                <img onClick={() => props.changeFlag()} src={props.exit_png} alt="exit"/>
            </div>
            <div className="create-board-main">
                <h4>What shall we call the board?</h4>
                <input onChange={(e)=> setInputValue(e.target.value)} type="text"/>
            </div>
            <div className="create-board-foot">
                <button onClick={() => props.changeFlag()}>CANCEL</button>
                <button onClick={() => props.createBoard(inputValue)}>CREATE</button>
            </div>
        </div>
    );
};

export default CreateBoard;