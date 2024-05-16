import { fetchEvents } from 'api/api';
import EventList from 'components/EventList/EventList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [select, setSelect] = useState('');

  const bottomBoundaryRef = useRef(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchEvents(page);
      setEvents(prevEvents => [...prevEvents, ...data.events]);
      const isLoadMore = page < Math.ceil(data.totalEvents / 9);
      if (!isLoadMore) {
        toast('Events are over');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          setPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    const currentRef = bottomBoundaryRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loading]);

  const onChange = e => {
    if (!e) return;
    setSelect(e.value);
  };

  const sortedList = [...events].sort((event1, event2) => {
    switch (select) {
      case 'name':
        return event1.title.localeCompare(event2.title);
      case 'date':
        return new Date(event1.event_date) - new Date(event2.event_date);
      case 'organizer':
        return event1.organizer.localeCompare(event2.organizer);
      default:
        return 0;
    }
  });

  return (
    <div>
      <h1>Upcoming Events</h1>
      {error && <p>{error}</p>}

      {events.length > 0 && (
        <>
          <Filter onChange={onChange} />
          <ul>
            {sortedList.map(event => (
              <EventList key={event._id} event={event} />
            ))}
          </ul>
          <div ref={bottomBoundaryRef}></div>
          {loading && <Loader />}
        </>
      )}
    </div>
  );
};

export default Home;
