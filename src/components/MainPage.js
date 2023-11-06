import React from 'react'
import GoalItemList from './GoalItemList'
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();
    return (
    <div>
        <h1 style={{ textAlign: 'center'}}>태우의 To Do List</h1>
        <Button
            title="create"
            onClick={() => {
                navigate('/create');
            }}
        />
        <GoalItemList />
    </div>
    );
}

export default MainPage

