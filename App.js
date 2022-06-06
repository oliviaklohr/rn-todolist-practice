/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskInputField from './components/TaskInputField.js';
import TaskItem from './components/TaskItem.js';
import SortButton from './components/SortButton.js';
import Star from './icons/star-solid.svg';


export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task])
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTimeout(() => setTasks(tasks.filter((value, index) => index != deleteIndex)), 2000);
  }

  const sortTasks = (sorted) => {
    setTasks([...sorted])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Star width={24} height={24} fill='#ffd400' style={styles.star}/>
        <Text style={styles.heading}>Today</Text>
      </View>
      <TaskInputField addTask={addTask}/>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={task} style={styles.taskContainer}>
                <TaskItem task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            );
          })
        }
      </ScrollView>
      <SortButton tasks={tasks} sortTasks={() => sortTasks(tasks)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    color: '#121212',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  header: {
    marginTop: 60,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 1,
    paddingVertical: 5,
  },
  scrollView: {
    marginBottom: 70,
  },
  star: {
    marginLeft: 32,
  },
  taskContainer: {
    marginTop: 20,
  },
});