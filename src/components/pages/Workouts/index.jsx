import {useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {AppContext} from "../../../contexts/App";
import {
    FillHeight,
    FlexVertical,
    FillWidth,
    FlexHorizontal,
} from "../../../utils/Styles";
import WorkoutThumb from "./WorkoutThumb";

const Wrapper = styled.div`
    ${[FlexVertical, FillHeight, FillWidth]}
    align-items: center;
`;

const WorkoutList = styled.div`
    padding: 20px;
    ${[FlexHorizontal, FillWidth]}
    max-width: 500px;
    flex-wrap: wrap;
    gap: 10px;
    > * {
        width: calc(50% - 5px);
        height: 120px;
        // border-radius: 5px;
        cursor: pointer;
    }
`;

const NewButton = styled.div`
    ${[FlexVertical]}
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export default function Workouts() {
    const {workouts, setWorkouts} = useContext(AppContext);
    const navigate = useNavigate();

    const thumbs =
        workouts.length > 0 ? (
            workouts.map((workout, index) => (
                <WorkoutThumb key={index} workout={workout} />
            ))
        ) : (
            <></>
        );

    return (
        <Wrapper>
            <WorkoutList>
                <NewButton
                    onClick={() => {
                        navigate("/workouts/edit");
                    }}
                >
                    New workout
                </NewButton>
                {thumbs}
            </WorkoutList>
        </Wrapper>
    );
}
