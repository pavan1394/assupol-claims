import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const ClaimCard = ({ cards }) => {
  return (
    <View style={{ margin: 10 }}>
      {cards.map((card, i) => (
        <View style={styles.claimCard}>
          {card?.claimName && <Text style={styles.claimName}>{card?.claimName}</Text>}
          {card?.des && <Text style={styles.claimDes}>{card?.des}</Text>}
          {card.btnText &&
            <TouchableOpacity style={styles.btn}>
              <Text style={[
                styles.infoText,
                { textAlign: 'center' }
              ]}>{card.btnText || ''}</Text>

            </TouchableOpacity>
          }
        </View>
      ))}
    </View>
  )
}

export default ClaimCard

const styles = StyleSheet.create({
  claimCard: {
    backgroundColor: '#ffff',
    elevation: 6,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
    margin: 10,
  },
  claimName: {
    fontFamily: 'Gordita-Medium',
    fontSize: 14,
    color: '#003174',
    marginVertical: 10
  },
  claimDes: {
    color: '#37424A',
    fontSize: 12,
    marginVertical: 10
  },
  btn: {
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#D52B1E',
    padding: 5,
    marginVertical: 20
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Gordita-Medium',
    fontSize: 12
  },
})