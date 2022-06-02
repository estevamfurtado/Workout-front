import {useEffect, useContext, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {AppContext} from "../../../contexts/App";
import {
    FillHeight,
    FlexVertical,
    FillWidth,
    FlexHorizontal,
    FlexLoose,
    FlexHard,
} from "../../../utils/Styles";

const Wrapper = styled.div`
    ${[FlexHorizontal, FillWidth]}
    gap: 1rem;
`;
const WrapperLeft = styled.div``;
const WrapperRight = styled.div`
    ${[FlexVertical, FlexLoose]}
    gap: 0.5rem;
`;

const Movement = styled.div`
    ${[FlexHorizontal, FillWidth]}
    gap: 1rem;
    justify-content: space-between;
`;
const MovementName = styled.div`
    ${[FlexLoose]}
`;
const MovementRight = styled.div`
    ${[FlexHorizontal]}
    gap: 0.2rem;
    width: 150px;
    justify-content: flex-end;
    align-items: center;
`;
const Input = styled.input`
    width: 50px;
    font-size: 18px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #ccc;
    ::placeholder {
        font-size: 12px;
        color: #999;
    }
    :focus {
        outline: none;
    }
`;

export default function Set({sets, movements, index}) {
    const movementsElements = movements.map((movement, index) => {
        return (
            <Movement key={index}>
                <MovementName>{movement.name}</MovementName>
                <MovementRight>
                    <Input
                        type="number"
                        placeholder="reps"
                        value={sets[index][index].reps}
                    />
                    <div>x</div>
                    <Input
                        type="number"
                        placeholder="weight"
                        value={sets[index][index].weight}
                    />
                </MovementRight>
            </Movement>
        );
    });

    return (
        <Wrapper>
            <WrapperLeft>{`${index + 1}`}</WrapperLeft>
            <WrapperRight>{movementsElements}</WrapperRight>
        </Wrapper>
    );
}
