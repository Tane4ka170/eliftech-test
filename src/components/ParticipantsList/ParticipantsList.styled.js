import styled from 'styled-components';

export const ParticipantListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: space-between;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ParticipantDetail = styled.div`
  margin: 0;
  color: #666;
`;

export const ParticipantName = styled.p`
  margin-bottom: 10px;
  color: #3c5bb0;
`;

export const ParticipantEmail = styled.p`
  color: #6c757d;
`;
