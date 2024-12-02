import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Command } from '~/components/MazeGame/types';

interface Props {
  commands: Command[];
}

export function CommandQueue({ commands }: Props) {
  return (
    <ScrollView horizontal className="p-2">
      <View className="flex-row gap-2">
        {commands.map((command, index) => (
          <View key={index} className="rounded bg-gray-200 p-3">
            <Text>{command.icon}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
