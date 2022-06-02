import styled from "styled-components";
import {FillHeight, FlexVertical, FillWidth} from "../../../utils/Styles";

const Wrapper = styled.div`
    ${[FlexVertical, FillHeight, FillWidth]}
    background-color: white;
`;

export default function Exercises() {
    return <Wrapper></Wrapper>;
}
