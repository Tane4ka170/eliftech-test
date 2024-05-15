import { NavLink } from 'react-router-dom';

const EventList = ({ event }) => {
  const { _id, title, description, eventDate, organizer } = event;
  return (
    <li>
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
};

export default EventList;
