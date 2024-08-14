import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    navbar:{
      mainBackground: '#1F1F1F',
      mainText: '#FFFFFF',
      borderColor: '#343A40'
    },
    sidebar:{
      mainBackground: '#101113',
      mainText: '#FFFFFF',
      borderColor: '#343A40'
    },
    threads: {
      mainBackground:'#000000',
      mainText: '#E6E6E6',
      primaryText:'#fff',
      borderColor: '#33383F',
      resetBackground:'#25262B',
      resetBorder:'none',
      inboxText:'#7F7F7F',
      searchBackground:'#23272C',
      secondaryText:'#E1E0E0',
      campaignText:'#fff',
      campaignBackground:'#222426',
      datetext:'#FCFCFC',
      borderBottom:'#fff',
      headBackground:'#23272C',
      headText:'#fff',
      detailsText:'#B9B9B9',
      detailslabel:'#fff',
    },
    campaign: {
        
      mainText: '#fff',
      primaryText: '#fff',
      secondaryText: '#B9B9B9',
  },

  },
});

export default darkTheme;
