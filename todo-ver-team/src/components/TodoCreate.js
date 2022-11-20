import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #8C8C8C;

  z-index: 5;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  position: absolute;
  left: 50%;
  bottom: 0px;

  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;


  top: 100px;
  right: px; 
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: black;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-bottom: 2px solid #2F9D27;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  background: black;
  outline: none;
  color:white;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
        type: 'CREATE',
        todo: {
            id: nextId.current,
            text: value,
            done: false
        }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };


  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit = {onSubmit}>
            <Input 
                autoFocus 
                placeholder="할 일을 입력 후, Enter 를 누르세요" 
                onChange = {onChange}
                value = {value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);