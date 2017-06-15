/**
 * Created by Cathy on 17/2/22.
 */
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import MovieDetail from'../components/MovieDetail.js';
import Featured from '../components/Featured';
import MovieList from '../components/MovieList';
import SearchForm from './SearchForm';
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
    TextInput
} from 'react-native';

class Search extends Component{
    constructor(props){
        super(props);

    }

            // <Navigator style={styles.viewPagerStyle}
            //            initialRoute={{
            //                         name:'搜索',
            //                         component:SearchForm,
            //                         params:{
            //                             result:null,
            //                         }
            //                    }}
            //            configureScene={(route)=>{
            //                         return Navigator.SceneConfigs.FadeAndroid
            //                     }}
            //            renderScene={(route,navigator)=>{
            //                        let Compontent = route.component;
            //                            return <Compontent{...route.params} navigator={navigator}/>;
            //                        }
            //                    }
            // />
    // <Text style={{flex:2,height:50,marginTop:20,color:this.state.color}} onPress={this.fetchData.bind(this)}>search</Text>
    render(){
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <SearchForm/>
            </View>
        );
    }
}
export {Search as default};