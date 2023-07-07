import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')

export default {
  COLORS: {
    WHITE: '#FFF',
    BACKGROUND: '#F0F2F5',
    BACKGROUND_CARD: '#E4E6EF',

    CAPTION_500: '#71717A',
    CAPTION_400: '#A1A1AA',
    CAPTION_300: '#D4D4D8',
    CAPTION_200: '#e2e2e5',

    BUTTON_NO_ACTIVE: '#187de4cf',
    
    OVERLEY: 'rgba(0,0,0,0.6)',

    TITLE: '#363F5F',
    TEXT:'#969CB2',
    TEXT_DARK: '#000',

    SECONDARY_LIGHT:  'rgba(255, 135,44, 0.3)',
    SUCCESS_LIGHT:'rgba(18,164,84, 0.5)',
   
    ATTENTION: '#E83F5B',
    ATTENTION_LIGHT:'rgba(232,63,91,0.5)',

    PRIMARY: 'rgba(46, 169, 230, 1)',

    OPEN: '#528F33',
    SUCCESS:'#12a454',
    CONFIRM: '#1BC5BD',
  },

  SIZES: {
    width,
    height,
  }
};
