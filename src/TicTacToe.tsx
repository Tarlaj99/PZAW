import { useState, useEffect,  } from "react";
import Field from "./Field";
export default function TicTacToe(){
    const [symbole, setSymbole] = useState('X');
    const [winning_fields, setWinning_fields] = useState<number[]>([]);

    const [Fields, setFields] = useState<string[]>(['','','','','','','','','']);

    function check_up_down(id){
        let second_field;
        let third_field; 

        if(id <= 2){
            second_field = id + 3;
            third_field = id + 6;
        }
        else if(id > 2 && id <= 5){
            second_field = id - 3; 
            third_field = id + 3;
        }
        else if(id >= 6){
            second_field = id - 3;
            third_field = id - 6;
        }
        if(Fields[id] === Fields[second_field] && Fields[second_field] === Fields[third_field]){
            return [id, second_field, third_field];
        }
        return false;
    }
    function check_left_right(id){
        let second_field;
        let third_field; 

        if(id % 3 === 0){
            second_field = id + 1;
            third_field = id + 2;
        }
        else if(id % 3 === 1){
            second_field = id - 1; 
            third_field = id + 1;
        }
        else if(id % 3 == 2){
            second_field = id - 1;
            third_field = id - 2;
        }
        if(Fields[id] === Fields[second_field] && Fields[second_field] === Fields[third_field]) {
            return [id, second_field, third_field];
        }
        return false;
    }
    function check_corners(id){
        let second_field;

        if(Fields[id] !== Fields[4]){ // 4 is the middle field
            return false;
        }

        if(id === 0){
            second_field = 8;
        }
        else if(id === 2){
            second_field = 6;
        }
        else if(id === 8){
            second_field = 0;
        }
        else if(id === 6){
            second_field = 2;
        }
        
        if(Fields[id] === Fields[second_field]){
            return [id, second_field, 4];
        }
        return false;
    }
    function check(id){
        return check_up_down(id) || check_left_right(id) || check_corners(id);
    }
    function reset(){
        for(let i: number = 0; i < Fields.length; i++){
            Fields[i] = '';
        }
        setWinning_fields([]);
    }
    function handleField(field_id: number){
        if(Fields[field_id] !== '')
            return;

        Fields[field_id] = symbole;
       
        setSymbole(symbole == 'X' ? 'O' : 'X');

        let check_test = check(field_id);
        if(check_test) setWinning_fields(check_test);
    }
    
    return (
    <>
        <div className="TicTacToe">
        {
            Fields.map((element, index) => (
                winning_fields.includes(index)
                ? 
                <Field id={index} func={handleField} text={element} style={{backgroundColor: 'rgb(24, 172, 24)'}}/>
                :
                <Field id={index} func={handleField} text={element}/>
            ))
        }
        </div>
        <button onClick={reset}>Reset</button>
    </>
    )
}