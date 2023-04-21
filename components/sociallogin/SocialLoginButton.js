import { View, StyleSheet } from 'react-native';
export default function SocialLoginButton({item}){
  return(
    <View style={styles.loginButtonSize}>
        {item}
    </View>
  )
}

const defaultBorderRadius = 8

const styles = StyleSheet.create({
loginButtonSize:{
  width:250,
  height:60,
  borderRadius:defaultBorderRadius,
  backgroundColor:"white",
  marginBottom:20
}
});