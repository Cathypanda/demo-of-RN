/**
 * Created by Cathy on 17/2/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import styles from '../styles/mainstyle';
import MovieList from '../components/MovieList';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Navigator,
} from 'react-native';
/*initialRouter: 路由初始化配置信息，就是说页面加载时，第一次需要展现什么内容

configureScene: 场景转换动画配置。在RN看来，从一个页面切换到另外一个页面，就是从一个场景切换到另外一个场景，这里配置的是场景动画信息，比如Navigator.SceneConfigs.FadeAndroid 就是淡入淡出

renderScene: 渲染场景，读取initialRouter传来的数据，确定显示那些内容。*/
class Featured extends Component{
    // static defaultProps={
    //     title:'推荐电影',
    // };
    constructor(props){
        super(props);
        this.state={
            title:'推荐电影'
        }
    }
    render(){
        return(
                <Navigator style={styles.viewPagerStyle}
                           initialRoute={{
                                name:'推荐电影',
                                component:MovieList,
                                params:{
                                    title:this.state.title
                                }
                           }}
                           configureScene={(route)=>{
                                return Navigator.SceneConfigs.FadeAndroid
                            }}
                           renderScene={(route,navigator)=>{
                               let Compontent = route.component;
                                   return <Compontent{...route.params} navigator={navigator}/>;
                               }
                           }
                    />
            );
        }
    }
export { Featured as default};
