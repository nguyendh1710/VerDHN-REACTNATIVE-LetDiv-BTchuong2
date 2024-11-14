import { StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
  container: {
   
    display: "flex",
    maxWidth: 375,
    paddingTop: 24,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
    // fontFamily: "Roboto, sans-serif",
  },
  content: {
    zIndex: 10,
    display: "flex",
    width: "100%",
    paddingLeft: 23,
    paddingRight: 23,
    
    flexDirection: "column",
    alignItems: "stretch",
  },
  header: {
 
  },
  title: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 26,
    fontWeight: "700",
  },
  searchContainer: {

    marginTop: 18,
     paddingRight: 95,
    justifyContent:'start',
    fontSize: 18,
    color: "rgba(206, 212, 218, 1)",
    fontWeight: "400",
  },
  searchBox: {
    
    borderRadius: 29,
    borderColor: "rgba(134, 142, 150, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    width: 290,
    // marginRight: -14,
    // paddingLeft: 56,
    // paddingRight: 56,
    paddingHorizontal: 8,
    // paddingTop: 10,
    // paddingBottom: 30,
    paddingVertical: 8,
    marginBottom: 19,
    height: 80,
    flexDirection:'row',
    alignItems:'center',

    
  },
  searchInput: {
    fontSize: 22,
    color: "rgba(73, 80, 87, 1)",
    paddingTop: 10,
    flex: 1,
  },
  searchIcon: {
    // position: "relative",
   
   height:30,
    // maxWidth: "100%",
    // aspectRatio: 1,
    // marginHorizontal: 20,
    // marginVertical: -80,
  },
  listContainer:{

   
    // marginTop: 69,
    // marginVertical: 20,
  
  },
  divider: {
    borderRadius: 19,
    position: "relative",
    display: "flex",
    marginTop: 5,
    aspectRatio: 3.02,
  },
});
