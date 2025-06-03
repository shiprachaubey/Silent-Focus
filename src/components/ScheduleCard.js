// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ClockIcon from '../assets/svgs/clock'; // your clock.js
// import ToggleIcon from '../assets/svgs/Toggle'; // your toggle.js
// import Svg, { Line, Defs, Filter, FeDropShadow } from 'react-native-svg';

// const ScheduleCard = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.title}>SET A SCHEDULE</Text>
//       <Text style={styles.description}>
//         Set to turn on automatically at a set time
//       </Text>

//       {/* Card */}
//       <View style={styles.card}>
//         <View style={styles.cardContent}>
//           <ClockIcon />
//           <View style={styles.timeBlock}>
//             <Text style={styles.timeRange}>09:00 AM - 05:00 PM</Text>
//             <Text style={styles.everyday}>Everyday</Text>
//           </View>
//           <ToggleIcon />
//         </View>

//         {/* Divider line */}
//         <Svg height="1" width="100%">
//           <Defs>
//             <Filter id="shadow" x="0" y="0" width="200%" height="200%">
//               <FeDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.25)" />
//             </Filter>
//           </Defs>
//           <Line
//             x1="0"
//             y1="0"
//             x2="100%"
//             y2="0"
//             stroke="rgba(85, 85, 85, 0.35)"
//             strokeWidth="0.8"
//             filter="url(#shadow)"
//           />
//         </Svg>

//         {/* Add Schedule */}
//         <Text style={styles.addSchedule}>Add Schedule  ＋</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 10,
//     marginTop: 20,
//   },
//   title: {
//     color: 'white',
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     marginBottom: 6,
//   },
//   description: {
//     color: '#FAFAFA',
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     fontWeight: '400',
//     marginBottom: 12,
//   },
//   card: {
//     backgroundColor: '#1C1C1C',
//     borderRadius: 20,
//     padding: 18,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   timeBlock: {
//     flex: 1,
//     marginLeft: 14,
//   },
//   timeRange: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: '600',
//     fontFamily: 'Roboto',
//   },
//   everyday: {
//     color: 'rgba(250, 250, 250, 0.45)',
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     marginTop: 2,
//   },
//   addSchedule: {
//     color: '#D6721E',
//     fontSize: 13,
//     fontWeight: '500',
//     marginTop: 10,
//     fontFamily: 'Roboto',
//   },
// });

// export default ScheduleCard;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClockIcon from '../assets/svgs/clock';
import Toggle from '../assets/svgs/Toggle';
import Svg, { Line, Defs, Filter, FeDropShadow } from 'react-native-svg';

const ScheduleCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>SET A SCHEDULE</Text>
    //   <Text style={styles.description}>
    //     Set to turn on automatically at a set time
    //   </Text>

    //   <View style={styles.card}>
    //     <View style={styles.cardContent}>
    //       <ClockIcon />
    //       <View style={styles.timeBlock}>
    //         <Text style={styles.timeRange}>09:00 AM - 05:00 PM</Text>
    //         <Text style={styles.everyday}>Everyday</Text>
    //       </View>

    //       <TouchableOpacity onPress={toggleSwitch}>
    //         <Toggle isOn={isEnabled} />
    //       </TouchableOpacity>
    //     </View>

    //     <Svg height="1" width="100%">
    //       <Defs>
    //         <Filter id="shadow" x="0" y="0" width="200%" height="200%">
    //           <FeDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.25)" />
    //         </Filter>
    //       </Defs>
    //       <Line
    //         x1="0"
    //         y1="0"
    //         x2="100%"
    //         y2="0"
    //         stroke="rgba(85, 85, 85, 0.35)"
    //         strokeWidth="0.8"
    //         filter="url(#shadow)"
    //       />
    //     </Svg>

    //     <Text style={styles.addSchedule}>Add Schedule  ＋</Text>
    //   </View>
      
    // </View>
    <View style={styles.container}>
  <Text style={styles.title}>SET A SCHEDULE</Text>
  <Text style={styles.description}>
    Set to turn on automatically at a set time
  </Text>

  <View style={styles.card}>
    <View style={styles.cardContent}>
      <ClockIcon />
      <View style={styles.timeBlock}>
        <Text style={styles.timeRange}>09:00 AM - 05:00 PM</Text>

        {/* aligned Everyday + line + Add Schedule */}
        <View style={styles.labelBlock}>
          <Text style={styles.everyday}>Everyday</Text>

          <Svg width="255.002" height="1">
            <Defs>
              <Filter id="line-shadow" x="0" y="0" width="200%" height="200%">
                <FeDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="4"
                  floodColor="rgba(0,0,0,0.25)"
                />
              </Filter>
            </Defs>
            <Line
              x1="0"
              y1="0"
              x2="255.002"
              y2="0"
              stroke="rgba(85, 85, 85, 0.35)"
              strokeWidth="0.8"
              filter="url(#line-shadow)"
            />
          </Svg>

          <Text style={styles.addSchedule}>Add Schedule  ＋</Text>
        </View>
      </View>

      <TouchableOpacity onPress={toggleSwitch}>
        <Toggle isOn={isEnabled} />
      </TouchableOpacity>
    </View>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  description: {
    color: '#FAFAFA',
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 20,
    padding: 18,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
//   timeBlock: {
//     flex: 1,
//     marginLeft: 14,
//   },
  timeRange: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
//   everyday: {
//     color: 'rgba(250, 250, 250, 0.45)',
//     fontSize: 13,
//     fontFamily: 'Roboto',
//     marginTop: 2,
//   },
//   addSchedule: {
//     color: '#D6721E',
//     fontSize: 13,
//     fontWeight: '500',
//     marginTop: 10,
//     fontFamily: 'Roboto',
//   },

  labelBlock: {
  marginTop: 4,
},

everyday: {
  color: 'rgba(250, 250, 250, 0.45)',
  fontSize: 13,
  fontFamily: 'Roboto',
  marginBottom: 6,
},

addSchedule: {
  color: '#D6721E',
  fontSize: 13,
  fontWeight: '500',
  fontFamily: 'Roboto',
  marginTop: 6,
},

timeBlock: {
  flex: 1,
  marginLeft: 14,
},

});

export default ScheduleCard;
