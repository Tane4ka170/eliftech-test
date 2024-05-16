import { getEventParticipants } from 'api/api';
import Input from 'components/Input/Input';
import ParticipantsList from 'components/ParticipantsList/ParticipantsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BackLink,
  ErrorMessage,
  EventContainer,
  ListContainer,
  NoParticipantsMessage,
} from './Event.styled';

const Event = () => {
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventParticipants(id);
        setParticipants(data.participants);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const filteredParticipants = participants.filter(
    participant =>
      participant.fullName.toLowerCase().includes(filter.toLowerCase()) ||
      participant.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <EventContainer>
      <BackLink to="/">Go back</BackLink>
      {participants.length > 0 ? (
        <>
          <Input onChange={e => setFilter(e.target.value)} />
          <ListContainer>
            {filteredParticipants.length > 0 ? (
              <ParticipantsList participants={filteredParticipants} />
            ) : (
              <NoParticipantsMessage>
                No participants match the filter
              </NoParticipantsMessage>
            )}
          </ListContainer>
        </>
      ) : (
        <>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : (
            <NoParticipantsMessage>
              There are no participants for the meeting yet
            </NoParticipantsMessage>
          )}
        </>
      )}
    </EventContainer>
  );
};

export default Event;
