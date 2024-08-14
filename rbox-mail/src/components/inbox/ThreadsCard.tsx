import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CampaignIcon from '../../icons/svg/campaign';

interface EmailCardProps {
  fromEmail: string;
  subject: string;
  sentAt: string;
  status?: string;
  onClick: () => void; 
}

const EmailCard: React.FC<EmailCardProps> = ({ fromEmail, subject, sentAt, status = 'Interested', onClick }) => {
  const formattedDate = new Date(sentAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const theme=useTheme();
  return (
    <Box
      sx={{
        borderBottom: `px solid ${theme?.palette?.threads?.borderBottom}`,
        display:'flex',
        flexDirection:'column',
      gap:0.3,
        py:2
        
      }}
      onClick={onClick}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography sx={{fontSize: '14px', color: theme?.palette?.threads?.primaryText, lineHeight: '20px', fontWeight: 500}}>
          {fromEmail}
        </Typography>
        <Typography  sx={{fontSize: '14px', color: theme?.palette?.threads?.datetext,whiteSpace: 'nowrap' }}>
          {formattedDate}
        </Typography>
      </Box>
      <Box>
      <Typography   sx={{fontSize: '12px', color: theme?.palette?.threads?.secondaryText, lineHeight: '18px', fontWeight: 400}}>
        {subject}
      </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt={1.5} gap={1.5}>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme?.palette?.threads?.campaignBackground,
          
            borderRadius: '16px',
            px: 1,
            py: '1px',

            gap: '4px',
            
          }}
        >
          <Box
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#46C18D',    
            }}
          />
          <Typography
          sx={{fontSize: '10px', color: '#46C18D', lineHeight: '20px', fontWeight: 600,flexWrap:'nowrap'}}
          >{status}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme?.palette?.threads?.campaignBackground,
            color: '#46C18D',
            borderRadius: '16px',
            px: 1,
            py: '1px',
            fontSize: '14px',
            fontWeight: 500,
            gap: '4px',
          }}
        >
          <CampaignIcon
       
          />
          <Typography    sx={{fontSize: '10px', color: theme?.palette?.threads?.campaignText, lineHeight: '20px', fontWeight: 600,whiteSpace: 'nowrap'}}
          >Campaign Name</Typography>
        </Box>
      </Box>
     
    </Box>
  );
};

export default EmailCard;
