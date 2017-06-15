/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import styles from './styles/mainstyle.js';
import MovieDetail from'./components/MovieDetail.js';
import Featured from './components/Featured';
import MovieList from './components/MovieList';
import Search from'./components/Search';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ListView,
    Image,
    TouchableHighlight,
    Navigator,
    ToolbarAndroid,
    RefreshControl,
    TouchableOpacity,
    ViewPagerAndroid
} from 'react-native';
class HeadText extends Component{
  render(){
    return(
        <Text style={[styles.welcome,{fontWeight:'200'}]}>{this.props.children}</Text>
    );
  }
}

    var icon='./image/icon_logo.png';
export default class DemoOneProject extends Component {
    constructor(props){
        super(props);
        this.state={
            viewFlex:10,
            title:'推荐电影',
            icon:require('./image/icon_logo.png'),
            search:require('./image/search.png'),
            color1:"#33cdee",
            color2:"#87CEEB",
            color3:'#87CEEB',
            isToolBarshowing:true
        }
        // console.log("aaaa"+this.props.navigator.title);
    }
    render(){
            // <View style={styles.overlay}>
            //     <Text style={styles.welcome}>{this.state.title}</Text>
            // </View>
        return(
        <View style={styles.container}>
            {this.state.isToolBarshowing ?

                (<ToolbarAndroid
                    visibal
                    style={{flex:1,backgroundColor:'#87CEEB'}}
                    title={this.state.title}
                    titleColor='#414141'
                    // actions={[{title: 'Settings', icon: require('./image/icon_logo.png'), show: 'always'}]}
                    onActionSelected={this.onActionSelected} >
                </ToolbarAndroid>)
                :(null)
            }
            <ViewPagerAndroid
                ref={viewPager => { this.viewPager = viewPager; }}
                style={{flex:this.state.viewFlex}}
                initialPage={0}
                onPageSelected={(event)=>{
                    if(event.nativeEvent.position==0){
                        this.setState({
                            color1:"#33cdee",
                            color2:"#87CEEB",
                            color3:'#87CEEB',
                            title:'推荐电影',
                            isToolBarshowing:true,
                            viewFlex:10
                        });
                    }else if(event.nativeEvent.position==1){
                        this.setState({
                            color1:"#87CEEB",
                            color2:"#33cdee",
                            color3:'#87CEEB',
                            title:'北美排行榜',
                            isToolBarshowing:true,
                            viewFlex:10
                        });
                    }else{
                        this.setState({
                            color2:"#87CEEB",
                            color1:"#87CEEB",
                            color3:"#33cdee",
                            title:'搜索电影',
                            isToolBarshowing:false,
                            viewFlex:11

                        });
                    }
                }}
            >
                <View>
                    <Featured/>
                </View>
                <View>
                    <Featured/>
                </View>
                <View>
                    <Search/>
                </View>
            </ViewPagerAndroid>
            <View style={{flexDirection:'row',flex:1,backgroundColor:'#cdcdcd'}}>
                <TouchableOpacity
                    style={[styles.btnFlex,{backgroundColor:this.state.color1}]}
                    onPress={this.buttonOnePress.bind(this)}
                >
                    <Image source={this.state.icon} style={{flex:1,resizeMode:'contain'}} resizeMethod={"resize"} />
                    <Text>推荐电影</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnFlex,{backgroundColor:this.state.color2}]}
                    onPress={this.buttonTwoPress.bind(this)}
                >
                    <Image source={this.state.icon} style={{flex:1,resizeMode:'contain'}} resizeMethod={"resize"} />
                    <Text>北美排行榜</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btnFlex,{backgroundColor:this.state.color3}]}
                    onPress={this.buttonThreePress.bind(this)}
                >
                    <Image source={this.state.search} style={{flex:1,resizeMode:'contain'}} resizeMethod={"resize"} />
                    <Text>搜电影</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
    buttonTwoPress(){
        return(
            this.viewPager.setPage(1),
            this.setState({
                color1:"#87CEEB",
                color2:"#33cdee",
                color3:"#87CEEB",
                title:'北美排行榜',
                isToolBarshowing:true,
                viewFlex:10
            })
        );
    }
    buttonOnePress(){
        return(
            this.viewPager.setPage(0),
            this.setState({
                color1:"#33cdee",
                color2:"#87CEEB",
                color3:"#87CEEB",
                title:'推荐电影',
                isToolBarshowing:true,
                viewFlex:10
            })
        );
    }
    buttonThreePress(){
        return(
            this.viewPager.setPage(2),
                this.setState({
                    color1:"#87CEEB",
                    color2:"#87CEEB",
                    color3:"#33cdee",
                    title:'搜索电影',
                    isToolBarshowing:false,
                    viewFlex:11
                })
        );
    }
}

AppRegistry.registerComponent('DemoOneProject', () => DemoOneProject);
