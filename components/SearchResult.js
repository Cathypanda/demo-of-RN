/**
 * Created by Cathy on 17/2/23.
 */
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import MovieDetail from'../components/MovieDetail.js';
import Featured from '../components/Featured';
import MovieList from '../components/MovieList';
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
    ViewPagerAndroid,
    TextInput,
    ProgressBarAndroid
} from 'react-native';
class SearchResult extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View></View>
        );
    }
}