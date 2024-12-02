import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4F46E5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="maze"
        options={{
          title: 'Labyrinthe',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🌀</Text>,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: 'Marché',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🍎</Text>,
        }}
      />
      <Tabs.Screen
        name="safari"
        options={{
          title: 'Safari',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🦁</Text>,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progrès',
          tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>📈</Text>,
        }}
      />
    </Tabs>
  );
}
