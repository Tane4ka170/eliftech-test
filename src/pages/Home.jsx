import EventList from 'components/EventList/EventList';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchEvents } from '../redux/eventApi/operations';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(false);
  const [select, setSelect] = useState('');
  const [loading, setIsloading] = useState(false);
  const [counter, setCounter] = useState(1);

  const loadMoreEvents = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  useEffect(() => {
    const receiveData = async () => {
      setIsloading(true);
      try {
        const data = await fetchEvents(counter);
        setEvents(prevEvents => [...prevEvents, ...data.events]);

        const isEnd = counter < Math.ceil(data.totalEvents / 9);

        setTotalPages(isEnd);
        if (!isEnd) {
          toast('The events are about to end.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    receiveData();
  }, [counter]);

  const modify = e => {
    if (!e) return;

    setSelect(e.value);
  };

  const sortFunctions = {
    name: (event1, event2) => event1.label.localeCompare(event2.label),
    date: (event1, event2) =>
      new Date(event1.start_date) - new Date(event2.start_date),
    organizer: (event1, event2) => event1.owner.localeCompare(event2.owner),
  };

  const rearrangedList = [...events].sort((event1, event2) => {
    const chosen = select;
    const sortFunction = sortFunctions[chosen];

    if (sortFunction) {
      return sortFunction(event1, event2);
    } else {
      return events;
    }
  });

  return (
    <div>
      <h1>Events</h1>
      {error && <p>error</p>}

      {events.length > 0 && (
        <>
          {/* <Filter onChange={onChange} /> */}
          <EventList events={rearrangedList} />
          {/* {totalPages && <div ref={ref}></div>} */}
        </>
      )}
    </div>
  );
};

export default Home;
