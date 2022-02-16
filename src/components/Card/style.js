import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
  },
  card_header_text: {
    fontWeight: 'bold',
  },
  card_content: {
    marginTop: 20,
  },
});

export default style;
