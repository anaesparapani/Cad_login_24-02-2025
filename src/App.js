import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import Evento from "./screens/Evento";
import Ingresso from "./screens/Ingresso";
import Organizador from "./screens/Organizador";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroEvento" component={Evento}/>
        <Stack.Screen name="CadastroOrganizador" component={Organizador}/>
        <Stack.Screen name="CadastroIngresso" component={Ingresso}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
