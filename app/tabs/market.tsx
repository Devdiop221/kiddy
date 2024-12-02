import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useGameState } from '~/hooks/useGameState';

interface Fruit {
  name: string;
  price: number;
  emoji: string;
}

const FRUITS: Fruit[] = [
  { name: 'Pomme', price: 2, emoji: '🍎' },
  { name: 'Banane', price: 3, emoji: '🍌' },
  { name: 'Orange', price: 4, emoji: '🍊' },
  { name: 'Raisin', price: 5, emoji: '🍇' },
];

export default function MarketGame() {
  const { score, updateScore } = useGameState('market');
  const [money, setMoney] = useState(20);
  const [basket, setBasket] = useState<Fruit[]>([]);
  const [target, setTarget] = useState(0);
  const [message, setMessage] = useState('');

  const generateNewTarget = () => {
    setTarget(Math.floor(Math.random() * 20) + 10);
    setBasket([]);
    setMessage('');
  };

  useEffect(() => {
    generateNewTarget();
  }, []);

  const addToBasket = (fruit: Fruit) => {
    if (calculateTotal() + fruit.price <= money) {
      setBasket([...basket, fruit]);
    }
  };

  const calculateTotal = () => basket.reduce((sum, fruit) => sum + fruit.price, 0);

  const checkTotal = () => {
    const total = calculateTotal();
    if (total === target) {
      updateScore(score + 1);
      setMoney(money + 5);
      setMessage('Bravo ! +5 pièces 🌟');
      setTimeout(generateNewTarget, 1500);
    } else {
      setMessage('Essaie encore ! 💪');
    }
  };

  return (
    <View className="flex-1 bg-green-50 p-4">
      {/*<View className="flex-1 items-center justify-center bg-green-50">*/}
      {/*  <Text className="text-2xl font-bold text-green-600">Bienvenue au Marché des Fruits!</Text>*/}
      {/*</View>*/}
      <View className="mb-4 items-center">
        <Text className="text-2xl text-green-600">Pièces: {money} 🪙</Text>
        <Text className="mt-2 text-xl text-green-600">Objectif: {target} 🎯</Text>
      </View>

      <View className="mb-6 flex-row flex-wrap justify-center gap-4">
        {FRUITS.map((fruit, index) => (
          <Pressable
            key={index}
            className="rounded-xl bg-white p-4 shadow"
            onPress={() => addToBasket(fruit)}>
            <Text className="mb-2 text-center text-4xl">{fruit.emoji}</Text>
            <Text className="text-center">{fruit.price} 🪙</Text>
          </Pressable>
        ))}
      </View>

      <View className="mb-4 rounded-xl bg-white p-4">
        <Text className="mb-2 text-center text-xl">Panier</Text>
        <View className="flex-row flex-wrap justify-center gap-2">
          {basket.map((fruit, index) => (
            <Text key={index} className="text-2xl">
              {fruit.emoji}
            </Text>
          ))}
        </View>
        <Text className="mt-2 text-center">Total: {calculateTotal()} 🪙</Text>
      </View>

      {message && <Text className="mb-4 text-center text-xl text-green-600">{message}</Text>}

      <View className="flex-row justify-center gap-4">
        <Pressable className="rounded-xl bg-green-500 px-8 py-4" onPress={checkTotal}>
          <Text className="text-lg font-bold text-white">Vérifier</Text>
        </Pressable>

        <Pressable className="rounded-xl bg-red-500 px-8 py-4" onPress={() => setBasket([])}>
          <Text className="text-lg font-bold text-white">Vider</Text>
        </Pressable>
      </View>
    </View>
  );
}
