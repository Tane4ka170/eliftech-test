import { fetchEvents } from 'api/api';
import EventList from 'components/EventList/EventList';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import {
  BottomBoundary,
  ErrorMessage,
  EventsContainer,
  ListContainer,
  MainContainer,
  Title,
} from './Home.styled';

const fetchData = async (page, setEvents, setIsLoading, setPage, setError) => {
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

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [select, setSelect] = useState('');

  const bottomBoundaryRef = useRef(null);

  useEffect(() => {
    fetchData(page, setEvents, setIsLoading, setPage, setError);
  }, [page, setEvents, setIsLoading, setPage, setError]);

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
  }, [loading, setPage]);

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
    <MainContainer>
      <Title>Upcoming Events</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {events.length > 0 && (
        <EventsContainer>
          <Filter onChange={onChange} />
          <ListContainer>
            {sortedList.map(event => (
              <EventList key={event._id} event={event} />
            ))}
          </ListContainer>
          <BottomBoundary ref={bottomBoundaryRef}></BottomBoundary>
          {loading && <Loader />}
        </EventsContainer>
      )}
    </MainContainer>
  );
};

export default Home;
