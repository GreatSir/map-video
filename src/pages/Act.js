import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image, ImageBackground, Text, ScrollView
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
    act: require('../temp/act.png'),
}
export default class Act extends Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={images.background} style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: 60,
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Image source={images.back} style={{position: 'absolute', left: 10}}></Image>
                        <Text style={{color: 'white', fontSize: 20}}>活动</Text>
                    </View>
                    <ScrollView style={{flex: 1}}>
                        {[0,0,0,0,0,0,0,0,0,0,].map(()=>{
                            return <View style={{flex: 1}}>
                                <View style={{
                                    width: '96%',
                                    height: 180,
                                    backgroundColor: 'red',
                                    marginLeft: '2%',
                                    marginTop: 10,
                                    borderRadius:10
                                }}>
                                    <Image source={images.act} style={{width:'100%',height:'100%'}}></Image>
                                </View>
                            </View>
                        })}
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: '100%',
        height: '100%'
    }
});