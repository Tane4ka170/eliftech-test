import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchEvents } from '../../redux/eventApi/operations';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const eventList = events.map(event => {
    const { _id, title, description, eventDate, organizer } = event;

    return (
      <li key={_id}>
        <div>
          <h3>{title}</h3>
          <div>
            <p>{eventDate}</p>
            <p>{organizer}</p>
          </div>
        </div>
        <p>{description}</p>
        <div>
          <NavLink to={`registration/${_id}`}>Register</NavLink>
          <NavLink to={`participants/${_id}`}>View</NavLink>
        </div>
      </li>
    );
  });

  return eventList;
};

export default EventList;
