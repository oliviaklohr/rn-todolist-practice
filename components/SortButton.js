import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import SortAlpha from '../icons/arrow-down-a-z-solid.svg';
import SortAlphaReverse from '../icons/arrow-down-z-a-solid.svg';

export default SortButton = (props) => {
  // convert this into a type
  // const [sortDirection, setSortDirection] = useState<'asc' | 'dsc' | 'null'>(null);
  const [sortDirection, setSortDirection] = useState(false);

  const handleSortTasks = (tasks, sortDirection) => {
    if (sortDirection == false) {
      props.sortTasks(tasks.sort())
      setSortDirection(true)
    } else {
      props.sortTasks(tasks.sort().reverse())
      setSortDirection(false)
    }
  };

  return (
    <View style={[styles.buttonContainer, styles.shadow]}>
      <TouchableOpacity
        onPress={() => handleSortTasks(props.tasks, sortDirection)}
        style={styles.round}
      >
        {/* {sortDirection === 'asc' ? <SortAlpha width={30} height={30} fill='#fff'/> : <SortAlphaReverse width={30} height={30} fill='#fff'/>} */}
        {sortDirection ? <SortAlpha width={30} height={30} fill='#fff'/> : <SortAlphaReverse width={30} height={30} fill='#fff'/>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 34,
    right: 34,
  },
  round: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#0062C1',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.15)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});