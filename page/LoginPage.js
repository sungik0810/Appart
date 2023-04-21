import { View, StyleSheet } from 'react-native';
import SocialLoginButton from "../components/sociallogin/SocialLoginButton"
import KakaoLogin from '../components/sociallogin/KakaoLogin'
import GoogleLogin from '../components/sociallogin/GoogleLogin'
import AppleLogin from '../components/sociallogin/AppleLogin'
import LogoImage from '../components/images/LogoImage';
export default function LoginPage({ navigation }) {
  return (
        <View style={styles.container}>
          <View style={styles.logoBox}>
            <LogoImage />
          </View>
          <View style={styles.socialLoginBox}>
            <SocialLoginButton item={<KakaoLogin navigation={navigation}/>}/>
            <SocialLoginButton item={<GoogleLogin />}/>
            <SocialLoginButton item={<AppleLogin />}/>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logoBox:{
    flex:0.4,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  }
  ,
  socialLoginBox:{
    flex:0.6,
    width:"100%",
    alignItems:"center"
  }
});
