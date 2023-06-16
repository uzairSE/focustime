import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes'

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}> What would you like to focus on? </Text>
      <View style={styles.inputContainer}>

        <TextInput style={styles.inputText} label="Write here"
                  value={subject} 
                  onChangeText={text => setSubject(text)}/>
      </View> 
      <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress= {()=> addSubject(subject)} />
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  inputText: {
    flex: 1,
    marginRight: spacing.sm
  },
  button:{
    justifyContent: 'center',
    alignItems: "center",

  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: spacing.xl,
    fontSize: spacing.lg,
    margin: 10
  },
});

export default Focus;
