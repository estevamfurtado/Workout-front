import {useEffect, useContext, useState} from "react";
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
import Set from "./Set";
import SimpleSets from "./SimpleSets";

const Wrapper = styled.div`
    ${[FlexVertical, FillWidth]}
    padding: 1rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    gap: 0.5rem;
`;

const Header = styled.div`
    ${[FlexHorizontal, FillWidth]}
    gap: 0.5rem;
    justify-content: space-between;
    h1 {
        font-weight: bold;
        font-size: 16px;
        flex: 1 1 auto;
    }
    p {
        flex: 0 0 auto;
    }
`;

const Section = styled.div`
    ${[FlexVertical, FillWidth]}
    align-items: flex-start;
    gap: 0.5rem;
    border: 1px solid #eee;
    border-radius: 5px;
    h4 {
        font-size: 11px;
        color: #999;
        padding: 0.5rem;
    }
`;

const SectionHide = styled.div`
    ${[FlexVertical, FillWidth]}
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0 0.5rem 0.5rem 0.5rem;
`;

const InfoHide = styled.div`
    ${[FlexVertical, FillWidth]}
    align-items: flex-start;
    gap: 0.5rem;
`;

const MovementsRow = styled.div`
    ${[FlexHorizontal, FillWidth]}
    gap: 0.5rem;
    align-items: flex-start;
`;

const AddMovementButton = styled.div`
    ${[FlexVertical]}
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 50px;
    height: 50px;
`;

const MovementThumb = styled.div`
    ${[FlexVertical]}
    width:80px;
    gap: 0.5rem;
    font-size: 12px;
    text-align: center;
`;
const MovementImage = styled.img`
    ${[FlexVertical]}
    height: 80px;
    border-radius: 5px;
    background-color: gray;
    overflow: hidden;
    object-fit: cover;
    justify-content: center;
    align-items: center;
`;

const Sets = styled.div`
    ${[FlexVertical, FillWidth]}
    gap: 0.5rem;
    align-items: flex-start;
`;

const SetsButtons = styled.div`
    ${[FlexHorizontal, FillWidth]}
    align-items: flex-start;
    gap: 0.25rem;
`;

const AddSetButton = styled.div`
    ${[FlexHorizontal]}
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 30px;
`;

const RemoveSetButton = styled.div`
    ${[FlexHorizontal]}
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 30px;
`;

const Feedback = styled.div`
    ${[FlexVertical, FillWidth]}
    gap: 0.5rem;
`;

const RpeFeedback = styled.div`
    ${[FlexHorizontal, FillWidth]}
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.5rem;
`;

const Feelings = styled.div`
    ${[FlexHorizontal, FillWidth]}
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
`;
const Feeling = styled.div`
    ${[FlexVertical]};
    padding: 0.5rem;
    background-color: rgba(30, 30, 150, 0.05);
    border-radius: 5px;
`;

const StatusButtons = styled.div`
    ${[FlexHorizontal, FillWidth]}

    gap: 0.5rem;
    justify-content: flex-end;

    > * {
        padding: 0.5rem;
        border-radius: 5px;
    }
`;

const DeleteButton = styled.div``;

const SkipButton = styled.div``;

const FinishButton = styled.div`
    background-color: rgba(0, 0, 0, 0.1);
`;

export default function ExerciseThumb({exerciseId}) {
    const [isComplex, setIsComplex] = useState(false);

    const {exercises, movements} = useContext(AppContext);
    const [exercise, setExercise] = useState(null);
    const [exerciseMovements, setExerciseMovements] = useState(null);

    const [isSimple, setIsSimple] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [showMovements, setShowMovements] = useState(false);
    const [showSets, setShowSets] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (!exercise) {
            const foundExercise = exercises.find(
                (exercise) => exercise.id === exerciseId
            );
            setExercise(foundExercise);
        } else {
            const foundExerciseMovements = movements.filter((movement) => {
                return exercise.movements.indexOf(movement.id) > -1;
            });
            setExerciseMovements(foundExerciseMovements);
        }
    }, [exercise]);

    const simpleSets =
        exercise && exerciseMovements ? (
            <SimpleSets sets={exercise.sets} movements={exerciseMovements} />
        ) : (
            <></>
        );

    const complexSets =
        exercise && exerciseMovements ? (
            exercise.sets.map((set, index) => {
                return (
                    <Set
                        key={index}
                        sets={exercise.sets}
                        movements={exerciseMovements}
                        index={index}
                    />
                );
            })
        ) : (
            <></>
        );

    const setsElements = isSimple ? simpleSets : complexSets;

    const movementsElements = exerciseMovements ? (
        exerciseMovements.map((movement, index) => {
            return (
                <MovementThumb key={index}>
                    <MovementImage
                        src={`${
                            movement.images && movement.images.length > 0
                                ? movement.images[0]
                                : ""
                        }`}
                    />
                    <div>{movement.name}</div>
                </MovementThumb>
            );
        })
    ) : (
        <> </>
    );

    const details = exercise
        ? `🔄 ${exercise.sets.length} | ⚡ ${exercise.targetRPE} | ⏰ ${exercise.restBetweenSets}s`
        : "";

    function nameGenerator() {
        let name = "Exercício...";
        if (exercise) {
            if (exercise.name) {
                name = exercise.name;
            } else if (exerciseMovements) {
                name = exerciseMovements
                    .map((movement) => movement.name)
                    .join(", ");
                let add = "";
                if (exerciseMovements.length > 1) {
                    if (exercise.type === "alt") {
                        add = "Alternado: ";
                    } else {
                        add = "Conjugado: ";
                    }
                }
                name = add + name;
            }
        }
        return name;
    }

    const title = nameGenerator();

    return (
        <Wrapper>
            <Header
                onClick={() => {
                    setShowMore(!showMore);
                }}
            >
                <h1>{title}</h1>
                <p>{details}</p>
            </Header>

            {showMore ? (
                <InfoHide>
                    <Section>
                        <h4
                            onClick={() => {
                                setShowMovements(!showMovements);
                            }}
                        >
                            MOVEMENTS
                        </h4>
                        {showMovements ? (
                            <SectionHide>
                                <MovementsRow>
                                    {movementsElements}
                                    <AddMovementButton>+</AddMovementButton>
                                </MovementsRow>
                            </SectionHide>
                        ) : (
                            <></>
                        )}
                    </Section>
                    <Section>
                        <h4
                            onClick={() => {
                                setShowSets(!showSets);
                            }}
                        >
                            SETS
                        </h4>
                        {showSets ? (
                            <SectionHide>
                                {setsElements}
                                <SetsButtons>
                                    <RemoveSetButton>-</RemoveSetButton>
                                    <AddSetButton>+</AddSetButton>
                                </SetsButtons>
                            </SectionHide>
                        ) : (
                            <></>
                        )}
                    </Section>
                    <Section>
                        <h4
                            onClick={() => {
                                setShowFeedback(!showFeedback);
                            }}
                        >
                            FEEDBACK
                        </h4>
                        {showFeedback ? (
                            <SectionHide>
                                <RpeFeedback>
                                    <Feelings>
                                        <Feeling>😴</Feeling>
                                        <Feeling>😅</Feeling>
                                        <Feeling>😉</Feeling>
                                        <Feeling>🥵</Feeling>
                                        <Feeling>😵</Feeling>
                                        <Feeling>🤮</Feeling>
                                        <Feeling>🤕</Feeling>
                                    </Feelings>
                                </RpeFeedback>
                            </SectionHide>
                        ) : (
                            <></>
                        )}
                    </Section>

                    <StatusButtons>
                        <DeleteButton>Delete</DeleteButton>
                        <SkipButton>Skip</SkipButton>
                        <FinishButton>Check</FinishButton>
                    </StatusButtons>
                </InfoHide>
            ) : (
                <></>
            )}
        </Wrapper>
    );
}
