import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const TaskHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>Tasks we've worked on:</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks we've worked on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.darkGreen,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.darkGreen,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});