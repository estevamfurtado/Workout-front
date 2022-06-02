import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {
    FillHeight,
    FlexVertical,
    FillWidth,
    FlexLoose,
    FlexHard,
} from "../utils/Styles";

const Wrapper = styled.div`
    ${[FlexVertical, FillHeight, FillWidth, FlexHard]}
`;

const Main = styled.main`
    ${[FlexVertical, FillWidth, FlexLoose]}
`;

const Nav = styled.nav`
    ${[FillWidth, FlexHard]};
    height: 60px;
    border-top: 1px solid #e6e6e6;
`;

export default function Structure() {
    return (
        <Wrapper>
            <Main>
                <Outlet />
            </Main>
            <Nav />
        </Wrapper>
    );
}
