import React, { Component } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon, Header, Content, Footer } from 'native-base'; 
import CardComponent  from '../CardComponent'; 

export default class like extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    

    constructor(props) {  
        super(props);  
        this.state = {
          data1: '',
          feeds:[]
      };  
    }  

    componentDidMount() {   //기존함수 componentWillMount에서 componentDidMount로 변경함.
        this.fetchFeeds().then(feeds => {
            this.setState({
              feeds
            })
        });
    }
    
    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
              "database_api",
              "get_discussions_by_created",
              [{ tag: "kr", limit: 20 }]
            ]
        };
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

    render() {
        return (
            <View style={styles.container}>               

                <Header style={styles.header}></Header>
                <View style={styles.br}></View>
                <View style={styles.title}>
                  
                    <TextInput  
                        style={{height: '80%', width: '80%', backgroundColor: 'whitesmoke', fontSize: 20, margin:10}}  
                        placeholder="아이디"  
                        onChangeText={(data1) => this.setState({data1})}  
                    />
                    <Icon name='ios-search'/>
                    <Text>검색</Text>
                </View>        

                <View style={styles.br}></View>
                
                <Content>                  
                    {
                        this.state.feeds.map(feed => <CardComponent style={{ flexDirection: 'column'}} data={ feed }/>)
                    }               
                </Content>
                <View style={{height:'10%'}}>
                  <Text>test</Text>
                </View>
                <View style={styles.br}></View>                 
            </View> 
            
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFE4B0'
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