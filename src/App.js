import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContextProvider } from './contexts/App';
import Structure from './components/Structure';
import Workouts from './components/pages/Workouts';
import Workout from './components/pages/Workout';
import Exercises from './components/pages/Exercises';
import Exercise from './components/pages/Exercise';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Structure />}>
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:workoutId" element={<Workout />} />
            <Route path="/workouts/edit/" element={<Workouts />} />
            <Route path="/workouts/edit/:workoutId" element={<Workouts />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:exerciseId" element={<Exercise />} />
            <Route path="/exercises/edit/" element={<Workouts />} />
            <Route path="/exercises/edit/:workoutId" element={<Workouts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
