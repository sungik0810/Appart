import { View, StyleSheet, Text } from 'react-native';
import titles from "../../modules/TitleModule"

export default function CostInfomationComponent() {
  return (
    <View>
            <Text>{titles.costInformation}</Text>
          </View>
  );
}

const styles = StyleSheet.create({
});
