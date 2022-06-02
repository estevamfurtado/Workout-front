import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {
    FillHeight,
    FlexVertical,
    FillWidth,
    FlexHorizontal,
} from "../../../utils/Styles";

dayjs.extend(customParseFormat);

const Wrapper = styled.div`
    ${[FlexVertical]}

    background-color: white;

    gap: 10px;

    h3 {
        font-size: 12px;
        font-weight: 600;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
    }

    border: 1px solid #ddd;
    border-radius: 3px;

    padding: 10px;
`;

export default function WorkoutThumb({workout}) {
    const navigate = useNavigate();
    const date = dayjs(workout.date, "DD-MM-YYYY");

    return (
        <Wrapper
            color={workout.color}
            onClick={() => {
                navigate(`/workouts/${workout.id}`);
            }}
        >
            <h3>{date.format("MMM DD, YYYY")}</h3>
            <h1>{workout.name}</h1>
            <p>{`${workout.exercises.length} exercícios`}</p>
        </Wrapper>
    );
}
