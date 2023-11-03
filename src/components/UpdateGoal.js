import React from 'react';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100%-32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function UpdateGoal() {
    const [title, setTitle] = useState("");
    const [importance, setImportance] = useState("");
    const [deadline, setDeadline] = useState("");
    const [explanation, setExplanation] = useState("");
    
    return (
    <Wrapper>
        UpdateGoal
        <TextInput
            height={20}
            value={title}
            onChange={(event) => {
                setTitle(event.target.value);
                console.log(event.target.value);
            }}
            placeholder="제목"
        />
        <TextInput
            height={20}
            value={importance}
            onChange={(event) => {
                setImportance(event.target.value);
            }}
            placeholder="중요도"
        />
        <TextInput
            height={20}
            value={deadline}
            onChange={(event) => {
                setDeadline(event.target.value);
            }}
            placeholder="마감기한"
        />
        <TextInput
            height={80}
            value={explanation}
            onChange={(event) => {
                setExplanation(event.target.value);
            }}
            placeholder="상세 설명"
        />
        <Button
            title="추가"
            onClick
        />
    </Wrapper>
    )
}

export default UpdateGoal