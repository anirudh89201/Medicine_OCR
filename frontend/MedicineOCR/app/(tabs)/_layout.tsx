import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function TabLayout() {

  return (
    <Tabs>
        <Tabs.Screen
        name="upload"
        options={{
          title:"upload",
          tabBarIcon:({color,size}) => (
            <MaterialIcons name="upload" color={color} size={size}/>
          )
        }}
        />
        <Tabs.Screen
        name="profile"
        options={{
          title:'profile',
          tabBarIcon:({color,size}) => (
            <MaterialIcons name="person" color={color} size={size}/>
          )
        }}
        />
        </Tabs>
  );
}
