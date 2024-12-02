import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirige après 3 secondes
    const timer = setTimeout(() => {
      router.push('/tabs/maze');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-indigo-50">
      <Text className="text-3xl font-bold text-indigo-600">
        Chargement...
      </Text>
    </View>
  );
}
