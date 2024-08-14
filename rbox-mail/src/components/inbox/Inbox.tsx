import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmails } from '../../redux/emailSlice';
import { RootState, AppDispatch } from '../../store/store';

const Inbox: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  

  const { emails, loading, error } = useSelector((state: RootState) => state.emails);

 
  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div>
      <h1>Inbox</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {emails.map(email => (
          <li key={email.id}>
            <strong>From:</strong> {email.fromName} <br />
            <strong>Subject:</strong> {email.subject} <br />
            <strong>Date:</strong> {new Date(email.sentAt).toLocaleString()} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
