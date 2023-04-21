import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import InnerContentCenter from '../recyclecomponents/InnerContentCenter'
import Button from '../recyclecomponents/Button'

export default function TicketPurchaseComponent({navigation,price}){
  const [priceString,setPriceString] = useState("")

  useEffect(()=>{
    const priceSplit = `${price}`.split("").reverse()
    priceSplit.splice(3,0,",")
    const priceString = priceSplit.reverse().join("")
    setPriceString(priceString)
  },[price])
  
  function TicketPurchaseWebViewOpen(){
    navigation.navigate("TicketPurchaseWebView",{price:price})
  }

  return(
    <View style={{ width: '100%', alignItems: 'center' }}>
            <InnerContentCenter title={`${priceString}원`} />
            <Button text="구매하기" click={TicketPurchaseWebViewOpen}/>
          </View>
  )
}