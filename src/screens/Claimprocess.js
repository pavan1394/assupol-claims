import React, { useState, useRef } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Dot from './Dot';

const { width } = Dimensions.get('screen')
const renderItem = ({item, index}) => {
  return (
    <View style={styles.stepContainer} key={index}>
    {item.steps.map((step, i) => {
      return (
        <View key={i} style={{flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap'}}>
          <Dot/>
          {step?.step && <Text style={styles.processSteps}>{step?.step}</Text>}
        </View>
      );
    })}
    {item.note && <Text>Note: {item.note}</Text>}
  </View>
  )
};

const Claimprocess = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null);
  const pagination = () => { 
    return (
      <Pagination
      dotsLength={(data || []).length}
      activeDotIndex={activeIndex}
      tappableDots={true}
      containerStyle={{
        margin: 10
      }}
      dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#D52B1E'
      }}
      inactiveDotStyle={{
        width: 8,
        height: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        backgroundColor: '#E5E5E5'
      }}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
      onPress={(index) => {
        carouselRef.current.snapToItem(index);
      }}
      />
    );
  }
  return (
    <View style={{margin: 20,}}>
    <Text style={styles.heading}>Our cliams process:</Text>
    <View style={styles.renderCard}>
      <Image source={require('../images/claim-process.png')} style={styles.heroImg} />
      <Text style={styles.procesText}>How the claims process works</Text>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index)=>setActiveIndex(index)}
      />
      {pagination()}
    </View>
    </View>
  )
}

export default Claimprocess

const styles = StyleSheet.create({
  renderCard: {
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 20,
  },
  heroImg: {
    width: '100%',
    height: width * 0.5,
    resizeMode: 'cover',
    borderRadius: 20
  },
  procesText: {
    fontFamily: 'Gordita-Bold',
    fontSize: 22,
    color: '#D52B1E',
    marginTop: 20,
    lineHeight: 22
  },
  stepContainer: {
    paddingHorizontal: 20,
    margin: 20,
  },
  processSteps: {
    fontFamily: 'Gordita-Regular',
    fontSize: 12,
    color: '#37424A',
    lineHeight: 18,
    marginLeft: 8
  },
  heading: {
    fontFamily: 'Gordita-Medium',
    color: '#37424A',
    marginVertical: 20
  }
})