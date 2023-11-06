import React, { useEffect } from 'react';
import Goal from './Goal';
import GoalList from './GoalList.json';
import { useState } from 'react';

function GoalItemList() {
  const [goalList, setGoalList] = useState(GoalList);

  useEffect(() => {
    console.log('변경됨!');
    console.log(goalList);
  }, [goalList]);

  return (
    goalList.map(item => {
      return <Goal
      key={item.title}
      title={item.title}
      importance={item.importance}
      deadline={item.deadline}
      explanation={item.explanation}
      onClick={() => {
        if(window.confirm('삭제하시겠습니까?')) {
          setGoalList(goalList.filter((element) => element.title !== item.title))
        }
      }}
      />;
    })
  );
}

export default GoalItemList;