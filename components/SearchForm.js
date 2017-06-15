/**
 * Created by Cathy on 17/2/22.
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
    ProgressBarAndroid,
ActivityIndicator
} from 'react-native';
class SearchForm extends Component{
    constructor(props){
        super(props);
        let dataSource=new ListView.DataSource({
            rowHasChanged:(row1,row2)=>row1 !== row2
        });
        this.state={
            query:'',
            color:'#111111',
            loaded:true,
            movies:dataSource
        }

    }
    fetchData(){
        this.setState({
            loaded:false
        });
        const REQUEST_URL= 'http://api.douban.com/v2/movie/search?q='+this.state.query;
        fetch(REQUEST_URL)
            .then(response=>response.json())
            .then(responseData =>{
                console.log(responseData);
                // 用navigator跳转
                // this.props.navigator.push({
                //     name:responseData.subjects.title,
                //     component:SearchResult,
                //     params:{
                //         result:responseData.subjects
                //         // result:null
                //     }
                // });
                this.setState({
                    loaded:true,
                    movies:this.state.movies.cloneWithRows(responseData.subjects)
                });
            })
            .done();
    }
    render(){
        if (!this.state.loaded) {
            return(
            <View style={styles.container}>
                <TextInput
                    style={{flex:1}}
                    placeholder='search...'
                    autoCorrect={false}
                    keyboardType='url'
                    onChangeText={(query)=>{
                            this.setState({
                                 query:query
                            });
                        }}
                    onSubmitEditing={
                            this.fetchData.bind(this)
                     }
                />
                <View style={{flex:9,flexDirection:'column'}}>
                    {/*<ProgressBarAndroid styleAttr="Inverse" color={'red'} />*/}
                    <ActivityIndicator
                        //加载状态大小 samll / large
                        size='large'
                        //加载状态的颜色
                        color='red'
                        //是否显示
                        animating={this.state.loading}
                    />
                    <Text style={styles.welcome}>loading...</Text>
                </View>
            </View>
            );
        } else {
            return (
            <View style={styles.container}>
                <TextInput
                    style={{height:50}}
                    placeholder='search...'
                    autoCorrect={false}
                    keyboardType='url'
                    onChangeText={(query)=>{
                                this.setState({
                                     query:query
                                });
                            }}
                    onSubmitEditing={
                                this.fetchData.bind(this)
                         }
                />
                <ListView
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.movies}
                        enableEmptySections={true}
                    />
            </View>
            );
        }

    }
    showMovieDetail(movie){
        this.props.navigator.push({
            name:movie.title,
            component :MovieDetail,
            params:{
                title:movie.title,
                id:movie.id,
                movie:{movie},
                // detail:movie.
            }
        });
    }
    renderEmptySection(){
        return(
            <View>
                <Text>kong</Text>
            </View>
        );
    }
    renderRow(movie){
        return(
            <TouchableHighlight
                underlayColor="rgba(34, 26, 38, 0.1)"
                onPress={()=>{
            console.log(`${movie.title}被点了！`);
            this.showMovieDetail(movie);
                }
            }
            >
                <View style={styles.itemStyle}>
                    <View style={styles.itemImage}>
                        <Image source={{uri:movie.images.large}} style={styles.itemimageStyle}/>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.textTitle}>{movie.title}</Text>
                        <Text style={styles.textTime}>{movie.genres}</Text>
                        <Text style={styles.textRating}>{movie.rating.average}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
export {SearchForm as default};
