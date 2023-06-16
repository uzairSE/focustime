import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../components/RoundedButton'

export const Timing = ({ onChangeTime })=> {
  return(
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title="1" onPress={()=> onChangeTime(1)}/>
      </View>

      <View style={styles.timingButton}>
        <RoundedButton size={50} title="2" onPress={()=> onChangeTime(2)}/>
      </View>

      <View style={styles.timingButton}>
        <RoundedButton size={50} title="5" onPress={()=> onChangeTime(5)}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton:{
    flex: 1,
    alignItems: 'center'
  }
})