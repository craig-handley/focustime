import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles(item.status).historyItem}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        {focusHistory.length ? (
          <>
            <Text style={styles().title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}></FlatList>
            <View style={styles().clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}></RoundedButton>
            </View>
          </>
        ) : (
          <></>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) =>
  StyleSheet.create({
    historyItem: {
      color: status > 1 ? 'green' : 'red',
      fontSize: fontSizes.md,
    },
    title: {
      color: 'white',
      fontSize: fontSizes.lg,
    },
    clearContainer: {
      alignItems: 'center',
      padding: spacing.md,
    },
  });
