import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from '@ui-kitten/components'; // UI Kitten的组件
import {MaterialIcons} from '@expo/vector-icons'; // 用于Icon

const HomeScreen = props => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </Layout>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const AccountScreen = props => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account Screen</Text>
    </Layout>
  );
};

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <AccountStack.Group>
        <AccountStack.Screen name="Account" component={AccountScreen} />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
};

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance="noIndicator"
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title="Home"
      icon={props => (
        <MaterialIcons name="home" size={24} color={props.style.tintColor} />
      )}
    />
    <BottomNavigationTab
      title="Account"
      icon={props => (
        <MaterialIcons
          name="account-circle"
          size={24}
          color={props.style.tintColor}
        />
      )}
    />
  </BottomNavigation>
);

const TabNavigator = createBottomTabNavigator();
const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <TabNavigator.Screen
        name="AccountStackScreen"
        component={AccountStackScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigatorScreen;
