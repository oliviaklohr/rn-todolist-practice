import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default TaskItem = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={() => props.deleteTask()}
          boxType='square'
          onAnimationType='one-stroke'
          offAnimationType='one-stroke'
        />
      </View>
      <View style={styles.taskContainer}>
        <Text numberOfLines={1} style={styles.task}>{props.task}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 32,
    marginBottom: 10,
  },
  indexContainer: {
    borderRadius: 12,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    minHeight: 24,
  },
  task: {
    color: '#000',
    fontSize: 14,
  },
});