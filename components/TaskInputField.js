import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, Text, TouchableOpacity, } from "react-native";

export default TaskInputField = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    <TextInput
      style={styles.inputField}
      value={task}
      onSubmitEditing={() => handleAddTask(task)}
      onChangeText={text => setTask(text)}
      placeholder={'New To Do'}
      placeholderTextColor={'#d9d9d9'}
    />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#D9D9D9',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 32,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  inputField: {
      color: '#121212',
      height: 32,
      flex: 1,
  },
});