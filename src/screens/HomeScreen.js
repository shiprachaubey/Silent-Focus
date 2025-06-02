// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Switch, useColorScheme, Dimensions } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const HomeScreen = () => {
//   const colorScheme = useColorScheme();
//   const { colors } = useTheme();

//   const isDark = colorScheme === 'dark';

//   const [silentMode, setSilentMode] = useState(false);
//   const [scheduleEnabled, setScheduleEnabled] = useState(false);

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       <Text style={[styles.greeting, { color: colors.text }]}>Hi! Shipra</Text>

//       {/* Silent Mode Button */}
//       <View
//         style={[
//           styles.silentCircle,
//           {
//             backgroundColor: silentMode
//               ? '#D6721E'
//               : isDark
//               ? '#2C2C2C'
//               : '#FFA43A',
//             shadowColor: '#000',
//           },
//         ]}
//       >
//         {/* Replace below Text with your custom SVG icon */}
//         <Text style={{ fontSize: 40, color: 'white' }}>{silentMode ? '🔇' : '🔈'}</Text>
//         <Text style={styles.silentText}>
//           Silent Mode{'\n'}
//           {silentMode ? 'ON' : 'OFF'}
//         </Text>
//       </View>

//       {/* Schedule Section */}
//       <View style={styles.scheduleSection}>
//         <Text style={[styles.scheduleTitle, { color: colors.text }]}>SET A SCHEDULE</Text>
//         <Text style={[styles.scheduleDescription, { color: colors.text }]}>
//           Have the Silence Focus turn on automatically at a set time
//         </Text>

//         <View
//           style={[
//             styles.scheduleCard,
//             {
//               backgroundColor: isDark
//                 ? 'rgba(255, 255, 255, 0.05)'
//                 : 'rgba(85, 85, 85, 0.12)',
//             },
//           ]}
//         >
//           <View>
//             <Text style={[styles.timeText, { color: colors.text }]}>
//               09:00 AM - 05:00 PM
//             </Text>
//             <Text style={{ color: isDark ? '#AAAAAA' : '#555555' }}>Everyday</Text>
//             <Text style={[styles.addSchedule, { color: '#D6721E' }]}>Add Schedule +</Text>
//           </View>

//           <Switch
//             value={scheduleEnabled}
//             onValueChange={(val) => setScheduleEnabled(val)}
//             trackColor={{ false: '#999', true: '#D6721E' }}
//             thumbColor={scheduleEnabled ? '#fff' : '#f4f3f4'}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   greeting: {
//     fontSize: 28,
//     fontWeight: '600',
//   },
//   silentCircle: {
//     width: width * 0.6,
//     height: width * 0.6,
//     borderRadius: width * 0.3,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 40,
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 10,
//   },
//   silentText: {
//     color: 'white',
//     marginTop: 10,
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   scheduleSection: {
//     paddingTop: 20,
//   },
//   scheduleTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     textTransform: 'uppercase',
//   },
//   scheduleDescription: {
//     fontSize: 13,
//     marginTop: 5,
//   },
//   scheduleCard: {
//     marginTop: 20,
//     borderRadius: 20,
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   timeText: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 2,
//   },
//   addSchedule: {
//     marginTop: 8,
//     fontSize: 13,
//     fontWeight: '600',
//   },
// });

// export default HomeScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [silentMode, setSilentMode] = useState(false);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi! Shipra</Text>

      {/* Silent Mode Button */}
      <View
        style={[
          styles.silentCircle,
          { backgroundColor: silentMode ? '#D6721E' : '#2C2C2C' },
        ]}
      >
        {/* Replace below Text with your custom SVG icon */}
        <Text style={{ fontSize: 40, color: 'white' }}>
          {silentMode ? '🔇' : '🔈'}
        </Text>
        <Text style={styles.silentText}>
          Silent Mode{'\n'}
          {silentMode ? 'ON' : 'OFF'}
        </Text>
      </View>

      {/* Schedule Section */}
      <View style={styles.scheduleSection}>
        <Text style={styles.scheduleTitle}>SET A SCHEDULE</Text>
        <Text style={styles.scheduleDescription}>
          Have the Silence Focus turn on automatically at a set time
        </Text>

        <View style={styles.scheduleCard}>
          <View>
            <Text style={styles.timeText}>09:00 AM - 05:00 PM</Text>
            <Text style={styles.everydayText}>Everyday</Text>
            <Text style={styles.addSchedule}>Add Schedule +</Text>
          </View>

          <Switch
            value={scheduleEnabled}
            onValueChange={(val) => setScheduleEnabled(val)}
            trackColor={{ false: '#999', true: '#D6721E' }}
            thumbColor={scheduleEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#111111',
    
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Roboto',
  },
  silentCircle: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  silentText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  scheduleSection: {
    paddingTop: 20,
  },
  scheduleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textTransform: 'uppercase',
      fontFamily: 'Roboto',
  },
  scheduleDescription: {
    fontSize: 13,
    marginTop: 5,
    color: 'white',
      fontFamily: 'Roboto',
  },
  scheduleCard: {
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
    color: 'white',
      fontFamily: 'Roboto',
  },
  everydayText: {
    color: '#AAAAAA',
      fontFamily: 'Roboto',
  },
  addSchedule: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#D6721E',
  },
});

export default HomeScreen;
