import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Produtos from './screens/Produtos';
import Compra from './screens/Compra';
import Descricao from './screens/Descricao';
import Sobre from './screens/Sobre';
import Comentarios from './screens/Comentarios';
import Vendedor from './screens/Vendedor';
import Perguntas from './screens/Perguntas';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

function Tab({ route }) {
  const { produto} = route.params;

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Produto"
        initialParams={{ produto: produto}}
        options={{ headerShown: false }}
        component={Compra}
      />
      <BottomTab.Screen
        name="Detalhes"
        initialParams={{ produto: produto}}
        options={{ headerShown: false }}
        component={Descricao}
      />
      <BottomTab.Screen
        name="Comentarios"
        initialParams={{ produto: produto}}
        options={{ headerShown: false }}
        component={Comentarios}
      />
      <BottomTab.Screen
        name="Perguntas"
        initialParams={{ produto: produto}}
        options={{ headerShown: false }}
        component={Perguntas}
      />
      <BottomTab.Screen
        name="Vendedor"
        initialParams={{ produto: produto}}
        options={{ headerShown: false }}
        component={Vendedor}
      />
    </BottomTab.Navigator>
  );
}

function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen
        name="Stack"
        component={MainStack}
        options={{ title: 'Produtos' }} />
      <DrawerNav.Screen
        name="Sobre"
        component={Sobre} />
    </DrawerNav.Navigator>
  );
}

function MainStack({ route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Produtos'
        component={Produtos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Tab'
        component={Tab}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
