// // components/ModernSilentButton.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Svg, { Circle, Path } from 'react-native-svg';

// const ModernSilentButton = ({ isActive }) => {
//   return (
//     <View style={styles.wrapper}>
//       {/* Outer Green Circle */}
//       <Svg width={250} height={250} viewBox="0 0 250 250" style={styles.outer}>
//         <Circle cx="125" cy="125" r="125" fill="#388E3C" fillOpacity={0.65} />
//       </Svg>

//       {/* Inner Green Circle */}
//       <Svg width={183} height={183} viewBox="0 0 183 183" style={styles.inner}>
//         <Circle cx="91.5" cy="91.5" r="91.5" fill="#4CAF50" />
//       </Svg>

//       {/* Mute Icon */}
//       <Svg width={75} height={75} viewBox="0 0 75 75">
//         <Path
// d="M33.125 15.625L40.625 9.375V25M9.375 9.375L65.625 65.625M40.625 56.25V65.625L21.875 50H15.625C12.1732 50 9.375 47.2019 9.375 43.75V31.25C9.375 30.1116 9.67934 29.0443 10.2111 28.125"
//           stroke="#FFFAF6"
//           strokeWidth={5}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </Svg>

//       {/* <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
//   <path d="M33.125 15.625L40.625 9.375V25M9.375 9.375L65.625 65.625M40.625 56.25V65.625L21.875 50H15.625C12.1732 50 9.375 47.2019 9.375 43.75V31.25C9.375 30.1116 9.67934 29.0443 10.2111 28.125" stroke="#FFFAF6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     width: 250,
//     height: 250,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   outer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   inner: {
//     position: 'absolute',
//     top: 33.5,
//     left: 33.5,
//   },
// });

// export default ModernSilentButton;
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

// const ModernSilentButton = ({ silentMode }) => {
//   const outerFill = silentMode ? '#388E3C' : '#555555';
//   const outerOpacity = silentMode ? 0.65 : 0.15;
//   const innerFill = silentMode ? '#4CAF50' : '#555555';
//   const innerOpacity = silentMode ? 1 : 0.15;
//   const iconStroke = silentMode ? '#FFFFFF' : 'url(#grad)';

//   return (
//     <View style={styles.wrapper}>
//       {/* Outer Circle */}
//       <Svg width={250} height={250} viewBox="0 0 250 250" style={styles.outer}>
//         <Circle cx="125" cy="125" r="125" fill={outerFill} fillOpacity={outerOpacity} />
//       </Svg>

//       {/* Inner Circle */}
//       <Svg width={183} height={183} viewBox="0 0 183 183" style={styles.inner}>
//         <Circle cx="91.5" cy="91.5" r="91.5" fill={innerFill} fillOpacity={innerOpacity} />
//       </Svg>

//       {/* Mute Icon */}
//       <Svg width={75} height={75} viewBox="0 0 75 75">
//         <Defs>
//           <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//             <Stop offset="0%" stopColor="#D6721E" />
//             <Stop offset="100%" stopColor="#A15200" />
//           </LinearGradient>
//         </Defs>
//        <Path
//   d="M33.125 15.625L40.625 9.375V25M9.375 9.375L65.625 65.625M40.625 56.25V65.625L21.875 50H15.625C12.1732 50 9.375 47.2019 9.375 43.75V31.25C9.375 30.1116 9.67934 29.0443 10.2111 28.125"
//   stroke={iconStroke}
//   fill="none"               // ✅ explicitly no fill
//   strokeWidth={5}
//   strokeLinecap="round"
//   strokeLinejoin="round"
// />

//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     width: 250,
//     height: 250,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   outer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   inner: {
//     position: 'absolute',
//     top: 33.5,
//     left: 33.5,
//   },
// });

// export default ModernSilentButton;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ModernSilentButton = ({ silentMode, timerFormatted }) => {
  const outerFill = silentMode ? '#388E3C' : '#555555';
  const outerOpacity = silentMode ? 0.65 : 0.15;
  const innerFill = silentMode ? '#4CAF50' : '#555555';
  const innerOpacity = silentMode ? 1 : 0.15;
  const iconStroke = silentMode ? '#FFFFFF' : 'url(#grad)';

  return (
    <View style={styles.wrapper}>
      {/* Outer Circle */}
      <Svg width={250} height={250} viewBox="0 0 250 250" style={styles.outer}>
        <Circle cx="125" cy="125" r="125" fill={outerFill} fillOpacity={outerOpacity} />
      </Svg>

      {/* Inner Circle */}
      <Svg width={183} height={183} viewBox="0 0 183 183" style={styles.inner}>
        <Circle cx="91.5" cy="91.5" r="91.5" fill={innerFill} fillOpacity={innerOpacity} />
      </Svg>

      {/* Inside Content: Timer or Icon */}
      {silentMode ? (
        <Text style={styles.timerText}>{timerFormatted}</Text>
      ) : (
        <Svg width={75} height={75} viewBox="0 0 75 75">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor="#D6721E" />
              <Stop offset="100%" stopColor="#A15200" />
            </LinearGradient>
          </Defs>
          <Path
            d="M33.125 15.625L40.625 9.375V25M9.375 9.375L65.625 65.625M40.625 56.25V65.625L21.875 50H15.625C12.1732 50 9.375 47.2019 9.375 43.75V31.25C9.375 30.1116 9.67934 29.0443 10.2111 28.125"
            stroke={iconStroke}
            fill="none"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}

      {/* Below Label */}
     <Text style={styles.modeLabel}>
  Silent Mode{'\n'}{silentMode ? 'ON' : 'OFF'}
</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  outer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  inner: {
    position: 'absolute',
    top: 33.5,
    left: 33.5,
  },
  timerText: {
    width: 142,
    height: 42,
    textAlign: 'center',
    color: '#FAFAFA',
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: '400',
  },
modeLabel: {
  position: 'absolute',
  bottom: 44, // adjust as needed
  width: 114,
  textAlign: 'center',
  color: 'rgba(250, 250, 250, 0.75)',
  fontFamily: 'Roboto',
  fontSize: 13,
  fontWeight: '300',
  lineHeight: 16, // make sure it's enough to fit both lines
  paddingBottom: 2, // small buffer to prevent cutting
},

});

export default ModernSilentButton;
