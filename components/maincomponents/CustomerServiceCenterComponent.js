import * as React from 'react';
import { useEffect, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import defaultStyles from '../../modules/DefaultStylesModule';
import titles from '../../modules/TitleModule';
export default function CustomerServiceCenterComponent() {
  return (
    <View style={{ width: '100%' }}>
      <View style={styles.row}>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>전자메일</Text>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>
          appart@appart.co.kr
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>카카오톡</Text>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>appart</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>전화번호</Text>
        <Text style={[styles.mediumTitle, styles.marginLeft]}>
          070-0000-0000
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mediumTitle: defaultStyles.defaultMediumTitle,
  marginLeft: { marginLeft: 20 },
  row: { flexDirection: 'row', marginBottom: 20 },
});
