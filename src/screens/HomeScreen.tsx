import React from 'react';
import {Alert, FlatList, ScrollView, StyleSheet, View, TouchableOpacity, } from 'react-native';
import {
  Card,
  Button,
  Divider,
  Text,
  Title,
  Paragraph,
} from 'react-native-paper';
import Highlighter from 'react-native-highlight-words';
import ClaimCard from './ClaimCard';
import ClaimingInfo from './ClaimingInfo';
import Claimprocess from './Claimprocess';
import Header from './Header';
import NavTabs from './NavTabs';

const AboutClaim = [
  {
    name: 'Claims',
    info: 'We understand that claiming a policy benefit may seen like a daunting process, particularly during a difficult time such as after the loss of a loved one.',
    options: [
      {
        option1: 'submit your claim online, or'
      },
      {
        option2: 'download and completes the claim documents, and submit on',
        steps: {
          email: 'claimsregistration@assupol.co.za; or',
          fax: '087 233 6300/7300',
          branch: 'At your nearest Assupol branch',
          dial: 'For any claims queries, call us on 0861 235 664'
        }
      }
    ],
    btnText: 'submit claim online',
    contactInfo: [
      {
        title: 'Contact us',
        des: 'phone us and we will assist you',
        dial: '0861 235 664',
        email: 'claimsregistration@assupol.co.za',
      }
    ]
  }
];

const claimCards = [
  {
    claimName: 'Death Claim',
    des: 'Use this form for a death of a dependant on your policy',
    btnText: 'Find out more'
  },
  {
    claimName: 'Cashback Claim',
    des: 'Use this claim form for a Cashback claim',
    btnText: 'Find out more'
  },
  {
    claimName: 'Withdrawals Claim',
    des: 'Use this form for a claim on a School Fund Provider, Cash Provider or One Savings',
    btnText: 'Find out more'
  },
  {
    claimName: 'Maturity Claim',
    des: 'Use this claim form to claim your maturity claim',
    btnText: 'Find out more'
  },
];

const claimProcess = [
  {
    steps: [
      {
        step: 'Once a related life event happens, you can submit a claim on your policy.'
      },
      {
        step: 'Choose your claim type on the website and submit your claim online, or download the documents and email, fax or submit it at the nearest Assupol branch.'
      },
      {
        step: 'When all your documents are completed and submitted, you will get an SMS confirming receipt of your claim.'
      },
    ]
  },
  {
    steps: [
      {
        step: 'Your claim will be assessed and validated.'
      },
      {
        step: 'Your claim will be approved within 24 hours if all required documents have been submitted'
      }
    ],
    note: 'You will be updated on the progress of your claim throughout the claims process.'
  }
];

const branchVisitData = [
  {
    title: 'Visit a branch',
    des: "Visit any of our countrywide branches where you will be assisted with your claim.\nDon't forget to take your claim documentation with you.",
    btnText: 'Find a branch'
  }
]

const BranchVisit = () => {
  return (
    <View style={{ margin: 20 }}>
      {branchVisitData.map((data, i) => (
        <View>
          {data?.title && <Text style={styles.branchTitle}>{data?.title}</Text>}
          {data?.des && <Text style={styles.branchDes}>{data?.des}</Text>}
          {data.btnText &&
            <TouchableOpacity style={styles.btn}>
              <Text style={[
                styles.infoText,
                { textAlign: 'center' }
              ]}>{data.btnText || ''}</Text>

            </TouchableOpacity>
          }
        </View>
      ))}
    </View>
  )
}

const HomeScreen = () => {
  const claimNotice = "Assupol pays out millions of rands in policy benefits every month. We make every effort to pay these benefits as quickly as possible. Despite our best efforts, payments can sometimes be delayed if the policyholder doesn’t claim the benefits they are entitled to, or if we are unable to contact them. For that reason, we would advise you as an Assupol policyholder to contact us if your details change, for example, if you move to a new house.We will always do our best to find policyholders, but by keeping your contact details up to date, you can help us make faster benefit payments.In the case of government employees who are policyholders, government has agreed to help us pay such unclaimed benefits into the same bank accounts that their salaries are paid into. The bank account details will remain private.If you have received a benefit payment and you are not sure why, please call us on 0861 235 664 and we will explain it to you."
  return (
    <View style={{ flex: 1 }}>
    {/* <Header /> */}
    <NavTabs data={[]}/>
    <ScrollView>
      <ClaimingInfo claimingInfo={AboutClaim} />
      <Claimprocess data={claimProcess} />
      <BranchVisit />
      <ClaimCard cards={claimCards} />
      <View style={{ margin: 20 }}>
        <Text style={styles.claimText}>Claim notice</Text>
        {/* <Text style={styles.claimNotice}>{claimNotice}</Text> */}
        <Highlighter
          highlightStyle={{
            color: '#D52B1E',
            fontFamily: 'Gordita-Bold'
          }}
          style={[styles.claimNotice, {
            fontSize: 12,
            marginLeft: 5
          }]}
          searchWords={claimNotice.match(/\d+/g)}
          textToHighlight={claimNotice}
        />
      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  cardWidth: {
    width: 270,
  },
  claimNotice: {
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
    lineHeight: 18,
    color: '#37424A'
  },
  claimText: {
    fontFamily: 'Gordita-Bold',
    fontSize: 14,
    color: '#D52B1E',
    lineHeight: 18,
    marginBottom: 20
  },
  btn: {
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#D52B1E',
    padding: 10,
    marginVertical: 15
  },
  infoText: {
    color: '#fff',
    fontFamily: 'Gordita-Medium',
    fontSize: 12
  },
  branchDes: {
    marginVertical: 15,
    color: '#37424A',
    fontFamily: 'Gordita-Regular',
    fontSize: 12,
    lineHeight: 16
  },
  branchTitle: {
    fontFamily: 'Gordita-Bold',
    color: '#D52B1E'
  }
});

export default HomeScreen;
