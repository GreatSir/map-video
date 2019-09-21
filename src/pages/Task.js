import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image, Text, ImageBackground,TouchableOpacity,ScrollView
} from 'react-native';

const images = {
    background: require('../png/bgp.png'),
    fire: require('../png/act.png'),
    man: require('../png/man.png'),
    temp: require('../temp/jifen.png'),
    video: require('../temp/video.png'),
    follow: require('../png/follow.png'),
    buttonBackground: require('../png/bbtn／blue.png'),
    mv: require('../png/mv.png'),
    rank1: require('../png/rank／1.png'),
    rank2: require('../png/rank／2.png'),
    rank3: require('../png/rank／3.png'),
    rank4: require('../png/rank／4-9999.png'),

    rankBanner1: require('../png/rankbanner／1.png'),
    rankBanner2: require('../png/rankbanner／2.png'),
    rankBanner3: require('../png/rankbanner／3.png'),
    rankBanner4: require('../png/rankbanner／4-999.png'),

    back: require('../png/back.png'),

    phots: require('../temp/phots.png'),

    slot1: require('../png/slot／1.png'),
    slot2: require('../png/slot／2.png'),
    slot3: require('../png/slot／3.png'),
    i1: require('../png/i1.png'),
    hot: require('../png/label／hot.png'),
    new: require('../png/label／new.png'),

    btnOn:require('../png/btns／on.png'),
    btnOff:require('../png/btns／off.png')
};
export default class Task extends Component {


    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={images.background} style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: 60,
                        alignItems: 'center',
                        padding: 10,
                    }}>
                        <Image source={images.back} style={{position: 'absolute', left: 10}}></Image>
                        <Text style={{color: 'white', fontSize: 20}}>任务</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.line}/>
                        <Text style={{color: '#555555', paddingLeft: 20, paddingRight: 20}}>每日任务</Text>
                        <View style={styles.line}/>
                    </View>
                    <View style={{flex: 1}}>
                        {[0,0,0].map(i=>{
                            return <View style={{
                                height: 70,
                                width: '96%',
                                backgroundColor: '#6c5695',
                                marginTop: 20,
                                borderBottomRightRadius: 6,
                                borderTopRightRadius: 6,flexDirection:'row',
                                overflow:'hidden'
                            }}>
                                <View style={{width:'55%',height:'100%',justifyContent:'space-around'}}>
                                    <Text style={{fontSize:12,color:'white'}}>说明说明说明说明说明说明说明说明</Text>
                                    <Text style={{fontSize:12,color:'#aaaaaa'}}>说明说明说明说明说说明说明说明</Text>
                                    <View style={{height:16,backgroundColor:'#83FF00',width:200,borderRadius:8,borderColor:'black',borderStyle:'solid',borderWidth:2}}></View>
                                </View>
                                <View style={{width:'45%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                    <View style={{width:24,height:32,borderRadius:12,backgroundColor:'skyblue'}}></View>
                                    <Text style={{color:'white'}}>999999</Text>
                                    <TouchableOpacity>
                                        <Image source={images.btnOn}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        })}
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:40}}>
                        <View style={styles.line}/>
                        <Text style={{color: '#555555', paddingLeft: 20, paddingRight: 20}}>成就任务</Text>
                        <View style={styles.line}/>
                    </View>
                    <View style={{flex: 1}}>
                        {[0,0,0,0,0,0,0,0,0,0,0,0,0].map(i=>{
                            return <View style={{
                                height: 70,
                                width: '96%',
                                backgroundColor: '#47669e',
                                marginTop: 20,
                                borderBottomRightRadius: 6,
                                borderTopRightRadius: 6,flexDirection:'row',
                                overflow:'hidden'
                            }}>
                                <View style={{width:'55%',height:'100%',justifyContent:'space-around'}}>
                                    <Text style={{fontSize:12,color:'white'}}>说明说明说明说明说明说明说明说明</Text>
                                    <Text style={{fontSize:12,color:'#aaaaaa'}}>说明说明说明说明说说明说明说明</Text>
                                    <View style={{height:16,backgroundColor:'#83FF00',width:200,borderRadius:8,borderColor:'black',borderStyle:'solid',borderWidth:2}}></View>
                                </View>
                                <View style={{width:'45%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                    <View style={{width:24,height:32,borderRadius:12,backgroundColor:'skyblue'}}></View>
                                    <Text style={{color:'white'}}>999999</Text>
                                    <TouchableOpacity>
                                        <Image source={images.btnOn}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        })}
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:40

    },
    image: {
        width: '100%',
        height: '100%',
    },
    line: {
        width: 130,
        height: 1,
        backgroundColor: '#555555',
    },
});
