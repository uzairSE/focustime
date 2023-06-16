import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes'

export const FocusHistory=({history})=>{

  // if(!history || !history.length) return null;

  const renderItem=({item})=> <Text style={styles.text} > { item } </Text>
  
  return(
    <View style={styles.container}>
      <Text style={styles.text}> Focus History </Text>

      <FlatList data={history} renderItem={renderItem} />
    </View>


  );
};

const styles = StyleSheet.create({
  container:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{

    color: colors.white,
    fontSize: fontSizes.md,
  },
})

