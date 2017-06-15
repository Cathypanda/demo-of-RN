/**
 * Created by Cathy on 17/2/17.
 */
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import MovieDetail from '../components/MovieDetail';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight,
    ProgressBarAndroid,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
var url='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
class MovieList extends Component{
    constructor(props){
        super(props);
        //let movies = [{title:'lallala'},{title:'lallala'},{title:'lallala'},{title:'lallala'},{title:'lallala'}];
        var ds=new ListView.DataSource({
            rowHasChanged:(row1,row2)=>row1 !== row2
        });
        this.state={
            loaded:false,
            data:ds,
            isShowBottomRefresh:false,
            isFreshing:false,
            bounceValue:new Animated.Value(0)
        };
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
    getRenderROW(movie){
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
                        <Image source={{uri:movie.posters.thumbnail}} style={styles.itemimageStyle}/>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.textTitle}>{movie.title}</Text>
                        <Text style={styles.textTime}>{movie.year}</Text>
                        <Text style={styles.textRating}>{movie.ratings.critics_score}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    //组件挂载完成后执行的方法
    componentDidMount(){
        //组件挂载后开始下载数据
        this.getMovieFromeAPI(url);
    }
    getMovieFromeAPI(url){
        return(
            fetch(url).then(
                (response)=>response.json()
            ).then(
                (responseData)=>{
                    // console.log(responseData);
                    this.setState({
                        loaded:true,
                        data:this.state.data.cloneWithRows(responseData.movies)
                    });
                }
            ).catch(error=>{
                console.log(error);
            }));
    }
    onEndReached(){
            console.log('onendreach');
            this.setState({
                isShowBottomRefresh:true
            })
    }
    reloadWordData() {
        console.log('reloadworddata');
        this.setState({
            isFreshing: true
        });
        setTimeout(() => {
            // prepend 10 items
            // const rowData = Array.from(new Array(5))
            //     .map((val, i) => ({
            //         // text: 'Loaded row ' + (+this.state.loaded + i),
            //     }))
            //     .concat(this.state.rowData);
            this.setState({
                isFreshing: false,
            });
        }, 5000);
    }
    _renderFooter() {
            console.log('footer')
        if(this.state.isShowBottomRefresh){//加载完毕
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:12,marginTop:10}}>
                        加载完毕
                    </Text>
                </View>);
        }else {//加载中
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'center',}}>
                    <Text>loading footer</Text>
                </View>);
        }
                    // <Image source={{uri:loadgif}} style={{width:20,height:20}}/>
    }
    render() {
        if (!this.state.loaded) {
            return(
                <View style={styles.progressContainer}>
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
            );
        } else {
            return (
                        <ListView
                            refreshControl={
                                <RefreshControl
                                            refreshing={this.state.isFreshing}
                                            onRefresh={this.reloadWordData.bind(this)}
                                        />
                            }
                            style={{flex:1}}
                            enableEmptySections={true}
                            dataSource={this.state.data}
                            renderRow={this.getRenderROW.bind(this)}
                            renderFooter={this._renderFooter.bind(this)}
                            initialListSize={10}
                            onEndReached={this.onEndReached.bind(this)}
                        />
            );
        }
                    // {/*<Image source={require('./image/icon_logo.png')} style={styles.image}></Image>*/}
                    // {/*<Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}*/}
                    // {/*style={styles.imageStyle}>*/}
    }
    // _onRefresh() {
    //     this.setState({isRefreshing: true});
    //     setTimeout(() => {
    //         // 进行准备5项新数据
    //         const rowData = Array.from(new Array(5))
    //             .map((val, i) => ({
    //                 text: '下拉刷新行' + (+this.state.loaded + i)
    //             }))
    //             .concat(this.state.data);
    //
    //         this.setState({
    //             loaded: this.state.loaded + 5,
    //             isRefreshing: false,
    //             data: rowData,
    //         });
    //     }, 5000);
    //     }
    }
export {MovieList as default};