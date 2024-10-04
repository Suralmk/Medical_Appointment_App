import {
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React from 'react'
import CustomText from '../Components/CustomText'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Header from '../Components/Header'
import useGlobal from '../Core/global'
// Mapping icon names to components for better structure
const iconMapping = {
  PersonalDetail: <Feather name='user' size={20} />,
  MedicalHistory: <FontAwesome6 name='hand-holding-medical' size={20} />,
  MedicalAppointments: <MaterialIcons name='schedule' size={20} />,
  HealthRecords: <AntDesign name='folder1' size={20} />,
  Support: <AntDesign name='customerservice' size={20} />
}

const profileOptions = [
  { option: 'Personal Details', link: 'PersonalDetail' },
  { option: 'Medical History', link: 'MedicalHistory' },
  { option: 'Appointments', link: 'MedicalAppointments' },
  { option: 'Health Records', link: 'HealthRecords' },
  { option: 'Help and Support', link: 'Support' }
]

const ProfileOption = ({ option, navigation }) => {
  const handlePress = () => {
    navigation.navigate(option.link)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      className={
        'bg-white rounded-lg flex flex-row items-center space-x-2 px-3 py-3 shadow-sm shadow-black/50 mb-3'
      }
    >
      {iconMapping[option.link]}
      <CustomText className={'text-lg'}>{option.option}</CustomText>
    </TouchableOpacity>
  )
}

const Profile = ({ navigation }) => {
  const { logout } = useGlobal()
  return (
    <SafeAreaView className={'bg-neutral  flex-1'}>
      <View
        className={
          'w-full px-3 h-[45px] mt-2 bg-neutral  flex flex-row items-center justify-between'
        }
      >
        <CustomText
          style={{ fontFamily: 'NunitoSans-bold' }}
          className={'text-xl w-full text-center text-black'}
        >
          My Profile
        </CustomText>
      </View>
      <View
        className={
          'flex flex-col bg-neutral p-3 justify-between space-y-3 w-full flex-1 '
        }
      >
        <FlatList
          data={profileOptions}
          renderItem={({ item }) => (
            <ProfileOption option={item} navigation={navigation} />
          )}
          keyExtractor={item => item.link}
          contentContainerStyle={{ flexGrow: 1 }}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => logout()}
          className={
            'bg-white rounded-2xl flex flex-row items-center space-x-2 px-7 py-2 shadow-sm shadow-black/50 mb-3  w-max m-auto'
          }
        >
          <MaterialIcons name='logout' size={20} color='red' />
          <CustomText className={'text-lg text-red-600 '}>Logout</CustomText>
        </TouchableOpacity>
        <View className={'m-[10px]'}>
          <CustomText className={'text-[15px] w-full text-center'}>
            Version 1.0
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
