import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {TailwindProvider} from 'tailwind-rn';

export function ClassTableItem(props) {
  const tailwind = useTailwind();
  if (props.data === null) {
    return <View></View>;
  } else {
    return (
      <View style={tailwind('ring-2 w-15 h-60 ring-indigo-300')}>
        <Text>{props.classInfo[1]}</Text>
        <Text>{props.classInfo[2]}</Text>
        <Text>{props.classInfo[3]}</Text>
        <Text>{props.classInfo[4]}</Text>
      </View>
    );
  }
}
