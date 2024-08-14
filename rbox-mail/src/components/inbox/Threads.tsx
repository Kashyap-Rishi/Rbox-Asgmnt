import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmails } from '../../redux/emailSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Container, Typography, Box, IconButton, InputBase,useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ResetIcon from '../../icons/svg/reset';
import SearchIcon from '../../icons/svg/search';
import EmailCard from './ThreadsCard';
import { useThreadContext } from '../../context/ThreadContext';

const Threads: React.FC = () => {
  const theme=useTheme()
  const dispatch = useDispatch<AppDispatch>();
  const { emails, loading, error } = useSelector((state: RootState) => state.emails);
  const { setThreadId } = useThreadContext(); 

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);
console.log(emails);
  const numberOfInboxesSelected = emails.length;

  return (
    <Container style={{ padding: '15px', minHeight: '100vh',borderRight:`1px solid ${theme?.palette?.threads?.borderColor}`,backgroundColor:theme?.palette?.threads?.mainBackground }}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
  <Box display="flex" alignItems="center">
    <Typography
      sx={{
        fontSize: '20px',
        color: '#4285F4',
        lineHeight: '27.24px',
        fontWeight: 700,
      }}
    >
      All Inbox(s)
    </Typography>
    <IconButton>
      <ArrowDropDownIcon sx={{ color: '#4285F4' }} />
    </IconButton>
  </Box>
  
  {/* Adjusted this Box to include padding and background color */}
  <Box 
    sx={{
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
      border:theme?.palette?.threads?.resetBorder,
      backgroundColor: theme?.palette?.threads?.resetBackground, // Example background color
      borderRadius: '4px' // Optional: add some border-radius for a better look
    }}
  >
    
      <ResetIcon />
    
  </Box>
</Box>


      <Box
        sx={{
          display: 'flex',
          fontSize: '14px',
        
          lineHeight: '19.07px',
          fontWeight: 400,
          mb: 1.5,
        }}
      >
        <Typography sx={{ color: theme?.palette?.threads?.mainText, fontWeight: 700, pr: '3px' }}>
          {numberOfInboxesSelected}/25
        </Typography>{' '}
        <Typography sx={{color:theme?.palette?.threads?.inboxText}}>Inboxes selected</Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          height: '28px',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          backgroundColor: theme?.palette?.threads?.searchBackground,
          mb: 1,
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search"
          sx={{
            color: '#ADBAC7',
            flex: 1,
            height: '100%',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `1px solid ${theme?.palette?.threads?.borderBottom}`,
          pb: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              padding: '3px 8px',
              borderRadius: '17px',
              backgroundColor: '#ECECEC',
              fontSize: '14px',
              color: '#5C7CFA',
              lineHeight: '20px',
              fontWeight: 600,
              mr: 1,
            }}
          >
            26
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color:theme?.palette?.threads?.mainText,
              lineHeight: '20px',
              fontWeight: 600,
            }}
          >
            New Replies
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: theme?.palette?.threads?.mainText,
              lineHeight: '20px',
              fontWeight: 600,
            }}
          >
            Newest
          </Typography>
          <IconButton>
            <ArrowDropDownIcon sx={{ color: '#172B4D' }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{cursor:'pointer'}}>
    
        {emails.map((email) => (
          <EmailCard
            key={email.id}
            fromEmail={email.fromEmail}
            subject={email.subject}
            sentAt={email.sentAt}
            status="Interested"
            onClick={() => setThreadId(email.threadId)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Threads;
