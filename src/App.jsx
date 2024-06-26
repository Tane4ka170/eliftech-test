import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Event from 'pages/Event/Event';
import Register from 'pages/Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="event/:id" element={<Event />} />
        <Route path="event/:id/register" element={<Register />} />
      </Route>
    </Routes>
  );
};
