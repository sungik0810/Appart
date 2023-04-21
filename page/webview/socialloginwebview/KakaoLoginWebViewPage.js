import axios from 'axios';
import {useEffect, useRef} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {kakaoLoginRequestTokenAxios} from '../../../modules/socialloginmodule/KakaoLoginAxiosModule';
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export default function KaKaoLoginWebViewPage({navigation, route}) {
  const kakaoLoginUrl = route.params.kakaoLoginUrl;

  const getCode = target => {
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      kakaoLoginRequestTokenAxios(requestCode, navigation);
    }
  };
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webView}
        source={{
          uri: `${kakaoLoginUrl}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  webView: {
    felx: 1,
  },
});
