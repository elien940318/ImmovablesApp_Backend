
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Container, Header, Button } from 'native-base'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class sell extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-cart' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}><Text>입찰</Text></Header>
                <View style={{height:'10%'}}></View>
                <View style={{width:200}}>              
                    <Button style={{justifyContent:'center'}}><Text>판매자</Text></Button>                  
                </View>
                <View style={{height:'10%'}}></View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>                    
                    <View style={{width:200}}>
                        <Button style={{justifyContent:'center'}}><Text>중개사</Text></Button>
                    </View>
                    <View style={{width:200}}>
                        <Button style={{justifyContent:'center'}}><Text>법무사</Text></Button>
                    </View>
                </View>
                <View style={{height:'10%'}}></View>
          </Container>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
      },
      header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      title: {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      content: {
   
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFE4B0',
      },
      footer: {
        flex: 1,
        width: '100%',
        height: hp('10%'),
        backgroundColor: '#EFE4B0',
      },
      br: {
        height: '3%'
      }
});