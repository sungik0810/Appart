import { View, Text, StyleSheet, TextInput } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
export default function Input({
  title,
  editable = true,
  defaultValue,
  onChangeTextSetState,
}) {
  return (
    <View style={styles.inputBox}>
      <Text style={[styles.inputText, styles.xLargeTitle]}>{title}</Text>
      <TextInput
        editable={editable}
        style={[styles.inputTextInput, styles.xLargeTitle]}
        onChangeText={(text) => {
          onChangeTextSetState ?
          onChangeTextSetState(text):null;
        }}
        value={defaultValue}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 20,
  },
  inputText: {
    marginBottom: 5,
  },
  inputTextInput: {
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: defaultStyles.defaultBorderRadius,
  },
  xLargeTitle: defaultStyles.defaultXLargeTitle,
});
