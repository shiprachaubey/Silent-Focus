
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Switch, Dimensions, TouchableOpacity } from 'react-native';

// const { width } = Dimensions.get('window');

// const HomeScreen = () => {
//   const [silentMode, setSilentMode] = useState(false);
//   const [scheduleEnabled, setScheduleEnabled] = useState(false);
//   const [timer, setTimer] = useState(900); // 15 mins in seconds

//   useEffect(() => {
//     let interval;
//     if (silentMode && timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [silentMode, timer]);

// const formatTime = (sec) => {
//   const minutes = String(Math.floor(sec / 60)).padStart(2, '0');
//   const seconds = String(sec % 60).padStart(2, '0');
//   return `${minutes}:${seconds}`;
// };


//   const toggleSilentMode = () => {
//     setSilentMode((prev) => !prev);
//     setTimer(900); // reset timer to 15 mins if turned on
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>{silentMode ? 'Sssuhh! Shipra' : 'Hi! Shipra'}</Text>

//       {/* Circle Status */}
//       <TouchableOpacity
//         style={[
//           styles.silentCircle,
//           { backgroundColor: silentMode ? '#4CAF50' : '#2C2C2C' }, // green or dark
//         ]}
//         onPress={toggleSilentMode}
//       >
//         <Text style={{ fontSize: 50, color: 'white' }}>
//           {silentMode ? '🔇' : '🔈'}
//         </Text>
//         <Text style={styles.silentText}>
//           {silentMode ? (timer > 0 ? `${formatTime(timer)}\nSilent Mode ON` : 'Silent Mode ON') : 'Silent Mode OFF'}
//         </Text>
//       </TouchableOpacity>

//       {/* Silent Mode ON - Missed Section */}
//       {silentMode ? (
//         <View>
//           {timer > 0 && (
//             <View style={styles.missedSection}>
//               <Text style={styles.missedTitle}>You Missed</Text>
//               <Text style={styles.seeAll}>See all</Text>
//               <View style={styles.missedItem}>
//                 <Text style={styles.sender}>Steve Jobs</Text>
//                 <Text style={styles.type}>CALL</Text>
//                 <Text style={styles.time}>5 min ago</Text>
//               </View>
//               <View style={styles.missedItem}>
//                 <Text style={styles.sender}>Steve Jobs</Text>
//                 <Text style={styles.type}>SMS</Text>
//                 <Text style={styles.time}>5 min ago</Text>
//               </View>
//               <View style={styles.missedItem}>
//                 <Text style={styles.sender}>Steve Jobs</Text>
//                 <Text style={styles.type}>WHATSAPP</Text>
//                 <Text style={styles.time}>5 min ago</Text>
//               </View>
//             </View>
//           )}
//         </View>
//       ) : (
//         // Silent Mode OFF - Schedule Section
//         <View style={styles.scheduleSection}>
//           <Text style={styles.scheduleTitle}>SET Aaa SCHEDULE</Text>
//           <Text style={styles.scheduleDescription}>
//             Have the Silence Focus turn on automatically at a set time
//           </Text>

//           <View style={styles.scheduleCard}>
//             <View>
//               <Text style={styles.timeText}>09:00 AM - 05:00 PM</Text>
//               <Text style={styles.everydayText}>Everyday</Text>
//               <Text style={styles.addSchedule}>Add Schedule +</Text>
//             </View>

//             <Switch
//               value={scheduleEnabled}
//               onValueChange={(val) => setScheduleEnabled(val)}
//               trackColor={{ false: '#999', true: '#D6721E' }}
//               thumbColor={scheduleEnabled ? '#fff' : '#f4f3f4'}
//             />
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     backgroundColor: '#111111',
//   },
//   greeting: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: 'white',
//     fontFamily: 'Roboto',
//   },
//   silentCircle: {
//     width: width * 0.6,
//     height: width * 0.6,
//     borderRadius: width * 0.3,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 40,
//   },
//   silentText: {
//     color: 'white',
//     marginTop: 10,
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   missedSection: {
//     marginTop: 10,
//   },
//   missedTitle: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   seeAll: {
//     position: 'absolute',
//     right: 0,
//     top: 0,
//     color: '#D6721E',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   missedItem: {
//     marginTop: 15,
//     backgroundColor: '#222',
//     borderRadius: 12,
//     padding: 15,
//   },
//   sender: {
//     color: 'white',
//     fontWeight: '700',
//   },
//   type: {
//     color: '#aaa',
//     fontSize: 12,
//   },
//   time: {
//     color: '#aaa',
//     fontSize: 12,
//     textAlign: 'right',
//   },
//   scheduleSection: {
//     paddingTop: 20,
//   },
//   scheduleTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: 'white',
//     textTransform: 'uppercase',
//     fontFamily: 'Roboto',
//   },
//   scheduleDescription: {
//     fontSize: 13,
//     marginTop: 5,
//     color: 'white',
//     fontFamily: 'Roboto',
//   },
//   scheduleCard: {
//     marginTop: 20,
//     borderRadius: 20,
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//   },
//   timeText: {
//     fontSize: 16,
//     fontWeight: '700',
//     marginBottom: 2,
//     color: 'white',
//     fontFamily: 'Roboto',
//   },
//   everydayText: {
//     color: '#AAAAAA',
//     fontFamily: 'Roboto',
//   },
//   addSchedule: {
//     marginTop: 8,
//     fontSize: 13,
//     fontWeight: '600',
//     color: '#D6721E',
//   },
// });

// export default HomeScreen;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [silentMode, setSilentMode] = useState(false);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [timer, setTimer] = useState(900); // 15 mins
  const [showContent, setShowContent] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let interval;
    if (silentMode && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [silentMode, timer]);

  const toggleSilentMode = () => {
    setSilentMode((prev) => !prev);
    setTimer(900);
  };

  const formatTime = (sec) => {
    const minutes = String(Math.floor(sec / 60)).padStart(2, '0');
    const seconds = String(sec % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  if (!showContent) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDark ? '#000' : '#fff',
        }}
      >
        <ActivityIndicator size="large" color="#D6721E" />
        <Text style={{ color: isDark ? '#fff' : '#000', marginTop: 10 }}>
          Preparing your experience...
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#111111' : '#ffffff' },
      ]}
    >
      <Text
        style={[
          styles.greeting,
          { color: isDark ? 'white' : '#000000' },
        ]}
      >
        {silentMode ? 'Sssuhh! Shipra' : 'Hi! Shipra'}
      </Text>

      <TouchableOpacity
        style={[
          styles.silentCircle,
          {
            backgroundColor: silentMode
              ? '#4CAF50'
              : isDark
              ? '#2C2C2C'
              : '#f2f2f2',
            shadowColor: isDark ? '#000' : '#aaa',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
          },
        ]}
        onPress={toggleSilentMode}
      >
        <Text style={{ fontSize: 50, color: isDark ? 'white' : '#000' }}>
          {silentMode ? '🔇' : '🔈'}
        </Text>
        <Text style={[styles.silentText, { color: isDark ? 'white' : '#000' }]}>
          {silentMode ? (timer > 0 ? `${formatTime(timer)}\nSilent Mode ON` : 'Silent Mode ON') : 'Silent Mode OFF'}
        </Text>
      </TouchableOpacity>

      {silentMode ? (
        <View>
          {timer > 0 && (
            <View style={styles.missedSection}>
              <Text style={[styles.missedTitle, { color: isDark ? 'white' : '#000' }]}>
                You Missed
              </Text>
              <Text style={styles.seeAll}>See all</Text>
              {[1, 2, 3].map((_, idx) => (
                <View key={idx} style={[styles.missedItem, { backgroundColor: isDark ? '#222' : '#f6f6f6' }]}>
                  <Text style={[styles.sender, { color: isDark ? 'white' : '#000' }]}>Steve Jobs</Text>
                  <Text style={[styles.type, { color: '#aaa' }]}>CALL</Text>
                  <Text style={[styles.time, { color: '#aaa' }]}>5 min ago</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.scheduleSection}>
          <Text style={[styles.scheduleTitle, { color: isDark ? 'white' : '#000' }]}>
            Set a Schedule
          </Text>
          <Text style={[styles.scheduleDescription, { color: isDark ? 'white' : '#444' }]}>
            Have the Silence Focus turn on automatically at a set time
          </Text>

          <View
            style={[
              styles.scheduleCard,
              {
                backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
                shadowColor: isDark ? '#000' : '#ccc',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 4,
              },
            ]}
          >
            <View>
              <Text style={[styles.timeText, { color: isDark ? 'white' : '#000' }]}>
                09:00 AM - 05:00 PM
              </Text>
              <Text style={[styles.everydayText, { color: '#AAA' }]}>Everyday</Text>
              <Text style={styles.addSchedule}>Add Schedule +</Text>
            </View>
            <Switch
              value={scheduleEnabled}
              onValueChange={setScheduleEnabled}
              trackColor={{ false: '#999', true: '#D6721E' }}
              thumbColor={scheduleEnabled ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
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
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  silentText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  missedSection: {
    marginTop: 10,
  },
  missedTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#D6721E',
    fontSize: 13,
    fontWeight: '600',
  },
  missedItem: {
    marginTop: 15,
    borderRadius: 12,
    padding: 15,
  },
  sender: {
    fontWeight: '700',
  },
  type: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    textAlign: 'right',
  },
  scheduleSection: {
    paddingTop: 20,
  },
  scheduleTitle: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },
  scheduleDescription: {
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Roboto',
  },
  scheduleCard: {
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
    fontFamily: 'Roboto',
  },
  everydayText: {
    fontFamily: 'Roboto',
  },
  addSchedule: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#D6721E',
  },
});
