import {
  ActionContainer,
  ActionLink,
  Info,
  InfoContainer,
  ListItem,
  Title,
} from './EventList.styled';

const EventList = ({ event }) => {
  const { _id, title, description, eventDate, organizer } = event;
  return (
    <ListItem>
      <div>
        <Title>{title}</Title>
        <InfoContainer>
          <Info>{eventDate}</Info>
          <Info>{organizer}</Info>
        </InfoContainer>
      </div>
      <p>{description}</p>
      <ActionContainer>
        <ActionLink to={`event/${_id}/register`}>Register</ActionLink>
        <ActionLink to={`event/${_id}`}>View</ActionLink>
      </ActionContainer>
    </ListItem>
  );
};

export default EventList;
