import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule'

export default function GoogleLogin(){
  return(
    <TouchableOpacity style={[styles.loginBox,styles.google]}
    onPress={()=>{}}>
      <Text>구글 로그인</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  loginBox:{
  width:"100%",
  height:"100%",
  borderRadius:defaultStyles.defaultBorderRadius,
  justifyContent:"center",
  alignItems:"center"
},
google:{
  backgroundColor:"purple"
}
});