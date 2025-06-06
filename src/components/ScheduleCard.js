
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
// import ClockIcon from '../assets/svgs/clock';
// import Toggle from '../assets/svgs/Toggle';
// import LinearGradient from 'react-native-linear-gradient';

// const ScheduleCard = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const colorScheme = useColorScheme();
//   const isDark = colorScheme === 'dark';

//   const toggleSwitch = () => setIsEnabled(prev => !prev);

//   return (
//     <View style={[styles.container]}>
//       <Text style={[styles.title, { color: isDark ? 'white' : '#1C1C1C' }]}>SET A SCHEDULE</Text>
//       <Text style={[styles.description, { color: isDark ? '#FAFAFA' : '#1C1C1C' }]}>
//         Have the Silence Focus turn on automatically at a set time
//       </Text>

//       <View style={[styles.card, { backgroundColor: isDark ? '#1C1C1C' : '#5555551F' }]}>
//         <View style={styles.cardContent}>
//           <ClockIcon />
//           <View style={styles.timeBlock}>
//             <Text style={[styles.timeRange, { color: isDark ? 'white' : '#1C1C1C' }]}>
//               09:00 AM - 05:00 PM
//             </Text>

//             <View style={styles.labelBlock}>
//               <Text style={[styles.everyday, { color: isDark ? 'rgba(250,250,250,0.45)' : '#555' }]}>
//                 Everyday
//               </Text>

//               <View
//                 style={[
//                   styles.dividerLine,
//                   { backgroundColor: isDark ? 'rgba(85, 85, 85, 0.35)' : '#D9D9D9' },
//                 ]}
//               />

//               <Text style={[styles.addSchedule, { color: '#D6721E' }]}>
//                 Add Schedule  ＋
//               </Text>
//             </View>
//           </View>

//           <TouchableOpacity onPress={toggleSwitch} style={styles.toggleWrapper}>
//             <Toggle isOn={isEnabled} />
//           </TouchableOpacity>
//         </View>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 10,
//     marginTop: 20,
//   },
//   circleWrapper: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   outerCircle: {
//     width: 220,
//     height: 220,
//     borderRadius: 110,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   innerCircle: {
//     width: 160,
//     height: 160,
//     borderRadius: 80,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modeText: {
//     color: '#fff',
//     fontSize: 14,
//     textAlign: 'center',
//     marginTop: 8,
//     fontFamily: 'Roboto',
//   },
//   dividerLine: {
//     width: 255,
//     height: 1,
//     marginVertical: 4,
//   },
//   toggleWrapper: {
//     marginTop: 4,
//     alignSelf: 'flex-start',
//   },
//   title: {
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     marginBottom: 6,
//   },
//   description: {
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     fontWeight: '400',
//     marginBottom: 12,
//   },
//   card: {
//     borderRadius: 20,
//     padding: 18,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   timeRange: {
//     fontSize: 16,
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//   },
//   labelBlock: {
//     marginTop: 4,
//   },
//   everyday: {
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     marginBottom: 6,
//   },
//   addSchedule: {
//     fontSize: 13,
//     fontWeight: '500',
//     fontFamily: 'Roboto',
//     marginTop: 6,
//   },
//   timeBlock: {
//     flex: 1,
//     marginLeft: 14,
//   },
// });

// export default ScheduleCard;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ClockIcon from '../assets/svgs/clock';
import Toggle from '../assets/svgs/Toggle';

const ScheduleCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDark ? 'white' : '#1C1C1C' }]}>SET A SCHEDULE</Text>
      <Text style={[styles.description, { color: isDark ? '#FAFAFA' : '#1C1C1C' }]}>
        Have the Silence Focus turn on automatically at a set time
      </Text>

      <View style={[styles.card, { backgroundColor: isDark ? '#1C1C1C' : '#5555551F' }]}>
        <View style={styles.cardContent}>
          <ClockIcon />
          <View style={styles.timeBlock}>
            <Text style={[styles.timeRange, { color: isDark ? 'white' : '#1C1C1C' }]}>
              09:00 AM - 05:00 PM
            </Text>

            <View style={styles.labelBlock}>
              <Text style={[styles.everyday, { color: isDark ? 'rgba(250,250,250,0.45)' : '#555' }]}>
                Everyday
              </Text>

              <View
                style={[
                  styles.dividerLine,
                  { backgroundColor: isDark ? 'rgba(85, 85, 85, 0.35)' : '#D9D9D9' },
                ]}
              />

              <Text style={styles.addSchedule}>Add Schedule  ＋</Text>
            </View>
          </View>

          <TouchableOpacity onPress={toggleSwitch} style={styles.toggleWrapper}>
            <Toggle isOn={isEnabled} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
  },
  title: {
    fontSize: wp('3.4%'),
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: hp('0.6%'),
  },
  description: {
    fontSize: wp('3.3%'),
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginBottom: hp('1.5%'),
  },
  card: {
    borderRadius: wp('4.5%'),
    padding: wp('5%'),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeBlock: {
    flex: 1,
    marginLeft: wp('4%'),
  },
  timeRange: {
    fontSize: wp('4%'),
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  labelBlock: {
    marginTop: hp('0.7%'),
  },
  everyday: {
    fontSize: wp('3.2%'),
    fontFamily: 'Roboto',
    marginBottom: hp('0.8%'),
  },
  dividerLine: {
    width: wp('65%'),
    height: 1,
    marginVertical: hp('0.5%'),
  },
  addSchedule: {
    fontSize: wp('3.3%'),
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginTop: hp('0.8%'),
    color: '#D6721E',
  },
  toggleWrapper: {
    marginTop: hp('0.8%'),
    alignSelf: 'flex-start',
  },
});

export default ScheduleCard;
