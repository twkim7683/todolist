import React from 'react'
import GoalItemList from './GoalItemList'
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();
    return (
    <div>
        <Button
            title="update"
            onClick={() => {
                navigate('/update');
            }}
        />
        <GoalItemList />
    </div>
    );
}

export default MainPage

