import { React, useState, createContext } from "react";

export const AppContext = createContext();


const movementsInicial = [
    { name: "Bench Press", id: 1, muscles: ["chest"], equipment: ["barbell"], description: "", maxWeight: 60, lastWeight: 55, images: ["https://cdn.mos.cms.futurecdn.net/pLaRi5jXSHDKu6WRydetBo-1200-80.jpg"] },
    { name: "Dumbbell Fly", id: 2, muscles: ["chest"], equipment: ["dumbbell"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Dumbbell Press", id: 3, muscles: ["chest"], equipment: ["dumbbell"], description: "", maxWeight: 60, lastWeight: 55, images: ["https://cdn.mos.cms.futurecdn.net/8xssFNxSwVRBkG7ztzcufj-1200-80.jpg"] },
    { name: "Incline Bench Press", id: 4, muscles: ["chest"], equipment: ["barbell"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Incline Dumbbell Fly", id: 5, muscles: ["chest"], equipment: ["dumbbell"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Incline Dumbbell Press", id: 6, muscles: ["chest"], equipment: ["dumbbell"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Incline Push-Up", id: 7, muscles: ["chest"], equipment: ["body"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Push-Up", id: 8, muscles: ["chest"], equipment: ["body"], description: "", maxWeight: 60, lastWeight: 55 },

    { name: "Deadlift", id: 9, muscles: ["quads", "harmstrings", "gluteus"], equipment: ["bar"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Dumbbell Walking Lunge", id: 10, muscles: ["quads", "harmstrings", "gluteus"], equipment: ["free weight"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Single-leg Leg Extension", id: 11, muscles: ["quads"], equipment: ["machine"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Single-leg Lying Leg Curl", id: 12, muscles: ["hamstrings"], equipment: ["machine"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Machine Seated Hip Abduction", id: 13, muscles: ["gluteus"], equipment: ["machine"], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Standing Calf Raise", id: 14, muscles: ["calf"], equipment: [], description: "", maxWeight: 60, lastWeight: 55 },
    { name: "Plank", id: 15, muscles: ["abs"], equipment: [], description: "", maxWeight: 60, lastWeight: 55 },
];

const exercisesInicial = [
    {
        id: 1, order: 2, type: "", // '', 'alt'
        movements: [3],
        sets: [
            [{ weight: undefined, reps: 10 }],
            [{ weight: undefined, reps: 10 }],
            [{ weight: undefined, reps: 10 }],
        ],
        restBetweenSets: 60,
        targetRPE: 7,
        RPE: undefined
    },
    {
        id: 2, order: 1, type: "alt",
        movements: [1, 2],
        sets: [
            [{ weight: undefined, reps: 5 }, { weight: undefined, reps: 7 }],
            [{ weight: undefined, reps: 5 }, { weight: undefined, reps: 7 }],
            [{ weight: undefined, reps: 5 }, { weight: undefined, reps: 7 }],
        ],
        restBetweenSets: 60,
        targetRPE: 7,
        RPE: undefined
    },



    {
        id: 9, order: 1, type: "con",
        movements: [9],
        sets: [
            [{ weight: undefined, reps: 5 }],
            [{ weight: undefined, reps: 5 }],
            [{ weight: undefined, reps: 5 }],
        ],
        restBetweenSets: 60 * 3,
        targetRPE: 7,
        RPE: undefined
    },
    {
        id: 10, order: 1, type: "con",
        movements: [10],
        sets: [
            [{ weight: undefined, reps: 10 }],
            [{ weight: undefined, reps: 10 }],
            [{ weight: undefined, reps: 10 }],
        ],
        restBetweenSets: 60 * 2,
        targetRPE: 8,
        RPE: undefined
    },
    {
        id: 11, order: 1, type: "con",
        movements: [11],
        sets: [
            [{ weight: undefined, reps: 15 }],
            [{ weight: undefined, reps: 15 }],
        ],
        restBetweenSets: 60,
        targetRPE: 8,
        RPE: undefined
    },
    {
        id: 12, order: 1, type: "con",
        movements: [12],
        sets: [
            [{ weight: undefined, reps: 15 }],
            [{ weight: undefined, reps: 15 }],
        ],
        restBetweenSets: 60,
        targetRPE: 8,
        RPE: undefined
    },
    {
        id: 13, order: 1, type: "con",
        movements: [13],
        sets: [
            [{ weight: undefined, reps: 15 }],
            [{ weight: undefined, reps: 15 }],
            [{ weight: undefined, reps: 15 }],
        ],
        restBetweenSets: 60,
        targetRPE: 7,
        RPE: undefined
    },
    {
        id: 14, order: 1, type: "con",
        movements: [14],
        sets: [
            [{ weight: undefined, reps: 12 }],
            [{ weight: undefined, reps: 12 }],
            [{ weight: undefined, reps: 12 }],
        ],
        restBetweenSets: 60,
        targetRPE: 8,
        RPE: undefined
    },
    {
        id: 15, order: 1, type: "con",
        movements: [15],
        sets: [
            [{ weight: undefined, reps: 20 }],
            [{ weight: undefined, reps: 20 }],
            [{ weight: undefined, reps: 20 }],
        ],
        restBetweenSets: 60,
        targetRPE: 8,
        RPE: undefined
    }
]

const workoutsInicial = [
    { id: 1, date: '12/03/2021', name: "Legs", color: 'red', exercises: [1, 1], status: "planned", notes: "", completed: false, completedDate: undefined },
    { id: 2, date: '13/03/2021', name: "Arms & chest", color: 'dark-blue', exercises: [1, 2], status: "planned", notes: "", completed: false, completedDate: undefined },
    { id: 3, date: '02/06/2022', name: "Legs & Abs", color: 'black', exercises: [9, 10, 11, 12, 13, 14, 15], status: "planned", notes: "", completed: false, completedDate: undefined }
];

export function AppContextProvider({ children }) {

    const [movements, setMovements] = useState(movementsInicial);
    const [exercises, setExercises] = useState(exercisesInicial);
    const [workouts, setWorkouts] = useState(workoutsInicial);

    return (
        <AppContext.Provider
            value={{ movements, setMovements, exercises, setExercises, workouts, setWorkouts }}
        >
            {children}
        </AppContext.Provider>
    );
}
