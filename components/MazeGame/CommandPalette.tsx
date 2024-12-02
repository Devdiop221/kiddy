import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Command } from '~/components/MazeGame/types';

interface Props {
  commands: Command[];
  onAddCommand: (command: Command) => void;
}

export function CommandPalette({ commands, onAddCommand }: Props) {
  return (
    <View className="flex-row flex-wrap justify-center gap-2 p-4">
      {commands.map((command, index) => (
        <Pressable
          key={index}
          className="rounded-lg bg-indigo-500 p-4"
          onPress={() => onAddCommand(command)}>
          <Text className="text-2xl text-white">{command.icon}</Text>
        </Pressable>
      ))}
    </View>
  );
}
