import {useEffect, useContext, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {AppContext} from "../../../contexts/App";
import {
    FillHeight,
    FlexVertical,
    FillWidth,
    FlexHorizontal,
} from "../../../utils/Styles";
import ExerciseThumb from "./ExerciseThumb";

const Wrapper = styled.div`
    ${[FlexVertical, FillHeight, FillWidth]}
    padding: 1rem;
    gap: 2rem;
`;

const Header = styled.div`
    ${[FlexVertical, FillWidth]}
    gap: 1rem;
    h1 {
        font-size: 24px;
        font-weight: bold;
    }
    h3 {
        font-size: 14px;
    }

    padding-bottom: 1rem;
    // border-bottom: 1px solid #ccc;
`;

const Exercises = styled.div`
    ${[FlexVertical, FillWidth]}
    gap: 1rem;
    align-items: flex-start;
`;

const NewExerciseButton = styled.div`
    ${[FlexVertical]};
    padding: 1rem;
    background-color: rgba(30, 30, 150, 0.05);
    border-radius: 5px;
`;

const Feedback = styled.div`
    ${[FlexVertical, FillWidth]}
    gap: 1rem;
    padding-top: 1rem;
    // border-top: 1px solid #ccc;
    align-items: center;
`;

const Feelings = styled.div`
    ${[FlexHorizontal, FillWidth]}
    flex-wrap: wrap;
    max-width: 50%;
    justify-content: center;
    gap: 0.5rem;
`;
const Feeling = styled.div`
    ${[FlexVertical]};
    padding: 0.5rem;
    background-color: rgba(30, 30, 150, 0.05);
    border-radius: 5px;
`;
const FinishButton = styled.div`
    ${[FlexVertical]};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: rgba(30, 30, 150, 0.05);
`;

export default function Workout() {
    const {workoutId} = useParams();
    const {workouts, setWorkouts} = useContext(AppContext);
    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        const foundWorkout =
            workouts.find((workout) => {
                return workout.id === parseInt(workoutId);
            }) || null;
        setWorkout(foundWorkout);
    }, [workouts]);

    const exercisesElements =
        workout && workout.exercises ? (
            workout.exercises.map((exerciseId, index) => {
                return <ExerciseThumb key={index} exerciseId={exerciseId} />;
            })
        ) : (
            <></>
        );

    return (
        <Wrapper>
            <Header>
                <h3>{workout ? workout.date : "Date"}</h3>
                <h1>{workout ? workout.name : "Workout"}</h1>
            </Header>
            <Exercises>
                {exercisesElements}
                <NewExerciseButton>Add exercise</NewExerciseButton>
            </Exercises>
            <Feedback>
                <Feelings>
                    <Feeling>😴</Feeling>
                    <Feeling>😅</Feeling>
                    <Feeling>👊😉</Feeling>
                    <Feeling>🥵</Feeling>
                    <Feeling>😵</Feeling>
                    <Feeling>🤮</Feeling>
                    <Feeling>🤕</Feeling>
                </Feelings>
                <FinishButton>Finish workout</FinishButton>
            </Feedback>
        </Wrapper>
    );
}
