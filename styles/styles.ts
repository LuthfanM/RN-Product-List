import { Dimensions, StyleSheet } from "react-native";

const styles: Record<string, any> = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    height: '100%'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  fullLayout: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      flexGrow: 1,
      flexBasis: '100%',
      backgroundColor: 'red'
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexBasis: '50%'
  },
  card: {
    backgroundColor: 'white',
    margin: 5,
  },
  fullCard: {
    backgroundColor: 'white',
    margin: 5,
    marginRight: 5,
  },
  navbarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'relative',
  },
  navbar: {        
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 40,
    alignItem: 'center',
    justifyContent: 'space-evenly',
    shadowColor: 'red',
    shadowRadius: 3.84,    
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    elevation: 5  
  },
  expands: {
    position: 'absolute',            
    borderTopColor: 'red',
    height: 3,
    width: 15,    
    bottom: 60,
    borderTopWidth: 5,
    zIndex: 100
  },
  paddIcon: {
    padding: 14
  }
});

export default styles;
