import React, {useState} from 'react';
import CreateBoard from './CreateBoard';
import StartBoard from './StartBoard';
import exit_png from '../assets/png/262037.png';
import { Context } from '../context';
import NewBoard from './NewBoard';
import red_exit_png from '../assets/png/red-x.png'
const MainMenu = (props) => {

    let flag = true;
        const changeFlag = () => {
        flag = !flag;
        setStartBoard(!flag);
    }
    const createBoard = (value, index) => {
        props.setBoards([...props.boards, {title: value, id: props.boards.length + 1}])
        changeFlag();
    }

    const [startBoard, setStartBoard] = useState(true);

    return (
        <div className="main-menu">
            {startBoard
                ?<StartBoard changeFlag={changeFlag}/>
                :<CreateBoard createBoard={createBoard} exit_png={exit_png} changeFlag={changeFlag}/>
            }
            {props.boards.map((e, index) => <NewBoard 
            remove={props.remove}
            board={e} 
            red_x={red_exit_png} 
            title={e.title} 
            index={index}
            key={e.id}/>)}
        </div>
    );
};

export default MainMenu;