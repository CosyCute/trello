import React, {useState} from 'react';
import CreateBoard from './CreateBoard';
import StartBoard from './StartBoard';
import exit_png from '../assets/png/262037.png';    
import NewBoard from './NewBoard';
import red_exit_png from '../assets/png/red-x.png'
const MainMenu = (props) => {

    const createBoard = (value, index) => {
        props.setBoards([...props.boards, {title: value, id: props.boards.length + 1}])
        setMenuCondition('start-board');
    }

    const [menu, setMenu] = useState("start-board");

    const setMenuCondition = (condition) =>{setMenu(condition);} 
    
    const changeMenu = () => {
        switch(menu){
            case "start-board":
                return <StartBoard 
                setMenuCondition={setMenuCondition}/>;  
            case "creating-board": 
                return <CreateBoard 
                createBoard={createBoard} 
                exit_png={exit_png} 
                setMenuCondition={setMenuCondition}/>
            case "item-board": 
                console.log(231);
                break;
            default: console.log("error");
    }
}
    return (
        <div className="main-menu">
            {changeMenu()}
            {props.boards.map((e) => <NewBoard 
            remove={props.remove}
            board={e} 
            red_x={red_exit_png} 
            change={props.change}
            key={e.id}/>)}
        </div>
    );
}
export default MainMenu;