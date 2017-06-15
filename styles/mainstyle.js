/**
 * Created by Cathy on 17/2/16.
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight
} from 'react-native';

  const styles = StyleSheet.create({
    itemContent:{
        flex:2,
        marginTop:10,
        marginLeft:5,
    },
    textTitle:{
        fontSize:18,
        fontWeight:'100',
        color:'#cd55dd',
        marginBottom:6
    },
    textTime:{
        fontSize:15,
        marginTop:5
    },
    textRating:{
        fontSize:12,
        color:'#ff5555'
    },
    itemImage:{
        flex:1,
        marginLeft:13,
        marginTop:6,
    },
    itemimageStyle:{
        width:80,
        height:120,
        resizeMode:'cover'
    },
    itemStyle:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'rgba(100,53,201,0.1)',
        paddingBottom:10,
        paddingTop:6,
        flex:1
    },
    overlay:{
        backgroundColor:'#87CEEB',
        alignItems:'center'
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#eae7ff',
        flexDirection:'column'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontFamily:'Helvetica Neue'
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imageStyle:{
        // width:200,
        // height:200,
        flex:1,
        resizeMode:'cover'

    },
      back:{
        fontSize:20,
        fontFamily: 'Helvetica Neue',
          color:'black'
      },
      textTitleDetail:{
          fontSize:20,
          fontFamily: 'Helvetica Neue',
          color:'blue',
          marginLeft:20
      },
      textDetail:{
        fontSize:15,
          fontFamily: 'Helvetica Neue',
          color:'#333333',
          marginLeft:15
      },
      progressContainer:{
        flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      btnFlex:{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          padding:5,
          flexDirection:'column'
      },
      viewPagerStyle:{
            flex:10,
          flexDirection:'row',
          // backgroundColor:'#cdcdcd'
      },navigatorStyle:{
          flex:1,

      }

  });
  export {styles as default}
