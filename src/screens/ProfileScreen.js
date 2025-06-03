// // // import React from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   useColorScheme,
// // //   ScrollView,
// // // } from 'react-native';
// // // import { useTheme } from '@react-navigation/native';

// // // const ProfileScreen = () => {
// // //   const scheme = useColorScheme();
// // //   const isDark = scheme === 'dark';
// // //   const { colors } = useTheme();

// // //   return (
// // //     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
// // //       <Text style={[styles.header, { color: '#D6721E' }]}>Account Center</Text>

// // //       {/* Profile Info */}
// // //       <Section title="Profile & Account Info">
// // //         <Field label="Name" value="Ayan Hazra" />
// // //         <Field label="Email" value="jesus722481@gmail.com" />
// // //         <Field
// // //           label="Phone"
// // //           value="+  Add Phone Number"
// // //           isAction
// // //           color={isDark ? '#FFA43A' : '#D6721E'}
// // //         />
// // //       </Section>

// // //       {/* Calendar Settings */}
// // //       <Section title="Calender Settings">
// // //         <Field label="Calender Sync" value="Active" color="green" />
// // //         <Field label="Event Filters" value="Modify Filters" color="#FFA43A" />
// // //         <TouchableOpacity>
// // //           <Text style={[styles.link, { color: '#D6721E' }]}>Disconnect Calender</Text>
// // //         </TouchableOpacity>
// // //       </Section>

// // //       {/* Privacy & Permissions */}
// // //       <Section title="Privacy & Permissions">
// // //         <Field
// // //           label="Active Permissions"
// // //           value="Location, Calender, Notification"
// // //           color="#888"
// // //         />
// // //         <Field label="Add or Change Password" />
// // //       </Section>

// // //       {/* Legal */}
// // //       <Section title="Legal & Data Controls">
// // //         <Field label="Terms of Service" />
// // //         <Field label="Privacy Policy" />
// // //       </Section>

// // //       {/* Logout Button */}
// // //       <TouchableOpacity style={styles.logoutBtn}>
// // //         <Text style={styles.logoutText}>⎋ Logout</Text>
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // const Section = ({ title, children }) => (
// // //   <View style={styles.section}>
// // //     <Text style={styles.sectionTitle}>{title}</Text>
// // //     <View style={styles.sectionBox}>{children}</View>
// // //   </View>
// // // );

// // // const Field = ({ label, value, isAction, color }) => (
// // //   <View style={styles.fieldRow}>
// // //     <Text style={[styles.label]}>{label}</Text>
// // //     <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
// // //   </View>
// // // );

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //   },
// // //   header: {
// // //     fontSize: 20,
// // //     fontWeight: '700',
// // //     marginBottom: 20,
// // //     alignSelf: 'center',
// // //   },
// // //   section: {
// // //     marginBottom: 25,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 13,
// // //     fontWeight: '600',
// // //     marginBottom: 10,
// // //     color: '#aaa',
// // //   },
// // //   sectionBox: {
// // //     backgroundColor: 'rgba(255, 255, 255, 0.05)',
// // //     padding: 16,
// // //     borderRadius: 16,
// // //   },
// // //   fieldRow: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     paddingVertical: 6,
// // //   },
// // //   label: {
// // //     fontSize: 14,
// // //     fontWeight: '500',
// // //     color: '#eee',
// // //   },
// // //   value: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //   },
// // //   link: {
// // //     marginTop: 10,
// // //     textAlign: 'center',
// // //     fontSize: 13,
// // //     fontWeight: '600',
// // //   },
// // //   logoutBtn: {
// // //     backgroundColor: '#D6721E',
// // //     paddingVertical: 14,
// // //     borderRadius: 30,
// // //     alignItems: 'center',
// // //     marginTop: 30,
// // //     marginBottom: 40,
// // //   },
// // //   logoutText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: '600',
// // //   },
// // // });

// // // export default ProfileScreen;



// // // import React from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   TouchableOpacity,
// // //   ScrollView,
// // //   Dimensions,
// // // } from 'react-native';
// // // import LinearGradient from 'react-native-linear-gradient';
// // // import LogoutIcon from '../assets/svgs/Logout';

// // // const { width } = Dimensions.get('window');

// // // const ProfileScreen = () => {
// // //   return (
// // //     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
// // //       <Text style={styles.header}>Account Center</Text>

// // //       {/* Account Info */}
// // //       <Section title="Account & Profile" height={125}>
// // //         <Field label="Name" value="Ayan Hazra" />
// // //         <Field label="Email" value="jesus722481@gmail.com" />
// // //         <Field
// // //           label="Phone"
// // //           value="+  Add Phone Number"
// // //           color="#D6721E"
// // //         />
// // //       </Section>

// // //       {/* Calendar Settings */}
// // //       <Section title="Calender Settings" height={153}>
// // //         <Field label="Calender Sync" value="Active" color="#38B000" />
// // //         <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
// // //         <TouchableOpacity>
// // //           <Text style={[styles.link, { color: '#D6721E' }]}>Disconnect Calender</Text>
// // //         </TouchableOpacity>
// // //       </Section>

// // //       {/* Privacy */}
// // //       <Section title="Privacy & Permissions" height={109}>
// // //         <Field label="Active Permissions" value="Location, Calender, Notifications" color="#aaa" />
// // //         <Field label="Change Password" />
// // //       </Section>

// // //       {/* Legal */}
// // //       <Section title="Legal & Data Controls" height={109}>
// // //         <Field label="Terms of Service" />
// // //         <Field label="Privacy Policy" />
// // //       </Section>

// // //       {/* Logout */}
// // //       <TouchableOpacity style={styles.logoutWrapper}>
// // //         <LinearGradient
// // //           colors={['#B87333', '#B06E31', '#523317']}
// // //           start={{ x: 0, y: 0.5 }}
// // //           end={{ x: 1, y: 0.5 }}
// // //           style={styles.logoutBtn}
// // //         >
// // //           <LogoutIcon width={16} height={16} />
// // //           <Text style={styles.logoutText}>Logout</Text>
// // //         </LinearGradient>
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // // Reusable Components
// // // const Section = ({ title, children, height }) => (
// // //   <View style={styles.section}>
// // //     <Text style={styles.sectionTitle}>{title}</Text>
// // //     <View style={[styles.sectionBox, { height }]}>{children}</View>
// // //   </View>
// // // );

// // // const Field = ({ label, value, color }) => (
// // //   <View style={styles.fieldRow}>
// // //     <Text style={styles.label}>{label}</Text>
// // //     <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
// // //   </View>
// // // );

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#111111',
// // //     padding: 20,
// // //   },
// // //   header: {
// // //     fontSize: 20,
// // //     fontWeight: '700',
// // //     color: '#D6721E',
// // //     textAlign: 'center',
// // //     marginBottom: 20,
// // //   },
// // //   section: {
// // //     marginBottom: 25,
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 13,
// // //     fontWeight: '600',
// // //     color: '#ccc',
// // //     marginBottom: 10,
// // //   },
// // //   sectionBox: {
// // //     width: 335,
// // //     alignSelf: 'center',
// // //     backgroundColor: 'rgba(85, 85, 85, 0.12)',
// // //     borderRadius: 17,
// // //     padding: 16,
// // //     justifyContent: 'space-between',
// // //   },
// // //   fieldRow: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     paddingVertical: 6,
// // //   },
// // //   label: {
// // //     fontSize: 14,
// // //     fontWeight: '500',
// // //     color: '#eee',
// // //   },
// // //   value: {
// // //     fontSize: 14,
// // //     fontWeight: '600',
// // //   },
// // //   link: {
// // //     marginTop: 10,
// // //     textAlign: 'left',
// // //     fontSize: 13,
// // //     fontWeight: '600',
// // //   },
// // //   logoutWrapper: {
// // //     alignItems: 'center',
// // //     marginTop: 10,
// // //   },
// // //   logoutBtn: {
// // //     width: 151,
// // //     height: 47,
// // //     borderRadius: 42,
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.4,
// // //     shadowRadius: 65,
// // //   },
// // //   logoutText: {
// // //     color: '#fff',
// // //     fontSize: 15,
// // //     fontWeight: '600',
// // //     marginLeft: 6,
// // //   },
// // // });

// // // export default ProfileScreen;


// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   Dimensions,
// // } from 'react-native';
// // import LinearGradient from 'react-native-linear-gradient';
// // import LogoutIcon from '../assets/svgs/Logout';

// // const { width } = Dimensions.get('window');

// // const ProfileScreen = () => {
// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
// //       <Text style={styles.header}>Account Center</Text>

// //       {/* Account Info */}
// //       <Section title="Account & Profile" height={125}>
// //         <Field label="Name" value="Ayan Hazra" />
// //         <Field label="Email" value="jesus722481@gmail.com" />
// //         <Field label="Phone" value="+  Add Phone Number" color="#D6721E" />
// //       </Section>

// //       {/* Calendar Settings */}
// //       <Section title="Calender Settings" height={153}>
// //         <Field label="Calender Sync" value="Active" color="#38B000" />
// //         <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
// //         <Text style={styles.disconnect}>Disconnect Calender</Text>
// //       </Section>

// //       {/* Privacy */}
// //       <Section title="Privacy & Permissions" height={109}>
// //         <Field label="Active Permissions" value="Location, Calender, Notifications" color="#aaa" />
// //         <Field label="Change Password" />
// //       </Section>

// //       {/* Legal */}
// //       <Section title="Legal & Data Controls" height={109}>
// //         <Field label="Terms of Service" />
// //         <Field label="Privacy Policy" />
// //       </Section>

// //       {/* Logout */}
// //       <View style={styles.logoutContainer}>
// //         <TouchableOpacity activeOpacity={0.9}>
// //           <LinearGradient
// //             colors={['#B87333', '#B06E31', '#523317']}
// //             start={{ x: 0, y: 0.5 }}
// //             end={{ x: 1, y: 0.5 }}
// //             style={styles.logoutBtn}
// //           >
// //             <LogoutIcon width={16} height={16} />
// //             <Text style={styles.logoutText}>Logout</Text>
// //           </LinearGradient>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // // Reusable Components
// // const Section = ({ title, children, height }) => (
// //   <View style={styles.section}>
// //     <Text style={styles.sectionTitle}>{title}</Text>
// //     <View style={[styles.sectionBox, { height }]}>{children}</View>
// //   </View>
// // );

// // const Field = ({ label, value, color }) => (
// //   <View style={styles.fieldRow}>
// //     <View style={styles.rowHeader}>
// //       <Text style={styles.label}>{label}</Text>
// //       <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
// //     </View>
// //     <View style={styles.separator} />
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#111111',
// //     paddingHorizontal: 20,
// //   },
// //   scrollContent: {
// //     paddingBottom: 100,
// //     paddingTop: 30,
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#D6721E',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// //   section: {
// //     marginBottom: 25,
// //   },
// //   sectionTitle: {
// //     fontSize: 13,
// //     fontWeight: '600',
// //     color: '#ccc',
// //     marginBottom: 10,
// //   },
// //   sectionBox: {
// //     width: '100%',
// //     maxWidth: 335,
// //     alignSelf: 'center',
// //     backgroundColor: 'rgba(85, 85, 85, 0.12)',
// //     borderRadius: 17,
// //     padding: 16,
// //     justifyContent: 'space-between',
// //   },
// //   fieldRow: {
// //     marginBottom: 10,
// //   },
// //   rowHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   label: {
// //     fontSize: 14,
// //     fontWeight: '500',
// //     color: '#eee',
// //   },
// //   value: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //   },
// //   separator: {
// //     height: 1,
// //     backgroundColor: 'rgba(85, 85, 85, 0.35)',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 4,
// //     marginTop: 6,
// //   },
// //   disconnect: {
// //     marginTop: 10,
// //     color: '#D6721E',
// //     textAlign: 'center',
// //     fontSize: 13,
// //     fontWeight: '600',
// //   },
// //   logoutContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     marginTop: 10,
// //   },
// //   logoutBtn: {
// //     width: 151,
// //     height: 47,
// //     borderRadius: 42,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.4,
// //     shadowRadius: 65,
// //   },
// //   logoutText: {
// //     color: '#fff',
// //     fontSize: 15,
// //     fontWeight: '600',
// //     marginLeft: 6,
// //   },
// // });

// // export default ProfileScreen;
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import LogoutIcon from '../assets/svgs/Logout';

// const { width } = Dimensions.get('window');

// const ProfileScreen = () => {
//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
//       <Text style={styles.header}>Account Center</Text>

//       {/* Account Info */}
//       <Section title="Account & Profile" height={125}>
//         <Field label="Name" value="Ayan Hazra" />
//         <Separator />
//         <Field label="Email" value="jesus722481@gmail.com" />
//         <Separator />
//         <Field label="Phone" value="+  Add Phone Number" color="#D6721E" />
//       </Section>

//       {/* Calendar Settings */}
//       <Section title="Calender Settings" height={153}>
//         <Field label="Calender Sync" value="Active" color="#34A853" />
//         <Separator />
//         <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
//         <Separator />
//         <Text style={styles.disconnect}>Disconnect Calender</Text>
//       </Section>

//       {/* Privacy */}
//       <Section title="Privacy & Permissions" height={109}>
//         <Field label="Active Permissions" value="Location" color="#aaa" />
//         <Separator />
//         <Field label="Change Password" />
//       </Section>

//       {/* Legal */}
//       <Section title="Legal & Data Controls" height={109}>
//         <Field label="Terms of Service" />
//         <Separator />
//         <Field label="Privacy Policy" />
//       </Section>

//       {/* Logout */}
//       <View style={styles.logoutContainer}>
//         <TouchableOpacity activeOpacity={0.9}>
//           <LinearGradient
//             colors={['#B87333', '#B06E31', '#523317']}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//             style={styles.logoutBtn}
//           >
//             <LogoutIcon width={16} height={16} />
//             <Text style={styles.logoutText}>Logout</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// // Reusable components
// const Section = ({ title, children, height }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     <View style={[styles.sectionBox, { height }]}>{children}</View>
//   </View>
// );

// const Field = ({ label, value, color }) => (
//   <View style={styles.fieldRow}>
//     <View style={styles.rowHeader}>
//       <Text style={styles.label}>{label}</Text>
//       <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
//     </View>
//   </View>
// );

// const Separator = () => (
//   <View style={styles.separator} />
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111111',
//     paddingHorizontal: 20,
//     fontFamily: 'Roboto',
//   },
//   scrollContent: {
//     paddingBottom: 100,
//     paddingTop: 30,
//     fontFamily: 'Roboto',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#D6721E',
//     textAlign: 'center',
//     marginBottom: 20,
//     fontFamily: 'Roboto',
//   },
//   section: {
//     marginBottom: 25,
//     fontFamily: 'Roboto',
//   },
//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#ccc',
//     marginBottom: 10,
//     fontFamily: 'Roboto',
//   },
//   sectionBox: {
//     width: '100%',
//     maxWidth: 335,
//     alignSelf: 'center',
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     borderRadius: 17,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   fieldRow: {
//     marginBottom: 10,
//     fontFamily: 'Roboto',
//   },
//   rowHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     fontFamily: 'Roboto',
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#eee',
//     fontFamily: 'Roboto',
//   },
//   value: {
//     fontSize: 14,
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'rgba(85, 85, 85, 0.35)',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     marginVertical: 4,
//     fontFamily: 'Roboto',
//   },
//   disconnect: {
//     color: '#D6721E',
//     textAlign: 'center',
//     fontSize: 13,
//     fontWeight: '600',
//     marginTop: 8,
//     fontFamily: 'Roboto',
//   },
//   logoutContainer: {
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     marginTop: 50,
//     fontFamily: 'Roboto',
//   },
//   logoutBtn: {
//     width: 151,
//     height: 47,
//     borderRadius: 42,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 65,
//     fontFamily: 'Roboto',
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//     marginLeft: 6,
//     fontFamily: 'Roboto',
//   },
// });

// export default ProfileScreen;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   Modal,
//   Pressable,
  
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import LogoutIcon from '../assets/svgs/Logout';
// import { SafeAreaView } from 'react-native-safe-area-context';


// const { width } = Dimensions.get('window');

// const calendarOptions = ['Google Calendar', 'Outlook Calendar'];

// const ProfileScreen = () => {
//   const [calendarProvider, setCalendarProvider] = useState(null);
//   const [isCalendarSynced, setIsCalendarSynced] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleSelectProvider = (provider) => {
//     setCalendarProvider(provider);
//     setIsCalendarSynced(true);
//     setModalVisible(false);
//   };

//   const handleDisconnectCalendar = () => {
//     setIsCalendarSynced(false);
//     setCalendarProvider(null);
//   };

//   return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: '#111111' }}>

//     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
//       <Text style={styles.header}>Account Center</Text>

//       {/* Account Info */}
//       <Section title="Account & Profile" height={125}>
//         <Field label="Name" value="Ayan Hazra" />
//         <Separator />
//         <Field label="Email" value="jesus722481@gmail.com" />
//         <Separator />
//         <Field label="Phone" value="+  Add Phone Number" color="#D6721E" />
//       </Section>

//       {/* Calendar Settings */}
//       <Section title="Calender Settings" height={isCalendarSynced ? 200 : 180}>
//         <Field
//           label="Calender Sync"
//           value={isCalendarSynced ? 'Active' : 'Inactive'}
//           color={isCalendarSynced ? '#34A853' : '#999'}
//         />
//         <Separator />
//         <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
//         <Separator />

//         {isCalendarSynced ? (
//           <>
//             <Text style={styles.providerText}>{calendarProvider}</Text>
//             <TouchableOpacity onPress={handleDisconnectCalendar}>
//               <Text style={styles.disconnect}>Disconnect Calender</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <TouchableOpacity onPress={() => setModalVisible(true)}>
//             <Text style={styles.syncNow}>+ Sync a Calendar</Text>
//           </TouchableOpacity>
//         )}
//       </Section>

//       {/* Privacy */}
//       <Section title="Privacy & Permissions" height={109}>
//         <Field
//           label="Active Permissions"
//           value="Location"
//           color="#aaa"
//         />
//         <Separator />
//         <Field label="Change Password" />
//       </Section>

//       {/* Legal */}
//       <Section title="Legal & Data Controls" height={109}>
//         <Field label="Terms of Service" />
//         <Separator />
//         <Field label="Privacy Policy" />
//       </Section>

//       {/* Logout */}
//       <View style={styles.logoutContainer}>
//         <TouchableOpacity activeOpacity={0.9}>
//           <LinearGradient
//             colors={['#B87333', '#B06E31', '#523317']}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//             style={styles.logoutBtn}
//           >
//             <LogoutIcon width={16} height={16} />
//             <Text style={styles.logoutText}>Logout</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>

//       {/* Sync Modal */}
//       <Modal transparent animationType="fade" visible={modalVisible}>
//         <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Choose Calendar Provider</Text>
//             {calendarOptions.map((opt) => (
//               <TouchableOpacity
//                 key={opt}
//                 onPress={() => handleSelectProvider(opt)}
//                 style={styles.optionBtn}
//               >
//                 <Text style={styles.optionText}>{opt}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Pressable>
//       </Modal>
//     </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Reusable components
// const Section = ({ title, children, height }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     <View style={[styles.sectionBox, { height }]}>{children}</View>
//   </View>
// );

// const Field = ({ label, value, color }) => (
//   <View style={styles.fieldRow}>
//     <View style={styles.rowHeader}>
//       <Text style={styles.label}>{label}</Text>
//       <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
//     </View>
//   </View>
// );

// const Separator = () => <View style={styles.separator} />;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111111',
//     paddingHorizontal: 20,
//     fontFamily: 'Roboto',
//   },
// scrollContent: {
//   paddingBottom: 140, // ⬅️ increased from 100 to 140 or more
//   paddingTop: 30,
// },

//   header: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#D6721E',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#ccc',
//     marginBottom: 10,
//   },
//   sectionBox: {
//     width: '100%',
//     maxWidth: 335,
//     alignSelf: 'center',
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     borderRadius: 17,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   fieldRow: {
//     marginBottom: 10,
//   },
//   rowHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#eee',
//   },
//   value: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'rgba(85, 85, 85, 0.35)',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     marginVertical: 4,
//   },
//   disconnect: {
//     color: '#D6721E',
//     textAlign: 'center',
//     fontSize: 13,
//     fontWeight: '600',
//     marginTop: 6,
//   },
//   providerText: {
//     color: '#aaa',
//     textAlign: 'center',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   syncNow: {
//     color: '#D6721E',
//     textAlign: 'center',
//     fontSize: 13,
//     fontWeight: '600',
//     marginTop: 6,
//   },
//   logoutContainer: {
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   logoutBtn: {
//     width: 151,
//     height: 47,
//     borderRadius: 42,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 65,
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '600',
//     marginLeft: 6,
//   },
//   modalBackdrop: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalBox: {
//     width: '80%',
//     backgroundColor: '#222',
//     borderRadius: 12,
//     padding: 20,
//   },
//   modalTitle: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 12,
//     textAlign: 'center',
//   },
//   optionBtn: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#444',
//   },
//   optionText: {
//     color: '#D6721E',
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default ProfileScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Pressable,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoutIcon from '../assets/svgs/Logout';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const calendarOptions = ['Google Calendar', 'Outlook Calendar'];

const ProfileScreen = () => {
  const [calendarProvider, setCalendarProvider] = useState(null);
  const [isCalendarSynced, setIsCalendarSynced] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const background = isDark ? '#111' : '#fff';
  const card = isDark ? 'rgba(85,85,85,0.12)' : '#f2f2f2';
  const text = isDark ? '#eee' : '#111';
  const mutedText = isDark ? '#aaa' : '#444';
  const divider = isDark ? 'rgba(85,85,85,0.35)' : '#ccc';

  const handleSelectProvider = (provider) => {
    setCalendarProvider(provider);
    setIsCalendarSynced(true);
    setModalVisible(false);
  };

  const handleDisconnectCalendar = () => {
    setIsCalendarSynced(false);
    setCalendarProvider(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Account Center</Text>

        {/* Account Info */}
        <Section title="Profile & Account Info" height={125} cardColor={card}>
          <Field label="Name" value="Ayan Hazra" textColor={text} />
          <Separator divider={divider} />
          <Field label="Email" value="jesus722481@gmail.com" textColor={text} />
          <Separator divider={divider} />
          <Field label="Phone" value="+  Add Phone Number" color="#D6721E" />
        </Section>

        {/* Calendar Settings */}
        <Section title="Calender Settings" height={isCalendarSynced ? 200 : 180} cardColor={card}>
          <Field
            label="Calender Sync"
            value={isCalendarSynced ? 'Active' : 'Inactive'}
            color={isCalendarSynced ? '#34A853' : '#999'}
          />
          <Separator divider={divider} />
          <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
          <Separator divider={divider} />

          {isCalendarSynced ? (
            <>
              <Text style={[styles.providerText, { color: mutedText }]}>{calendarProvider}</Text>
              <TouchableOpacity onPress={handleDisconnectCalendar}>
                <Text style={styles.disconnect}>Disconnect Calender</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.syncNow}>+ Sync a Calendar</Text>
            </TouchableOpacity>
          )}
        </Section>

        {/* Privacy */}
        <Section title="Privacy & Permissions" height={109} cardColor={card}>
          <Field
            label="Active Permissions"
            value="Location"            color={mutedText}
          />
          <Separator divider={divider} />
          <Field label="Add or Change Password" textColor={text} />
        </Section>

        {/* Legal */}
        <Section title="Legal & Data Controls" height={109} cardColor={card}>
          <Field label="Terms of Service" textColor={text} />
          <Separator divider={divider} />
          <Field label="Privacy Policy" textColor={text} />
        </Section>

        {/* Logout */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity activeOpacity={0.9}>
            <LinearGradient
              colors={['#B87333', '#B06E31', '#523317']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.logoutBtn}
            >
              <LogoutIcon width={16} height={16} />
              <Text style={styles.logoutText}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Sync Modal */}
        <Modal transparent animationType="fade" visible={modalVisible}>
          <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
            <View style={[styles.modalBox, { backgroundColor: isDark ? '#222' : '#fff' }]}>
              <Text style={[styles.modalTitle, { color: text }]}>Choose Calendar Provider</Text>
              {calendarOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  onPress={() => handleSelectProvider(opt)}
                  style={styles.optionBtn}
                >
                  <Text style={styles.optionText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

// Reusable components
const Section = ({ title, children, height, cardColor }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={[styles.sectionBox, { height, backgroundColor: cardColor }]}>{children}</View>
  </View>
);

const Field = ({ label, value, color, textColor }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const defaultLabelColor = isDark ? '#eee' : '#333';
  const defaultValueColor = isDark ? '#aaa' : '#111';

  return (
    <View style={styles.fieldRow}>
      <View style={styles.rowHeader}>
        <Text style={[styles.label, { color: textColor || defaultLabelColor }]}>{label}</Text>
        <Text style={[styles.value, { color: color || textColor || defaultValueColor }]}>{value}</Text>
      </View>
    </View>
  );
};


const Separator = ({ divider }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: divider || (isDark ? 'rgba(85,85,85,0.35)' : '#bbb'),
        },
      ]}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 140,
    paddingTop: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D6721E',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  sectionBox: {
    width: '100%',
    maxWidth: 335,
    alignSelf: 'center',
    borderRadius: 17,
    padding: 16,
    justifyContent: 'center',
  },
  fieldRow: {
    marginBottom: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    marginVertical: 4,
  },
  disconnect: {
    color: '#D6721E',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  providerText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  syncNow: {
    color: '#D6721E',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  logoutContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutBtn: {
    width: 151,
    height: 47,
    borderRadius: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 65,
  },
  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  optionBtn: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  optionText: {
    color: '#D6721E',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileScreen;
