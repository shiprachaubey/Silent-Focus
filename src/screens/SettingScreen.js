
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Dimensions,
  useColorScheme,
} from 'react-native';

import LocationIcon from '../assets/svgs/Location';
import CalendarIcon from '../assets/svgs/Calender';
import NotificationIcon from '../assets/svgs/Notification';
import Toggle from '../assets/svgs/Toggle'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const { width } = Dimensions.get('window');
const CARD_WIDTH = 334.913;
const CARD_HEIGHT = 110.644;

const SettingsScreen = () => {
  const [locationMode, setLocationMode] = useState(false);
  const [calendarMode, setCalendarMode] = useState(true);
  const [customMode, setCustomMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempResponse, setTempResponse] = useState('');
  const [autoResponse, setAutoResponse] = useState('');

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const bg = isDark ? '#111111' : '#FFFFFF';
  const card = isDark ? 'rgba(85, 85, 85, 0.12)' : '#2E3A3E14';
  const text = isDark ? '#FFFFFF' : '#1A1A1A';
  const mutedText = isDark ? '#AAA' : '#444';
  const divider = isDark ? 'rgba(85, 85, 85, 0.35)' : '#C2C2C2';

  return (
//     <ScrollView style={[styles.container, { backgroundColor: bg }]} contentContainerStyle={{ paddingBottom: 60 }}>
//       <Text style={styles.title}>Control Center</Text>

//       <Text style={[styles.sectionTitle, { color: text }]}>SELECT SILENCE FOCUS MODE</Text>

//       {/* Location Mode */}
//       <View style={[styles.modeCard, { backgroundColor: card }]}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}><LocationIcon /></View>
//           <View style={styles.textBlock}>
//             <Text style={[styles.modeTitle, { color: text }]}>Location Mode</Text>
//             <Text style={[styles.modeDesc, { color: mutedText }]}>
//               Your phone will be muted automatically when any silent zones detected like libraries, offices, or religious places.
//             </Text>
//           </View>
//          <TouchableOpacity onPress={() => setLocationMode(prev => !prev)}>
//   <Toggle isOn={locationMode} />
// </TouchableOpacity>

//         </View>
//       </View>

//       {/* Calendar Mode */}
//       <View style={[styles.modeCard, { backgroundColor: card }]}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}><CalendarIcon /></View>
//           <View style={styles.textBlock}>
//             <Text style={[styles.modeTitle, { color: text }]}>Calender Mode</Text>
//             <Text style={[styles.modeDesc, { color: mutedText }]}>
//               Your phone will be muted automatically during scheduled meetings or events.
//             </Text>
//           </View>
//         <TouchableOpacity onPress={() => setCalendarMode(prev => !prev)}>
//   <Toggle isOn={calendarMode} />
// </TouchableOpacity>

//         </View>
//       </View>

//       {/* Custom Mode */}
//       <View style={[styles.modeCard, { backgroundColor: card }]}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}><NotificationIcon /></View>
//           <View style={styles.textBlock}>
//             <Text style={[styles.modeTitle, { color: text }]}>Custom</Text>
//             <Text style={[styles.modeDesc, { color: mutedText }]}>
//               You can add your custom location
//             </Text>
//           </View>
//           <TouchableOpacity onPress={() => setCustomMode(prev => !prev)}>
//   <Toggle isOn={customMode} />
// </TouchableOpacity>

//         </View>
//       </View>

//       {/* Auto Response Section */}
//       <Text style={[styles.sectionTitle, { color: text }]}>SET AUTO RESPONSE</Text>
//       <View style={[styles.responseCard, { backgroundColor: card }]}>
//         <Text style={[styles.modeSubTitle, { color: text }]}>SELECT RESPONSE</Text>
//         <View style={[styles.divider, { backgroundColor: divider }]} />
//         {autoResponse ? (
//           <View style={styles.responseRow}>
//             <Text style={[styles.responsePreview, { color: mutedText }]}>“{autoResponse}”</Text>
//             <TouchableOpacity onPress={() => setAutoResponse('')}>
//               <Text style={styles.deleteBtn}>✕</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity
//             onPress={() => {
//               setTempResponse(autoResponse);
//               setModalVisible(true);
//             }}
//           >
//             <Text style={styles.manualText}>Write Manually  ＋</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Modal */}
//       <Modal
//         visible={modalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, { backgroundColor: isDark ? '#1c1c1c' : '#fff' }]}>
//             <Text style={[styles.modalTitle, { color: text }]}>Set Auto Response</Text>
//             <TextInput
//               style={[styles.input, { color: text, backgroundColor: isDark ? '#222' : '#f2f2f2' }]}
//               placeholder="Type your message..."
//               placeholderTextColor={mutedText}
//               value={tempResponse}
//               onChangeText={setTempResponse}
//               multiline
//             />
//             <View style={styles.modalButtons}>
//               <TouchableOpacity
//                 style={styles.saveBtn}
//                 onPress={() => {
//                   setAutoResponse(tempResponse.trim());
//                   setModalVisible(false);
//                 }}
//               >
//                 <Text style={{ color: '#fff', fontWeight: '600' }}>Save</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.cancelBtn}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={{ color: '#D6721E', fontWeight: '600' }}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#D6721E',
//     textAlign: 'center',
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: '700',
//     marginBottom: 12,
//     marginTop: 6,
//   },
//   modeCard: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     borderRadius: 17,
//     paddingHorizontal: 12,
//     paddingVertical: 16,
//     marginBottom: 16,
//     alignSelf: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   iconBox: {
//     width: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textBlock: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   modeTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   modeDesc: {
//     fontSize: 13,
//   },
//   responseCard: {
//     width: CARD_WIDTH,
//     borderRadius: 17,
//     paddingHorizontal: 18,
//     paddingVertical: 16,
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   modeSubTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   divider: {
//     height: 1,
//     marginBottom: 10,
//     marginTop: 4,
//   },
//   manualText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#D6721E',
//     marginTop: 4,
//   },
//   responsePreview: {
//     fontSize: 13,
//     fontStyle: 'italic',
//     flex: 1,
//   },
//   responseRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 4,
//   },
//   deleteBtn: {
//     color: '#D6721E',
//     fontSize: 16,
//     paddingHorizontal: 8,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '85%',
//     borderRadius: 14,
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 14,
//     minHeight: 80,
//     textAlignVertical: 'top',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   saveBtn: {
//     backgroundColor: '#D6721E',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   cancelBtn: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
// });

// export default SettingsScreen;





 <ScrollView style={[styles.container, { backgroundColor: bg }]} contentContainerStyle={{ paddingBottom: hp('7%') }}>
      <Text style={styles.title}>Control Center</Text>

      <Text style={[styles.sectionTitle, { color: text }]}>SELECT SILENCE FOCUS MODE</Text>

      {/* Location, Calendar, and Custom Modes */}
      {[{
        icon: <LocationIcon />,
        title: 'Location Mode',
        desc: 'Your phone will be muted automatically when any silent zones detected like libraries, offices, or religious places.',
        toggle: locationMode,
        onPress: () => setLocationMode(p => !p),
      }, {
        icon: <CalendarIcon />,
        title: 'Calender Mode',
        desc: 'Your phone will be muted automatically during scheduled meetings or events.',
        toggle: calendarMode,
        onPress: () => setCalendarMode(p => !p),
      }, {
        icon: <NotificationIcon />,
        title: 'Custom',
        desc: 'You can add your custom location',
        toggle: customMode,
        onPress: () => setCustomMode(p => !p),
      }].map((item, idx) => (
        <View key={idx} style={[styles.modeCard, { backgroundColor: card }]}>
          <View style={styles.row}>
            <View style={styles.iconBox}>{item.icon}</View>
            <View style={styles.textBlock}>
              <Text style={[styles.modeTitle, { color: text }]}>{item.title}</Text>
              <Text style={[styles.modeDesc, { color: mutedText }]}>{item.desc}</Text>
            </View>
            <TouchableOpacity onPress={item.onPress}>
              <Toggle isOn={item.toggle} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Auto Response Section */}
      <Text style={[styles.sectionTitle, { color: text }]}>SET AUTO RESPONSE</Text>
      <View style={[styles.responseCard, { backgroundColor: card }]}>
        <Text style={[styles.modeSubTitle, { color: text }]}>SELECT RESPONSE</Text>
        <View style={[styles.divider, { backgroundColor: divider }]} />
        {autoResponse ? (
          <View style={styles.responseRow}>
            <Text style={[styles.responsePreview, { color: mutedText }]}>“{autoResponse}”</Text>
            <TouchableOpacity onPress={() => setAutoResponse('')}>
              <Text style={styles.deleteBtn}>✕</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setTempResponse(autoResponse);
              setModalVisible(true);
            }}
          >
            <Text style={styles.manualText}>Write Manually  ＋</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: isDark ? '#1c1c1c' : '#fff' }]}>
            <Text style={[styles.modalTitle, { color: text }]}>Set Auto Response</Text>
            <TextInput
              style={[styles.input, { color: text, backgroundColor: isDark ? '#222' : '#f2f2f2' }]}
              placeholder="Type your message..."
              placeholderTextColor={mutedText}
              value={tempResponse}
              onChangeText={setTempResponse}
              multiline
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                  setAutoResponse(tempResponse.trim());
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: '#fff', fontWeight: '600' }}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: '#D6721E', fontWeight: '600' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('4%'),
    paddingHorizontal: wp('5%'),
  },
  title: {
    fontSize: wp('5.5%'),
    fontWeight: '700',
    color: '#D6721E',
    textAlign: 'center',
    marginBottom: hp('3%'),
  },
  sectionTitle: {
    fontSize: wp('3.4%'),
    fontWeight: '700',
    marginBottom: hp('1.5%'),
    marginTop: hp('1%'),
  },
  modeCard: {
    width: wp('90%'),
    height: hp('14%'),
    borderRadius: wp('4.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    marginBottom: hp('2%'),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('3%'),
  },
  iconBox: {
    width: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
    marginLeft: wp('2.5%'),
  },
  modeTitle: {
    fontSize: wp('4%'),
    fontWeight: '700',
    marginBottom: hp('0.5%'),
  },
  modeDesc: {
    fontSize: wp('3.2%'),
  },
  responseCard: {
    width: wp('90%'),
    borderRadius: wp('4.5%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    alignSelf: 'center',
    marginTop: hp('1.5%'),
  },
  modeSubTitle: {
    fontSize: wp('3.3%'),
    fontWeight: '600',
    marginBottom: hp('1%'),
  },
  divider: {
    height: 1,
    marginBottom: hp('1.2%'),
    marginTop: hp('0.5%'),
  },
  manualText: {
    fontSize: wp('3.5%'),
    fontWeight: '600',
    color: '#D6721E',
    marginTop: hp('0.5%'),
  },
  responsePreview: {
    fontSize: wp('3.2%'),
    fontStyle: 'italic',
    flex: 1,
  },
  responseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('0.5%'),
  },
  deleteBtn: {
    color: '#D6721E',
    fontSize: wp('4.5%'),
    paddingHorizontal: wp('2%'),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: wp('85%'),
    borderRadius: wp('3.5%'),
    padding: wp('5%'),
  },
  modalTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginBottom: hp('1.5%'),
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp('2.5%'),
    padding: wp('3%'),
    fontSize: wp('3.5%'),
    minHeight: hp('12%'),
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  saveBtn: {
    backgroundColor: '#D6721E',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
  },
  cancelBtn: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
});

export default SettingsScreen;