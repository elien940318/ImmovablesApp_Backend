import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import { Container, Content,Icon, Header,Button} from 'native-base';
import { createAppContainer } from 'react-navigation'
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'

import CardComponent  from '../CardComponent'; 
import RecentR from '../LikeTab/RecentR';
import RecentT from '../LikeTab/RecentT';
import ContectedO from '../LikeTab/ContectedO';
import SubsT from '../LikeTab/SubsT';
import SubsR from '../LikeTab/SubsR';
import plus from '../bottom/plus'

const AsppTabNavigator = createMaterialTopTabNavigator({
  본방 : {screen: RecentR},
  본단지: {screen: RecentT},
  찜한방: {screen: SubsR},
  찜한단지: {screen: SubsT},
  부동산: {screen: ContectedO},
  더보기: {screen:plus}

}, {
animationEnabled: true,
swipeEnabled: true,
tabBarPosition: "top",
tabBarOptions: {
  style : {/*
    ...Platform.select({
      ios:{
        backgroundColor:'white',
      }
    })*/
    backgroundColor:'white',
  },
  iconStyle: {height:30},
  activeTintColor:'#000',
  inactiveTintColor:'#d1cece',
  upperCaseLabel: false,
  showLabel: true,
  showIcon:false,
}
});

const AsppTabContainet = createAppContainer(AsppTabNavigator);

export default class home extends Component {

      state = {
        feeds: []
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
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
          <Container style={style.container }>
             <Header style ={{ height: 110, flexDirection: 'column'}}>
                <View style={{ alignItems: 'center', justifyContent: 'center'}} >
                  <Text style={{ alignItems:'center' }}>관심목록</Text>
                </View>
                <View style={{}}>
                    <ScrollView horizontal={true}>
                      <AppTabContainet/>
                    </ScrollView>
                </View>
            </Header>
            <Content>
              
                {
                  this.state.feeds.map(feed => (
                    <CardComponent data={ feed } key={feed.url}/>
                  ))
                }
            </Content>
          </Container>
        );
      }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
     //   alignItems: 'center', //글자 수직 정렬
     //   justifyContent: 'center', //글자 수평 정렬
    }
});