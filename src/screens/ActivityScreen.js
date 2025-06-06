

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   useColorScheme,
// } from 'react-native';

// import CallIcon from '../assets/svgs/Call';
// import MessageIcon from '../assets/svgs/Message';
// import CrossIcon from '../assets/svgs/CrossButton';

// const { width } = Dimensions.get('window');

// const ActivityCenterScreen = () => {
//   const colorScheme = useColorScheme();
//   const isDark = colorScheme === 'dark';

//   const [logs, setLogs] = useState([
//     { id: 1, name: 'Steve Jobs', type: 'CALL', time: '5 min ago' },
//     { id: 2, name: 'Steve Jobs', type: 'SMS', time: '5 min ago' },
//     { id: 3, name: 'Steve Jobs', type: 'WHATSAPP', time: '5 min ago' },
//   ]);

//   const handleDelete = (id) => {
//     setLogs((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleClearAll = () => {
//     setLogs([]);
//   };

//   const renderIcon = (type) => {
//     if (type === 'CALL') return <CallIcon color="#fff" />;
//     if (type === 'SMS' || type === 'WHATSAPP') return <MessageIcon color="#fff" />;
//     return <View style={styles.defaultIcon} />;
//   };

//   return (
//     <ScrollView
//       style={[
//         styles.container,
//         { backgroundColor: isDark ? '#111' : '#ffffff' },
//       ]}
//       contentContainerStyle={styles.scrollContent}
//     >
//       <Text style={[styles.title, { color: '#D6721E' }]}>Activity Center</Text>

//       {logs.length > 0 && (
//         <View style={styles.clearAllWrapper}>
//           <TouchableOpacity onPress={handleClearAll}>
//             <Text
//               style={[
//                 styles.clearAll,
//                 {
//                   backgroundColor: isDark ? '#000' : '#222',
//                   color: '#fff',
//                 },
//               ]}
//             >
//               clear all
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {logs.map((log) => (
//         <View key={log.id} style={styles.cardWrapper}>
//           <View
//             style={[
//               styles.card,
//               {
//                 backgroundColor: isDark
//                   ? 'rgba(85, 85, 85, 0.12)'
//                   : '#eeeeee',
//               },
//             ]}
//           >
//             <View
//               style={[
//                 styles.avatar,
//                 { backgroundColor: isDark ? '#999' : '#555' },
//               ]}
//             />
//             <View style={styles.textBlock}>
//               <Text
//                 style={[
//                   styles.name,
//                   { color: isDark ? '#fff' : '#1a1a1a' },
//                 ]}
//               >
//                 {log.name}
//               </Text>
//               <Text
//                 style={[
//                   styles.subText,
//                   { color: isDark ? '#aaa' : '#555' },
//                 ]}
//               >
//                 {log.type}
//               </Text>
//             </View>

//             <Text
//               style={[
//                 styles.time,
//                 { color: isDark ? '#aaa' : '#555' },
//               ]}
//             >
//               {log.time}
//             </Text>

//             <View style={styles.iconWrapper}>{renderIcon(log.type)}</View>
//           </View>

//           <TouchableOpacity
//             onPress={() => handleDelete(log.id)}
//             style={[
//               styles.crossBtn,
//               { backgroundColor: isDark ? '#000' : '#222' },
//             ]}
//           >
//             <CrossIcon width={16} height={16} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default ActivityCenterScreen;

// const styles = StyleSheet.create({
//    container: {
//     flex: 1,
//     paddingTop: 10,
//     paddingHorizontal: 10,
//   },
//   scrollContent: {
//     paddingTop: 40,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '700',
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   clearAllWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginBottom: 20,
//   },
//   clearAll: {
//     fontSize: 12,
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//   },
//   cardWrapper: {
//     width: 335,
//     height: 75,
//     alignSelf: 'center',
//     position: 'relative',
//     marginBottom: 18,
//   },
//   card: {
//     flex: 1,
//     borderRadius: 17,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 14,
//   },
//   avatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     marginRight: 10,
//   },
//   textBlock: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   subText: {
//     fontSize: 12,
//     marginTop: 2,
//   },
//   time: {
//     fontSize: 11,
//     marginRight: 8,
//   },
//   iconWrapper: {
//     backgroundColor: '#D6721E',
//     borderRadius: 20,
//     padding: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   crossBtn: {
//     position: 'absolute',
//     top: -8,
//     right: -8,
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   defaultIcon: {
//     width: 16,
//     height: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CallIcon from '../assets/svgs/Call';
import MessageIcon from '../assets/svgs/Message';
import CrossIcon from '../assets/svgs/CrossButton';

const ActivityCenterScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [logs, setLogs] = useState([
    { id: 1, name: 'Steve Jobs', type: 'CALL', time: '5 min ago' },
    { id: 2, name: 'Steve Jobs', type: 'SMS', time: '5 min ago' },
    { id: 3, name: 'Steve Jobs', type: 'WHATSAPP', time: '5 min ago' },
  ]);

  const handleDelete = (id) => {
    setLogs((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setLogs([]);
  };

  const renderIcon = (type) => {
    if (type === 'CALL') return <CallIcon color="#fff" />;
    if (type === 'SMS' || type === 'WHATSAPP') return <MessageIcon color="#fff" />;
    return <View style={styles.defaultIcon} />;
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: isDark ? '#111' : '#ffffff' },
      ]}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={[styles.title, { color: '#D6721E' }]}>Activity Center</Text>

      {logs.length > 0 && (
        <View style={styles.clearAllWrapper}>
          <TouchableOpacity onPress={handleClearAll}>
            <Text
              style={[
                styles.clearAll,
                {
                  backgroundColor: isDark ? '#000' : '#222',
                  color: '#fff',
                },
              ]}
            >
              clear all
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {logs.map((log) => (
        <View key={log.id} style={styles.cardWrapper}>
          <View
            style={[
              styles.card,
              {
                backgroundColor: isDark
                  ? 'rgba(85, 85, 85, 0.12)'
                  : '#eeeeee',
              },
            ]}
          >
            <View
              style={[
                styles.avatar,
                { backgroundColor: isDark ? '#999' : '#555' },
              ]}
            />
            <View style={styles.textBlock}>
              <Text
                style={[
                  styles.name,
                  { color: isDark ? '#fff' : '#1a1a1a' },
                ]}
              >
                {log.name}
              </Text>
              <Text
                style={[
                  styles.subText,
                  { color: isDark ? '#aaa' : '#555' },
                ]}
              >
                {log.type}
              </Text>
            </View>

            <Text
              style={[
                styles.time,
                { color: isDark ? '#aaa' : '#555' },
              ]}
            >
              {log.time}
            </Text>

            <View style={styles.iconWrapper}>{renderIcon(log.type)}</View>
          </View>

          <TouchableOpacity
            onPress={() => handleDelete(log.id)}
            style={[
              styles.crossBtn,
              { backgroundColor: isDark ? '#000' : '#222' },
            ]}
          >
            <CrossIcon width={wp('4%')} height={wp('4%')} color="#fff" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default ActivityCenterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp('1%'),
    paddingHorizontal: wp('4%'),
  },
  scrollContent: {
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
  },
  title: {
    fontSize: wp('5.5%'),
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: hp('1.5%'),
  },
  clearAllWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp('2%'),
  },
  clearAll: {
    fontSize: wp('3%'),
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('3%'),
  },
  cardWrapper: {
    width: wp('90%'),
    height: hp('9%'),
    alignSelf: 'center',
    position: 'relative',
    marginBottom: hp('2%'),
  },
  card: {
    flex: 1,
    borderRadius: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  avatar: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    marginRight: wp('3%'),
  },
  textBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: wp('3.8%'),
    fontWeight: '600',
  },
  subText: {
    fontSize: wp('3.2%'),
    marginTop: hp('0.3%'),
  },
  time: {
    fontSize: wp('3%'),
    marginRight: wp('2%'),
  },
  iconWrapper: {
    backgroundColor: '#D6721E',
    borderRadius: wp('6%'),
    padding: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossBtn: {
    position: 'absolute',
    top: -hp('1%'),
    right: -hp('1%'),
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  defaultIcon: {
    width: wp('4%'),
    height: wp('4%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
  },
});

