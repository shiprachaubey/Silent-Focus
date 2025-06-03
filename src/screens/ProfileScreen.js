// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   useColorScheme,
//   ScrollView,
// } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// const ProfileScreen = () => {
//   const scheme = useColorScheme();
//   const isDark = scheme === 'dark';
//   const { colors } = useTheme();

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
//       <Text style={[styles.header, { color: '#D6721E' }]}>Account Center</Text>

//       {/* Profile Info */}
//       <Section title="Profile & Account Info">
//         <Field label="Name" value="Ayan Hazra" />
//         <Field label="Email" value="jesus722481@gmail.com" />
//         <Field
//           label="Phone"
//           value="+  Add Phone Number"
//           isAction
//           color={isDark ? '#FFA43A' : '#D6721E'}
//         />
//       </Section>

//       {/* Calendar Settings */}
//       <Section title="Calender Settings">
//         <Field label="Calender Sync" value="Active" color="green" />
//         <Field label="Event Filters" value="Modify Filters" color="#FFA43A" />
//         <TouchableOpacity>
//           <Text style={[styles.link, { color: '#D6721E' }]}>Disconnect Calender</Text>
//         </TouchableOpacity>
//       </Section>

//       {/* Privacy & Permissions */}
//       <Section title="Privacy & Permissions">
//         <Field
//           label="Active Permissions"
//           value="Location, Calender, Notification"
//           color="#888"
//         />
//         <Field label="Add or Change Password" />
//       </Section>

//       {/* Legal */}
//       <Section title="Legal & Data Controls">
//         <Field label="Terms of Service" />
//         <Field label="Privacy Policy" />
//       </Section>

//       {/* Logout Button */}
//       <TouchableOpacity style={styles.logoutBtn}>
//         <Text style={styles.logoutText}>⎋ Logout</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const Section = ({ title, children }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     <View style={styles.sectionBox}>{children}</View>
//   </View>
// );

// const Field = ({ label, value, isAction, color }) => (
//   <View style={styles.fieldRow}>
//     <Text style={[styles.label]}>{label}</Text>
//     <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   section: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 13,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: '#aaa',
//   },
//   sectionBox: {
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     padding: 16,
//     borderRadius: 16,
//   },
//   fieldRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 6,
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
//   link: {
//     marginTop: 10,
//     textAlign: 'center',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   logoutBtn: {
//     backgroundColor: '#D6721E',
//     paddingVertical: 14,
//     borderRadius: 30,
//     alignItems: 'center',
//     marginTop: 30,
//     marginBottom: 40,
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default ProfileScreen;



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
//     <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
//       <Text style={styles.header}>Account Center</Text>

//       {/* Account Info */}
//       <Section title="Account & Profile" height={125}>
//         <Field label="Name" value="Ayan Hazra" />
//         <Field label="Email" value="jesus722481@gmail.com" />
//         <Field
//           label="Phone"
//           value="+  Add Phone Number"
//           color="#D6721E"
//         />
//       </Section>

//       {/* Calendar Settings */}
//       <Section title="Calender Settings" height={153}>
//         <Field label="Calender Sync" value="Active" color="#38B000" />
//         <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
//         <TouchableOpacity>
//           <Text style={[styles.link, { color: '#D6721E' }]}>Disconnect Calender</Text>
//         </TouchableOpacity>
//       </Section>

//       {/* Privacy */}
//       <Section title="Privacy & Permissions" height={109}>
//         <Field label="Active Permissions" value="Location, Calender, Notifications" color="#aaa" />
//         <Field label="Change Password" />
//       </Section>

//       {/* Legal */}
//       <Section title="Legal & Data Controls" height={109}>
//         <Field label="Terms of Service" />
//         <Field label="Privacy Policy" />
//       </Section>

//       {/* Logout */}
//       <TouchableOpacity style={styles.logoutWrapper}>
//         <LinearGradient
//           colors={['#B87333', '#B06E31', '#523317']}
//           start={{ x: 0, y: 0.5 }}
//           end={{ x: 1, y: 0.5 }}
//           style={styles.logoutBtn}
//         >
//           <LogoutIcon width={16} height={16} />
//           <Text style={styles.logoutText}>Logout</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// // Reusable Components
// const Section = ({ title, children, height }) => (
//   <View style={styles.section}>
//     <Text style={styles.sectionTitle}>{title}</Text>
//     <View style={[styles.sectionBox, { height }]}>{children}</View>
//   </View>
// );

// const Field = ({ label, value, color }) => (
//   <View style={styles.fieldRow}>
//     <Text style={styles.label}>{label}</Text>
//     <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111111',
//     padding: 20,
//   },
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
//     width: 335,
//     alignSelf: 'center',
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     borderRadius: 17,
//     padding: 16,
//     justifyContent: 'space-between',
//   },
//   fieldRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 6,
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
//   link: {
//     marginTop: 10,
//     textAlign: 'left',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   logoutWrapper: {
//     alignItems: 'center',
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
// });

// export default ProfileScreen;


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoutIcon from '../assets/svgs/Logout';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>Account Center</Text>

      {/* Account Info */}
      <Section title="Account & Profile" height={125}>
        <Field label="Name" value="Ayan Hazra" />
        <Field label="Email" value="jesus722481@gmail.com" />
        <Field label="Phone" value="+  Add Phone Number" color="#D6721E" />
      </Section>

      {/* Calendar Settings */}
      <Section title="Calender Settings" height={153}>
        <Field label="Calender Sync" value="Active" color="#38B000" />
        <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
        <Text style={styles.disconnect}>Disconnect Calender</Text>
      </Section>

      {/* Privacy */}
      <Section title="Privacy & Permissions" height={109}>
        <Field label="Active Permissions" value="Location, Calender, Notifications" color="#aaa" />
        <Field label="Change Password" />
      </Section>

      {/* Legal */}
      <Section title="Legal & Data Controls" height={109}>
        <Field label="Terms of Service" />
        <Field label="Privacy Policy" />
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
    </ScrollView>
  );
};

// Reusable Components
const Section = ({ title, children, height }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={[styles.sectionBox, { height }]}>{children}</View>
  </View>
);

const Field = ({ label, value, color }) => (
  <View style={styles.fieldRow}>
    <View style={styles.rowHeader}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
    </View>
    <View style={styles.separator} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
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
    color: '#ccc',
    marginBottom: 10,
  },
  sectionBox: {
    width: '100%',
    maxWidth: 335,
    alignSelf: 'center',
    backgroundColor: 'rgba(85, 85, 85, 0.12)',
    borderRadius: 17,
    padding: 16,
    justifyContent: 'space-between',
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
    color: '#eee',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(85, 85, 85, 0.35)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 6,
  },
  disconnect: {
    marginTop: 10,
    color: '#D6721E',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
  },
  logoutContainer: {
    alignItems: 'center',
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
});

export default ProfileScreen;
