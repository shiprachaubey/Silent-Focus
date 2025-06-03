// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Switch,
// //   TouchableOpacity,
// //   useColorScheme,
// //   ScrollView,
// // } from 'react-native';
// // import { useTheme } from '@react-navigation/native';

// // const SettingsScreen = () => {
// //   const { colors } = useTheme();
// //   const isDark = useColorScheme() === 'dark';

// //   const [locationMode, setLocationMode] = useState(false);
// //   const [calendarMode, setCalendarMode] = useState(true);
// //   const [customMode, setCustomMode] = useState(false);

// //   return (
// //     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
// //       <Text style={[styles.title, { color: '#D6721E' }]}>Control Center</Text>

// //       <Text style={[styles.sectionTitle, { color: colors.text }]}>
// //         SELECT SILENCE FOCUS MODE
// //       </Text>

// //       {/* Location Mode */}
// //       <View style={styles.modeCard}>
// //         <View style={styles.row}>
// //           <View>
// //             <Text style={styles.modeTitle}>Location Mode</Text>
// //             <Text style={styles.modeDesc}>
// //               Your phone will be muted automatically when any silent zones detected like
// //               libraries, offices, or religious places.
// //             </Text>
// //           </View>
// //           <Switch
// //             value={locationMode}
// //             onValueChange={setLocationMode}
// //             trackColor={{ false: '#555', true: '#D6721E' }}
// //             thumbColor={locationMode ? '#fff' : '#ccc'}
// //           />
// //         </View>
// //       </View>

// //       {/* Calendar Mode */}
// //       <View style={styles.modeCard}>
// //         <View style={styles.row}>
// //           <View>
// //             <Text style={styles.modeTitle}>Calender Mode</Text>
// //             <Text style={styles.modeDesc}>
// //               Your phone will be muted automatically during scheduled meetings or events.
// //             </Text>
// //           </View>
// //           <Switch
// //             value={calendarMode}
// //             onValueChange={setCalendarMode}
// //             trackColor={{ false: '#555', true: '#D6721E' }}
// //             thumbColor={calendarMode ? '#fff' : '#ccc'}
// //           />
// //         </View>
// //       </View>

// //       {/* Custom Mode */}
// //       <View style={styles.modeCard}>
// //         <View style={styles.row}>
// //           <View>
// //             <Text style={styles.modeTitle}>Custom</Text>
// //             <Text style={styles.modeDesc}>
// //               You can add your custom location
// //             </Text>
// //           </View>
// //           <Switch
// //             value={customMode}
// //             onValueChange={setCustomMode}
// //             trackColor={{ false: '#555', true: '#D6721E' }}
// //             thumbColor={customMode ? '#fff' : '#ccc'}
// //           />
// //         </View>
// //       </View>

// //       {/* Auto Response Section */}
// //       <Text style={[styles.sectionTitle, { color: colors.text }]}>SET AUTO RESPONSE</Text>

// //       <View style={styles.modeCard}>
// //         <Text style={styles.modeSubTitle}>SELECT RESPONSE</Text>
// //         <TouchableOpacity>
// //           <Text style={styles.manualText}>Write Manually  ＋</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     textAlign: 'center',
// //     marginBottom: 25,
// //   },
// //   sectionTitle: {
// //     fontSize: 13,
// //     fontWeight: '600',
// //     marginBottom: 12,
// //     marginTop: 6,
// //   },
// //   modeCard: {
// //     backgroundColor: 'rgba(255,255,255,0.05)',
// //     padding: 18,
// //     borderRadius: 20,
// //     marginBottom: 16,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   modeTitle: {
// //     color: '#fff',
// //     fontSize: 15,
// //     fontWeight: '600',
// //     marginBottom: 6,
// //   },
// //   modeDesc: {
// //     color: '#999',
// //     fontSize: 13,
// //     maxWidth: 260,
// //   },
// //   modeSubTitle: {
// //     fontSize: 13,
// //     fontWeight: '600',
// //     color: '#ccc',
// //     marginBottom: 8,
// //   },
// //   manualText: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#D6721E',
// //   },
// // });

// // export default SettingsScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Switch,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from 'react-native';

// // Import your SVGs
// import LocationIcon from '../assets/svgs/Location';
// import CalendarIcon from '../assets/svgs/Calender';
// import NotificationIcon from '../assets/svgs/Notification';
// import { Modal, TextInput } from 'react-native';

// const { width } = Dimensions.get('window');

// const SettingsScreen = () => {
//   const [locationMode, setLocationMode] = useState(false);
//   const [calendarMode, setCalendarMode] = useState(true);
//   const [customMode, setCustomMode] = useState(false);

//   const [modalVisible, setModalVisible] = useState(false);
//   const [autoResponse, setAutoResponse] = useState('');
//   const [tempResponse, setTempResponse] = useState('');


//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
//       <Text style={styles.title}>Control Center</Text>

//       <Text style={styles.sectionTitle}>SELECT SILENCE FOCUS MODE</Text>

//       {/* Location Mode */}
//       <View style={styles.modeCard}>
//        <View style={styles.row}>
//   <View style={styles.iconBox}>
//     <LocationIcon />
//   </View>
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Location Mode</Text>
//             <Text style={styles.modeDesc}>
//               Your phone will be muted automatically when any silent zones detected like libraries, offices, or religious places.
//             </Text>
//           </View>
//           <Switch
//             value={locationMode}
//             onValueChange={setLocationMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={locationMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Calendar Mode */}
//       <View style={styles.modeCard}>
//         <View style={styles.row}>
//           <CalendarIcon />
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Calender Mode</Text>
//             <Text style={styles.modeDesc}>
//               Your phone will be muted automatically during scheduled meetings or events.
//             </Text>
//           </View>
//           <Switch
//             value={calendarMode}
//             onValueChange={setCalendarMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={calendarMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Custom Mode */}
//       <View style={styles.modeCard}>
//         <View style={styles.row}>
//           <NotificationIcon />
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Custom</Text>
//             <Text style={styles.modeDesc}>
//               You can add your custom location
//             </Text>
//           </View>
//           <Switch
//             value={customMode}
//             onValueChange={setCustomMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={customMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Auto Response */}
//    {autoResponse ? (
//   <Text style={styles.responsePreview}>“{autoResponse}”</Text>
// ) : null}


//       <View style={styles.responseCard}>
//         <Text style={styles.modeSubTitle}>SELECT RESPONSE</Text>
//         <View style={styles.divider} />
//       <TouchableOpacity onPress={() => {
//   setTempResponse(autoResponse);
//   setModalVisible(true);
// }}>
//   <Text style={styles.manualText}>Write Manually  ＋</Text>
// </TouchableOpacity>

//       </View>
//       <Modal
//   visible={modalVisible}
//   transparent
//   animationType="fade"
//   onRequestClose={() => setModalVisible(false)}
// >
//   <View style={styles.modalOverlay}>
//     <View style={styles.modalContent}>
//       <Text style={styles.modalTitle}>Set Auto Response</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Type your message..."
//         placeholderTextColor="#777"
//         value={tempResponse}
//         onChangeText={setTempResponse}
//         multiline
//       />
//       <View style={styles.modalButtons}>
//         <TouchableOpacity
//           style={styles.saveBtn}
//           onPress={() => {
//             setAutoResponse(tempResponse);
//             setModalVisible(false);
//           }}
//         >
//           <Text style={{ color: '#fff', fontWeight: '600' }}>Save</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.cancelBtn}
//           onPress={() => setModalVisible(false)}
//         >
//           <Text style={{ color: '#D6721E', fontWeight: '600' }}>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// </Modal>

//     </ScrollView>
//   );
// };

// const CARD_WIDTH = 334.913;
// const CARD_HEIGHT = 110.644;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111111',
//     padding: 20,
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
//     color: '#fff',
//     marginBottom: 12,
//     marginTop: 6,
//   },
//   modeCard: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     borderRadius: 17,
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     paddingHorizontal: 18,
//     paddingVertical: 16,
//     marginBottom: 16,
//     alignSelf: 'center',
//   },
//   // row: {
//   //   flexDirection: 'row',
//   //   alignItems: 'flex-start',
//   //   justifyContent: 'space-between',
//   //   gap: 12,
//   // },
//   row: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   gap: 12,
// },
// iconBox: {
//   width: 30,
//   alignItems: 'center',
//   justifyContent: 'center',
// },

//   textBlock: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   modeTitle: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   modeDesc: {
//     color: '#999',
//     fontSize: 13,
//   },
//   modeSubTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#ccc',
//     marginBottom: 8,
//   },
//   manualText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#D6721E',
//     marginTop: 10,
//   },
//   responseCard: {
//     width: CARD_WIDTH,
//     borderRadius: 17,
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     paddingHorizontal: 18,
//     paddingVertical: 16,
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'rgba(85, 85, 85, 0.35)',
//     marginBottom: 10,
//     marginTop: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
//   modalOverlay: {
//   flex: 1,
//   backgroundColor: 'rgba(0,0,0,0.6)',
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// modalContent: {
//   width: '85%',
//   backgroundColor: '#1c1c1c',
//   borderRadius: 14,
//   padding: 20,
// },
// modalTitle: {
//   color: '#fff',
//   fontSize: 16,
//   fontWeight: '600',
//   marginBottom: 12,
// },
// input: {
//   borderColor: '#555',
//   borderWidth: 1,
//   borderRadius: 10,
//   padding: 10,
//   color: '#fff',
//   fontSize: 14,
//   minHeight: 80,
//   textAlignVertical: 'top',
//   backgroundColor: '#222',
// },
// modalButtons: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginTop: 20,
// },
// saveBtn: {
//   backgroundColor: '#D6721E',
//   paddingVertical: 8,
//   paddingHorizontal: 16,
//   borderRadius: 8,
// },
// cancelBtn: {
//   paddingVertical: 8,
//   paddingHorizontal: 16,
// },
// responsePreview: {
//   marginTop: 10,
//   color: '#aaa',
//   fontStyle: 'italic',
// },

// });

// export default SettingsScreen;
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Switch,
//   TouchableOpacity,
//   ScrollView,
//   Modal,
//   TextInput,
//   Dimensions,
// } from 'react-native';

// // Your SVGs
// import LocationIcon from '../assets/svgs/Location';
// import CalendarIcon from '../assets/svgs/Calender';
// import NotificationIcon from '../assets/svgs/Notification';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = 334.913;
// const CARD_HEIGHT = 110.644;

// const SettingsScreen = () => {
//   const [locationMode, setLocationMode] = useState(false);
//   const [calendarMode, setCalendarMode] = useState(true);
//   const [customMode, setCustomMode] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [tempResponse, setTempResponse] = useState('');
//   const [autoResponse, setAutoResponse] = useState('');

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
//       <Text style={styles.title}>Control Center</Text>

//       <Text style={styles.sectionTitle}>SELECT SILENCE FOCUS MODE</Text>

//       {/* Location Mode */}
//       <View style={styles.modeCard}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}>
//             <LocationIcon />
//           </View>
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Location Mode</Text>
//             <Text style={styles.modeDesc}>
//               Your phone will be muted automatically when any silent zones detected like libraries, offices, or religious places.
//             </Text>
//           </View>
//           <Switch
//             value={locationMode}
//             onValueChange={setLocationMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={locationMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Calendar Mode */}
//       <View style={styles.modeCard}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}>
//             <CalendarIcon />
//           </View>
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Calender Mode</Text>
//             <Text style={styles.modeDesc}>
//               Your phone will be muted automatically during scheduled meetings or events.
//             </Text>
//           </View>
//           <Switch
//             value={calendarMode}
//             onValueChange={setCalendarMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={calendarMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Custom Mode */}
//       <View style={styles.modeCard}>
//         <View style={styles.row}>
//           <View style={styles.iconBox}>
//             <NotificationIcon />
//           </View>
//           <View style={styles.textBlock}>
//             <Text style={styles.modeTitle}>Custom</Text>
//             <Text style={styles.modeDesc}>
//               You can add your custom location
//             </Text>
//           </View>
//           <Switch
//             value={customMode}
//             onValueChange={setCustomMode}
//             trackColor={{ false: '#555', true: '#D6721E' }}
//             thumbColor={customMode ? '#fff' : '#ccc'}
//           />
//         </View>
//       </View>

//       {/* Auto Response Section */}
//       <Text style={styles.sectionTitle}>SET AUTO RESPONSE</Text>
//       <View style={styles.responseCard}>
//         <Text style={styles.modeSubTitle}>SELECT RESPONSE</Text>
//         <View style={styles.divider} />
//         {autoResponse ? (
//           <View style={styles.responseRow}>
//             <Text style={styles.responsePreview}>“{autoResponse}”</Text>
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
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Set Auto Response</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Type your message..."
//               placeholderTextColor="#777"
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
//     backgroundColor: '#111111',
//     padding: 20,
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
//     color: '#fff',
//     marginBottom: 12,
//     marginTop: 6,
//   },
//   modeCard: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//     borderRadius: 17,
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     paddingHorizontal: 18,
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
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '700',
//     marginBottom: 4,
//   },
//   modeDesc: {
//     color: '#999',
//     fontSize: 13,
//   },
//   responseCard: {
//     width: CARD_WIDTH,
//     borderRadius: 17,
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     paddingHorizontal: 18,
//     paddingVertical: 16,
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   modeSubTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#ccc',
//     marginBottom: 8,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'rgba(85, 85, 85, 0.35)',
//     marginBottom: 10,
//     marginTop: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
//   manualText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#D6721E',
//     marginTop: 4,
//   },
//   responsePreview: {
//     color: '#aaa',
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
//     backgroundColor: '#1c1c1c',
//     borderRadius: 14,
//     padding: 20,
//   },
//   modalTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   input: {
//     borderColor: '#555',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     color: '#fff',
//     fontSize: 14,
//     minHeight: 80,
//     textAlignVertical: 'top',
//     backgroundColor: '#222',
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
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
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
  const card = isDark ? 'rgba(85, 85, 85, 0.12)' : '#F2F2F2';
  const text = isDark ? '#FFFFFF' : '#1A1A1A';
  const mutedText = isDark ? '#AAA' : '#444';
  const divider = isDark ? 'rgba(85, 85, 85, 0.35)' : '#C2C2C2';

  return (
    <ScrollView style={[styles.container, { backgroundColor: bg }]} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}>Control Center</Text>

      <Text style={[styles.sectionTitle, { color: text }]}>SELECT SILENCE FOCUS MODE</Text>

      {/* Location Mode */}
      <View style={[styles.modeCard, { backgroundColor: card }]}>
        <View style={styles.row}>
          <View style={styles.iconBox}><LocationIcon /></View>
          <View style={styles.textBlock}>
            <Text style={[styles.modeTitle, { color: text }]}>Location Mode</Text>
            <Text style={[styles.modeDesc, { color: mutedText }]}>
              Your phone will be muted automatically when any silent zones detected like libraries, offices, or religious places.
            </Text>
          </View>
          <Switch
            value={locationMode}
            onValueChange={setLocationMode}
            trackColor={{ false: '#999', true: '#D6721E' }}
            thumbColor={locationMode ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Calendar Mode */}
      <View style={[styles.modeCard, { backgroundColor: card }]}>
        <View style={styles.row}>
          <View style={styles.iconBox}><CalendarIcon /></View>
          <View style={styles.textBlock}>
            <Text style={[styles.modeTitle, { color: text }]}>Calender Mode</Text>
            <Text style={[styles.modeDesc, { color: mutedText }]}>
              Your phone will be muted automatically during scheduled meetings or events.
            </Text>
          </View>
          <Switch
            value={calendarMode}
            onValueChange={setCalendarMode}
            trackColor={{ false: '#999', true: '#D6721E' }}
            thumbColor={calendarMode ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

      {/* Custom Mode */}
      <View style={[styles.modeCard, { backgroundColor: card }]}>
        <View style={styles.row}>
          <View style={styles.iconBox}><NotificationIcon /></View>
          <View style={styles.textBlock}>
            <Text style={[styles.modeTitle, { color: text }]}>Custom</Text>
            <Text style={[styles.modeDesc, { color: mutedText }]}>
              You can add your custom location
            </Text>
          </View>
          <Switch
            value={customMode}
            onValueChange={setCustomMode}
            trackColor={{ false: '#999', true: '#D6721E' }}
            thumbColor={customMode ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>

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
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D6721E',
    textAlign: 'center',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 6,
  },
  modeCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 17,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
    marginLeft: 10,
  },
  modeTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  modeDesc: {
    fontSize: 13,
  },
  responseCard: {
    width: CARD_WIDTH,
    borderRadius: 17,
    paddingHorizontal: 18,
    paddingVertical: 16,
    alignSelf: 'center',
    marginTop: 10,
  },
  modeSubTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    marginBottom: 10,
    marginTop: 4,
  },
  manualText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D6721E',
    marginTop: 4,
  },
  responsePreview: {
    fontSize: 13,
    fontStyle: 'italic',
    flex: 1,
  },
  responseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  deleteBtn: {
    color: '#D6721E',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    borderRadius: 14,
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveBtn: {
    backgroundColor: '#D6721E',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default SettingsScreen;
