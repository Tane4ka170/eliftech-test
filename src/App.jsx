import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Event from 'pages/Event';
import Register from 'pages/Register';

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
