import React from 'react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import UpdateGoal from './UpdateGoal';

function UpdatePage() {
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
        <span>업데이트 예정!</span>
        <br />
        <UpdateGoal />
    </div>
  );
}

export default UpdatePage;