import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    ImageBackground, TouchableOpacity
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

    phots:require('../temp/phots.png'),
}

export default class storeVideo extends Component {
    constructor() {
        super();
        this.state = {
            switch: 'image'
        }
    }

    switch(tab) {
        this.setState({switch: tab})
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={images.background} style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <View style={{
                            height: 250,
                            width: '100%',
                            backgroundColor: 'red',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <View style={{
                                height: 60,
                                width: 240,
                                borderRadius: 30,
                                backgroundColor: 'white', flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                bottom: -30,
                                left: '50%',
                                marginLeft: -120
                            }}>
                                <Image source={images.fire}></Image>
                                <Text>99999999</Text>
                            </View>
                        </View>
                        <View style={{padding: 30}}>
                            <View style={{flexDirection: 'row', height: 150, alignItems: 'flex-end'}}>
                                <Image style={styles.star} source={images.fire}/>
                                <Image style={styles.star} source={images.fire}/>
                                <Image style={styles.star} source={images.fire}/>
                                <Image style={styles.star} source={images.fire}/>
                                <Image style={styles.star} source={images.fire}/>
                            </View>
                            <View style={{flexDirection: 'row', height: 50, alignItems: 'flex-end'}}>
                                <Text style={{color: 'white'}}>营业时间</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <View style={styles.line}/>
                                <Text style={{color: '#555555', paddingLeft: 20, paddingRight: 20}}>榜主信息</Text>
                                <View style={styles.line}/>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={images.man}></Image>
                                <View style={{paddingLeft: 20}}>
                                    <Text style={{color: 'white', paddingBottom: 4}}>PlayerName0013</Text>
                                    <Text style={{
                                        color: 'white',
                                        backgroundColor: 'skyblue',
                                        width: 30,
                                        textAlign: 'center',
                                        borderRadius: 5,
                                    }}>男</Text>
                                </View>
                            </View>
                            <Image source={images.temp} style={{marginTop: 10}}/>
                        </View>
                        <View style={{alignItems: 'center', width: '100%'}}>
                            <View style={{...styles.line, width: '86%', marginTop: 20}}/>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.switch('video')
                                    }}
                                ><Text style={{
                                    color: this.state.switch === 'video' ? 'white' : '#aaaaaa',
                                    margin: 10
                                }}>相关视频</Text></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.switch('today')
                                    }}
                                ><Text style={{
                                    color: this.state.switch === 'today' ? 'white' : '#aaaaaa',
                                    margin: 10
                                }}>今日榜单</Text></TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.switch('image')
                                    }}
                                ><Text style={{
                                    color: this.state.switch === 'image' ? 'white' : '#aaaaaa',
                                    margin: 10
                                }}>商户图片</Text></TouchableOpacity>
                            </View>
                        </View>
                        {!!(this.state.switch === 'video') && <View>
                            <View style={{flex: 1, padding: 30, flexDirection: 'row'}}>
                                <Image source={images.man}/>
                                <View style={{paddingLeft: 20}}>
                                    <Text style={{color: 'white', paddingBottom: 4}}>PlayerName0013</Text>
                                    <Text style={{
                                        color: 'white',
                                        backgroundColor: 'skyblue',
                                        width: 30,
                                        textAlign: 'center',
                                        borderRadius: 5,
                                    }}>男</Text>
                                </View>
                                <Text style={{color: 'white', marginLeft: 40}}>2019-11</Text>
                            </View>
                            <View style={{paddingLeft: 30}}>
                                <Image source={images.video}/>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                        <Image source={images.follow}/>
                                        <Text style={styles.colorWhite}>9999</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                        <Image source={images.follow}/>
                                        <Text style={styles.colorWhite}>9999</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                                        <Image source={images.follow}/>
                                        <Text style={styles.colorWhite}>9999</Text>
                                    </View>
                                </View>
                            </View>
                        </View>}
                        {!!(this.state.switch === 'today') &&
                        <View style={{width: '100%', alignItems: 'center'}}>
                            <View style={styles.rankBanner}>
                                <Image source={images.rankBanner1}/>
                                <View style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={images.rank1} style={{position: 'absolute', left: 14, top: 0}}/>
                                    <Image source={images.man}/>
                                    <Text>Player0101</Text>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rankBanner}>
                                <Image source={images.rankBanner2}/>
                                <View style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={images.rank2} style={{position: 'absolute', left: 14, top: 0}}/>
                                    <Image source={images.man}/>
                                    <Text>Player0101</Text>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rankBanner}>
                                <Image source={images.rankBanner3}/>
                                <View style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image source={images.rank3} style={{position: 'absolute', left: 14, top: 0}}/>
                                    <Image source={images.man}/>
                                    <Text>Player0101</Text>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image style={styles.fire} source={images.fire}/>
                                        <Text>999</Text>
                                    </View>
                                </View>
                            </View>
                        </View>}
                        {!!(this.state.switch === 'image') && <View style={{flexDirection:'row',flexWrap: 'wrap',justifyContent:'center'}}>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                            <Image style={{margin:10}} source={images.phots}></Image>
                        </View>}
                        <View style={{height: 500}}></View>
                    </ScrollView>
                </ImageBackground>
                <View style={{width: '100%', alignItems: 'center', position: 'absolute', zIndex: 1, bottom: 10}}>
                    <ImageBackground source={images.buttonBackground} style={{
                        width: 300,
                        height: 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image source={images.mv}/>
                        <Text style={{marginLeft: 10, color: 'white', fontWeight: 'bold', fontSize: 20}}>拍视频打卡</Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, width: '100%'
    },
    colorWhite: {
        color: 'white',
        marginLeft: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    fire: {
        height: 14
    },
    star: {
        width: 20, height: 20, margin: 4
    },
    line: {
        width: 130,
        height: 1,
        backgroundColor: '#555555'
    },
    rankBanner: {
        width: '92%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop:20
    }
});