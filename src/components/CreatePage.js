import React from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import CreateGoal from './CreateGoal';
import goalList from './GoalList.json';

function CreatePage() {
  const navigate = useNavigate();
  return (
    <div>
        <Button
            title="Home"
            onClick={() => {
                navigate('/');
            }}
        />
        <br />
        <CreateGoal goalList={goalList} />
    </div>
  );
}

export default CreatePage