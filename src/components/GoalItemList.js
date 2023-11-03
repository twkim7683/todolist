import React from 'react';
import Goal from './Goal';
//import { useState } from 'react';

function GoalItemList() {
  const goalList = [
    {
      "title": '독서',
      "importance": 0,
      "deadline": undefined,
      "explanation": "꾸준히 책 읽기"
    },
    {
      "title": '운동',
      "importance": 0,
      "deadline": undefined,
      "explanation": "꾸준히 운동하기"
    }
  ]
  return (
    goalList.map(item => {
      return <Goal key={item.title} title={item.title} importance={item.importance} deadline={item.deadline} explanation={item.explanation} />;
    })
  );
}

export default GoalItemList;