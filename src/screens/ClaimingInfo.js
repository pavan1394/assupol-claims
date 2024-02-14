import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Dot from './Dot';
import Highlighter from 'react-native-highlight-words';
const { width, height } = Dimensions.get('screen');

const ClaimingInfo = ({ claimingInfo }) => {
  return (
    <View>
      <ImageBackground>
        <Image source={require('../images/claims-banner.png')}
          style={styles.heroImg} />
        <View style={styles.contactInfo}>
          {claimingInfo.map((data, i) => (
            <View style={{ margin: 10 }}>
              {data?.name && <Text style={[
                styles.infoText,
                {
                  fontSize: 18,
                  fontFamily: 'Gordita-Bold'
                }
              ]}>{data.name}</Text>
              }
              {data?.info && <Text style={[
                styles.infoText,
                {
                  fontSize: 12,
                  fontFamily: 'Gordita-Bold',
                  lineHeight: 12,
                  marginTop: 5
                }
              ]}>{data.info}</Text>
              }
              <Text style={[
                styles.infoText,
                {
                  fontSize: 10,
                  marginVertical: 15
                }
              ]}>you have 2 easy options:</Text>
              {data.options.map((option, i) => (
                <View style={{ marginLeft: 10, }}>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Dot color={'#ffff'} />
                    {option?.option1 && <Text style={[
                      styles.infoText,
                      {
                        fontSize: 12,
                        marginLeft: 5
                      }
                    ]}>Option 1: {option.option1}</Text>}
                    {option?.option2 && <Text style={[
                      styles.infoText,
                      {
                        fontSize: 12,
                        marginLeft: 5
                      }
                    ]}>Option 2: {option.option2}</Text>}
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    {option?.steps?.email && (
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                        <Dot color={'#ffff'} />
                        <Text style={[
                          styles.infoText,
                          {
                            fontSize: 12,
                            marginLeft: 5
                          }
                        ]}>Email: <Text style={{
                          color: '#D52B1E',
                          fontFamily: 'Gordita-Bold'
                        }}>{option.steps?.email}</Text>
                        </Text>
                      </View>
                    )}
                    {option?.steps?.fax && (
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                        <Dot color={'#ffff'} />
                        <Text style={[
                          styles.infoText,
                          {
                            fontSize: 12,
                            marginLeft: 5,
                            fontFamily: 'Gordita-Bold'
                          }
                        ]}>Fax: {option.steps?.fax}</Text>
                      </View>
                    )}
                    {option?.steps?.branch && (
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                      }}>
                        <Dot color={'#ffff'} />
                        <Text style={[
                          styles.infoText,
                          { fontSize: 12, marginLeft: 5 }
                        ]}>{option.steps?.branch}</Text>
                      </View>
                    )}
                    {option?.steps?.dial && (
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Dot color={'#ffff'} />
                        {/* <Text style={[
                          styles.infoText,
                          {
                            fontSize: 12,
                            marginLeft: 5
                          }]}> {option.steps?.dial}</Text> */}
                        <Highlighter
                          highlightStyle={{
                            color: '#D52B1E',
                            fontFamily: 'Gordita-Bold'
                          }}
                          style={[styles.infoText, {
                            fontSize: 12,
                            marginLeft: 5
                          }]}
                          searchWords={option.steps.dial.match(/\d+/g)}
                          textToHighlight={option.steps.dial}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        />
                      </View>
                    )}
                  </View>
                </View>

              ))}
              {data.btnText ?
                <TouchableOpacity style={styles.btn}>
                  <Text style={[
                    styles.infoText,
                    {
                      textAlign: 'center',
                      fontFamily: 'Gordita-Bold'
                    }
                  ]}>{data.btnText || ''}</Text>

                </TouchableOpacity>
                : null}
              {data?.contactInfo.map((contact, i) => (
                <View key={i}>
                  {contact?.title && <Text style={[
                    styles.infoText,
                    {
                      fontFamily: 'Gordita-Bold',
                      fontSize: 16,
                      color: 'red',
                      lineHeight: 18
                    }
                  ]}>{contact?.title}</Text>}
                  {contact?.des && <Text style={[
                    styles.infoText,
                    {
                      fontSize: 14,
                    }
                  ]}>{contact?.des}</Text>}
                  {contact?.dial && (
                    <View style={styles.row}>
                      <Image source={require('../images/mobile-footer.png')} style={styles.footerIcons} />
                      <Text style={[
                        styles.infoText,
                        {
                          fontSize: 12,
                          marginLeft: 10,
                          fontFamily: 'Gordita-Bold'
                        }
                      ]}>{`${contact?.dial}\n`}</Text>
                    </View>
                  )}
                  {contact?.email && (
                    <View style={styles.row}>
                      <Image source={require('../images/footer-email.png')} style={styles.footerIcons} />
                      <Text style={[
                        styles.infoText,
                        {
                          fontSize: 12,
                          marginLeft: 10,
                          fontFamily: 'Gordita-Bold'
                        }
                      ]}>{`${contact?.email}\n`}</Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  )
}

export default ClaimingInfo

const styles = StyleSheet.create({
  heroImg: {
    width: '100%',
    height: width * 0.9,
    resizeMode: 'cover',
  },
  contactInfo: {
    backgroundColor: '#000000'
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Gordita-Medium',
    lineHeight: 22
  },
  btn: {
    width: '50%',
    borderRadius: 20,
    backgroundColor: '#D52B1E',
    padding: 5,
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  footerIcons: {
    width: 18,
    resizeMode: 'contain'
  },
})