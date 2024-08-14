import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    navbar:{
      mainBackground: '#FFFFFF',
      mainText: '#5B5F66',
      borderColor: '#DEDEDE'
    },
    sidebar:{
      mainBackground: '#FAFAFA',
      mainText: '#000000',
      borderColor: '#D8D8D8'
    },
    threads: {
      mainBackground:'#fff',
      mainText: '#172B4D',
      primaryText:'#343A40',
      borderColor: '#E0E0E0',
      resetBackground:'none',
      resetBorder:'1px solid #DFE3E8',
      inboxText:'#7F7F7F',
      searchBackground:'#F4F6F8',
      secondaryText:'#172B4D',
      campaignText:'#637381',
      campaignBackground:'#F0F0F0',
      datetext:'#919EAB',
      borderBottom:'grey',
      headBackground:'#ECEFF3',
      headText:'#454F5B',
      detailsText:'#000000',
      detailslabel:'#637381',

    },
    campaign: {
        
      mainText: "#172B4D",
      primaryText: '#454F5B',
      secondaryText: '#637381',
  },
    
  },

});

export default lightTheme;
