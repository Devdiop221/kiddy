import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useGameState } from '~/hooks/useGameState';

interface WordCard {
  word: string;
  emoji: string;
  id: number;
}

const WORD_PAIRS: WordCard[] = [
  { word: 'LION', emoji: '🦁', id: 1 },
  { word: 'ÉLÉPHANT', emoji: '🐘', id: 2 },
  { word: 'GIRAFE', emoji: '🦒', id: 3 },
  { word: 'SINGE', emoji: '🐒', id: 4 },
  { word: 'ZÈBRE', emoji: '🦓', id: 5 },
  { word: 'TIGRE', emoji: '🐯', id: 6 },
];

export default function SafariGame() {
  const { score, updateScore } = useGameState('safari');
  const [currentWord, setCurrentWord] = useState<WordCard | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [streak, setStreak] = useState(0);

  const generateQuestion = () => {
    const word = WORD_PAIRS[Math.floor(Math.random() * WORD_PAIRS.length)];
    const wrongOptions = WORD_PAIRS.filter((w) => w.id !== word.id)
      .map((w) => w.emoji)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [...wrongOptions, word.emoji].sort(() => Math.random() - 0.5);

    setCurrentWord(word);
    setOptions(allOptions);
    setMessage('');
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const checkAnswer = (selectedEmoji: string) => {
    if (!currentWord) return;

    if (selectedEmoji === currentWord.emoji) {
      setMessage('Correct ! 🌟');
      setStreak(streak + 1);

      if (streak + 1 >= 3) {
        updateScore(score + 1);
        setStreak(0);
        setMessage('Bravo ! +1 point ! 🏆');
      }

      setTimeout(generateQuestion, 1500);
    } else {
      setMessage('Essaie encore ! 💪');
      setStreak(0);
    }
  };

  return (
    <View className="flex-1 bg-yellow-50 p-4">
      {/*<View className="flex-1 items-center justify-center bg-yellow-50">*/}
      {/*  <Text className="text-2xl font-bold text-yellow-600">Bienvenue au Safari des Mots!</Text>*/}
      {/*</View>*/}
      <View className="mb-8 items-center">
        <Text className="text-2xl text-yellow-600">Score: {score} 🏆</Text>
        <Text className="mt-2 text-lg text-yellow-600">Série: {streak}/3 ⭐</Text>
      </View>

      {currentWord && (
        <View className="mb-8 items-center">
          <Text className="mb-4 text-4xl">{currentWord.word}</Text>
          <Text className="text-xl text-gray-600">Trouve l'animal correspondant</Text>
        </View>
      )}

      <View className="flex-row flex-wrap justify-center gap-4">
        {options.map((emoji, index) => (
          <Pressable
            key={index}
            className="rounded-xl bg-white p-6 shadow-md"
            onPress={() => checkAnswer(emoji)}>
            <Text className="text-4xl">{emoji}</Text>
          </Pressable>
        ))}
      </View>

      {message && <Text className="mt-8 text-center text-xl text-yellow-600">{message}</Text>}
    </View>
  );
}
