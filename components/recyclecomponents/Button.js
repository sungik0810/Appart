import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule'

export default function Button({ text, theme = 'black',click }) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonCommonBoxStyle,
        theme == 'black' ? styles.buttonDefaultBox : styles.buttonInvertedBox,
      ]}
      onPress={click}>
      <Text
        style={[
          styles.buttonCommonTextStyle,
          theme == 'black'
            ? styles.buttonDefaultText
            : styles.buttonInvertedText,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCommonBoxStyle: {
    width: 210,
    height: 48,
    borderRadius: defaultStyles.defaultBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCommonTextStyle: defaultStyles.defaultLargeTitle,
  buttonDefaultBox: {
    backgroundColor: 'black',
  },
  buttonInvertedBox: { backgroundColor: 'white' },
  buttonDefaultText: {
    color: 'white',
  },
  buttonInvertedText: { color: 'black' },
});
