
import React, { useRef }  from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default function TicketPurchaseWebViewPage() {
   
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                // onPress={goBootpayTest}
            >
                <Text>일반결제 결제테스트</Text>
            </TouchableOpacity>

            
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 10,
    },
});