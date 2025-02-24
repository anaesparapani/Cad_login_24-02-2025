import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from "./screens/Login";
import Cadastro from './screens/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
    <Cadastro></Cadastro>
  </View>
    // <View style={styles.container}>
    //   <Login></Login>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  box1:{
    width:50,
    height:50,
    backgroundColor: 'purple'
  },
  box2:{
    width:50,
    height:50,
    backgroundColor: 'blue'

  },
  box3:{
    width:50,
    height:50,
    backgroundColor: 'violet'

  },
  box4:{
    width:50,
    height:50,
    backgroundColor: 'pink',
  },
  row:{
    flexDirection:'row'
  },
  text:{
    fontSize:28,
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    borderColor: 'purple',
    width:'80%',
    padding:10,
    marginVertical:10,
  }

});
