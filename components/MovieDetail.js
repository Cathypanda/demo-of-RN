/**
 * Created by Cathy on 17/2/16.
 */
'use strict';

import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
    var intro="\n\t\t\t\t曾制作过《小黄人》的环球公司和Illumination Entertainment今天公布了他们一部新的动画电影档期和配音阵容。" +
        "\n\t\t\t\t该片堪称动物界的“达人秀”和“好声音”，片中会用到超过85首热门歌曲！这部动画片叫做《歌唱秀》（Sing），将于2016年12月21日上映。" +
        "马修·麦康纳希（Matthew McConaughey）为剧院老板巴斯特（Buster Moon）——一只考拉配音，这家剧院是他父亲建立的，曾经十分辉煌，但现在门庭冷落。" +
        "为了重振剧院，考拉经理决定举办一场全世界最伟大的歌唱大赛，冠军将获得10万美元的奖金！这在动物王国已经算是巨款了！"+
        "这场歌唱大赛最终选出了五位决赛选手，他们分别是：\n\t\t\t\t瑞茜·威瑟斯彭（Reese Witherspoon）配音的猪妈妈罗茜塔（Rosita），" +
        "她年轻时一直有音乐梦想，后来一窝生了25只猪仔后梦想就烟消云散了。如今她参赛一方面是为圆梦，另一方面也是因为经济上入不敷出。"+
        "斯嘉丽·约翰森（Scarlett Johansson）配音的少女豪猪艾什（Ash），她和男友建立了一个庞克摇滚乐队，但男友总是打击她，让她觉得自己没有音乐才华。" +
        "如今她要摆脱傲慢的男友，开始自己的单飞事业。\n\t\t\t\t塞斯·麦克法兰（Seth MacFarlane）配音的老鼠歌手麦克（Mike），他有着辛纳特拉的动听歌喉，但心机很深，" +
        "无时无刻不在利用遇到的每个人。\n\t\t\t\t托瑞·凯利（Tori Kelly）配音的小象米纳（Meena），胆子很小，有舞台恐惧症。塔伦·埃格顿（Taron Egerton）" +
        "配音的年轻大猩猩强尼（Johnny），父亲一心想让他继承自己家族的黑帮事业，但他不愿子承父业、只想唱歌。此外，约翰·C·莱利（John C. Reilly）也将加盟本片，" +
        "为考拉老板最好的朋友黑绵羊艾迪（Eddie）配音，他不看好歌唱比赛这个主意。\n\t\t\t\t《歌唱秀》由真人电影导演加斯·詹宁斯（Garth Jennings）执导，" +
        "他曾拍过《银河系漫游指南》（The Hitchhiker’s Guide to the Galaxy）、《兰博之子》（Son of Rambow）等片。";

export class MovieDetail extends Component{
    constructor(props){
        super(props);
        console.log("lalalala"+this.props.title);
        // console.log("bbbbbb"+this.props.movie);
        this.state={
            name:this.props.title,
            // movie:this.props.passProps,
            movieDetail:'',
            loaded:true
        };
        // const REQUEST_URL='';
    }
    back(){
        this.props.navigator.pop();
    }
    ok(){
        this.setState={
            loaded:true
        }
    }

    render(){
        if(!this.state.loaded){
            return(
                <View>
                    <Text>loading</Text>
                </View>
            );
        }else{
            let summary = intro.split(/\n/).map((p,key)=>{
                return(
                    <View style={{marginBottom:15,paddingLeft:6,paddingRight:6}}>
                        <Text>{p}</Text>
                    </View>
                );
            })
            return(
                <View style={styles.container}>
                        <ScrollView>
                        <Text style={styles.back} onPress={this.back.bind(this)}>back</Text>
                        <Text style={styles.textTitleDetail}>{this.props.title}</Text>
                            {summary}
                        </ScrollView>
                </View>
            );
        }


    }
}
export { MovieDetail as default};