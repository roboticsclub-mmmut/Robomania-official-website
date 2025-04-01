import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from './Pages/HomePage/HomePage';
import EventsPage from './Pages/EventsPage/EventsPage';
import WorkshopsPage from './Pages/WorkshopPage/Workshop';
import TeamsPage from './Pages/TeamsPage/TeamsPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import CladdingCode from './Pages/EventsPage/Events/CladdingCode';
import ElectroNfs from './Pages/EventsPage/Events/ElectroNfs';
import ElectronicArt from './Pages/EventsPage/Events/ElectronicArt';
import ElectronicChess from './Pages/EventsPage/Events/ElectronicChess';
import BombDiffusion from './Pages/EventsPage/Events/BombDiffusion';
import LaserStrike from './Pages/EventsPage/Events/LaserStrike';
import Sherlocked from './Pages/EventsPage/Events/Sherlocked';
import WebQuest from './Pages/EventsPage/Events/WebQuest';
import Robowar from './Pages/EventsPage/Events/Robowar';
import Robosoccer from './Pages/EventsPage/Events/Robosoccer';
import DroneSymposium from './Pages/EventsPage/Events/DroneSymposium';
import ETekken from './Pages/EventsPage/Events/ETekken';
import Maze from './Pages/EventsPage/Events/ElectronicMaze';
import HH from './Pages/EventsPage/Events/hh';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="team" element={<TeamsPage />} />
        <Route path="workshops" element={<WorkshopsPage />}/>
        <Route path="electrotekken" element={<ETekken />}/>
        <Route path="electronfs" element={<ElectroNfs />}/>
        <Route path="electronicart" element={<ElectronicArt />}/>
        <Route path="ElectronicMaze" element={<Maze />}/>
        <Route path="electronicchess" element={<ElectronicChess />}/>
        <Route path="bombdiffusion" element={<BombDiffusion />}/>
        <Route path="laserstrike" element={<LaserStrike />}/>
        <Route path="sherlocked" element={< Sherlocked/>}/>
        <Route path="webquest" element={<WebQuest />}/>
        <Route path="robowar" element={<Robowar />}/>
        <Route path="robosoccer" element={<Robosoccer />}/>
        <Route path="HoverHawk" element={<HH />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
