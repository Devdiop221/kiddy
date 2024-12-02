import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface GameProgress {
  gameId: string;
  name: string;
  score: number;
  color: string;
  emoji: string;
}

export default function ProgressScreen() {
  const [progress, setProgress] = useState<GameProgress[]>([
    { gameId: 'maze', name: 'Labyrinthe du Code', score: 0, color: 'indigo', emoji: '🎮' },
    { gameId: 'market', name: 'Marché des Fruits', score: 0, color: 'green', emoji: '🍎' },
    { gameId: 'safari', name: 'Safari des Mots', score: 0, color: 'yellow', emoji: '🦁' },
  ]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const updatedProgress = await Promise.all(
        progress.map(async (game) => {
          const score = await AsyncStorage.getItem(`@game_score_${game.gameId}`);
          return {
            ...game,
            score: score ? parseInt(score) : 0,
          };
        })
      );
      setProgress(updatedProgress);
    } catch (error) {
      console.error('Erreur lors du chargement de la progression:', error);
    }
  };

  const getTotalStars = () => {
    return progress.reduce((sum, game) => sum + game.score, 0);
  };

  return (
    <View className="flex-1 bg-purple-50 p-4">
      {/*<View className="flex-1 items-center justify-center bg-purple-50">*/}
      {/*  <Text className="text-2xl font-bold text-purple-600">Vos progrès ici!</Text>*/}
      {/*</View>*/}
      <View className="mb-8 items-center">
        <Text className="mb-2 text-3xl text-purple-600">Ma Progression</Text>
        <Text className="text-2xl">⭐ {getTotalStars()} étoiles</Text>
      </View>

      {progress.map((game) => (
        <View key={game.gameId} className={`bg-${game.color}-100 mb-4 rounded-xl p-4 shadow-sm`}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Text className="mr-2 text-2xl">{game.emoji}</Text>
              <Text className={`text-xl text-${game.color}-600`}>{game.name}</Text>
            </View>
            <View className="flex-row items-center">
              <Text className={`text-xl text-${game.color}-600 mr-1`}>{game.score}</Text>
              <Text className="text-xl">⭐</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
