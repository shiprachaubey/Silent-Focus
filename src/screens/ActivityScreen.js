// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   useColorScheme,
// } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// // Dummy icons — replace with your actual SVGs
// const TypeIcon = ({ type }) => {
//   return (
//     <View style={styles.iconWrapper}>
//       <Text style={{ color: '#fff', fontWeight: 'bold' }}>
//         {type === 'CALL' ? '📞' : type === 'SMS' ? '💬' : '🟢'}
//       </Text>
//     </View>
//   );
// };

// const ChatScreen = () => {
//   const { colors } = useTheme();
//   const isDark = useColorScheme() === 'dark';

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

//   return (
//     <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Activity Center</Text>
//         {logs.length > 0 && (
//           <TouchableOpacity onPress={handleClearAll}>
//             <Text style={styles.clearAll}>clear all</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       {logs.map((log) => (
//         <View key={log.id} style={styles.card}>
//           <View style={styles.avatar}></View>
//           <View style={styles.textBlock}>
//             <Text style={styles.name}>{log.name}</Text>
//             <Text style={styles.subText}>{log.type}</Text>
//           </View>
//           <Text style={styles.time}>{log.time}</Text>
//           <TypeIcon type={log.type} />
//           <TouchableOpacity onPress={() => handleDelete(log.id)}>
//             <View style={styles.closeBtn}>
//               <Text style={{ color: '#fff', fontSize: 12 }}>✕</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   title: {
//     color: '#D6721E',
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 20,
//   },
//   clearAll: {
//     fontSize: 12,
//     color: '#fff',
//     backgroundColor: '#222',
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//   },
//   card: {
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 14,
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   avatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#999',
//     marginRight: 12,
//   },
//   textBlock: {
//     flex: 1,
//   },
//   name: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   subText: {
//     color: '#888',
//     fontSize: 13,
//   },
//   time: {
//     fontSize: 11,
//     color: '#aaa',
//     marginRight: 8,
//   },
//   iconWrapper: {
//     backgroundColor: '#D6721E',
//     padding: 6,
//     borderRadius: 10,
//     marginRight: 8,
//   },
//   closeBtn: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#000',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ChatScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
// } from 'react-native';

// import CallIcon from '../assets/svgs/Call';
// import MessageIcon from '../assets/svgs/Message';
// import CrossIcon from '../assets/svgs/CrossButton';

// const { width } = Dimensions.get('window');

// const ActivityCenterScreen = () => {
//   const [logs, setLogs] = useState([
//     { id: 1, name: 'Steve Jobs', type: 'CALL', time: '5 min ago' },
//     { id: 2, name: 'Steve Jobs', type: 'SMS', time: '5 min ago' },
//     { id: 3, name: 'Steve Jobs', type: 'CALL', time: '5 min ago' },
//   ]);

//   const handleDelete = (id) => {
//     setLogs((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleClearAll = () => {
//     setLogs([]);
//   };

//   const renderIcon = (type) => {
//     if (type === 'CALL') return <CallIcon />;
//     if (type === 'SMS') return <MessageIcon />;
//     return <View style={styles.defaultIcon} />;
//   };

//   return (
//  <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
//       <Text style={styles.title}>Activity Center</Text>

//       {logs.length > 0 && (
//         <View style={styles.clearAllWrapper}>
//           <TouchableOpacity onPress={handleClearAll}>
//             <Text style={styles.clearAll}>clear all</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {logs.map((log) => (
//         <View key={log.id} style={styles.cardWrapper}>
//           <View style={styles.card}>
//             <View style={styles.avatar} />
//             <View style={styles.textBlock}>
//               <Text style={styles.name}>{log.name}</Text>
//               <Text style={styles.subText}>{log.type}</Text>
//             </View>
//             <Text style={styles.time}>{log.time}</Text>
//             <View style={styles.iconWrapper}>{renderIcon(log.type)}</View>
//           </View>

//           <TouchableOpacity
//             onPress={() => handleDelete(log.id)}
//             style={styles.crossBtn}
//           >
//             <CrossIcon width={16} height={16} />
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111111',
//     paddingHorizontal: 20,
//   },
//   scrollContent: {
//     paddingTop: 40,
//     paddingBottom: 40,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#D6721E',
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
//     color: '#fff',
//     backgroundColor: '#000',
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
//     backgroundColor: 'rgba(85, 85, 85, 0.12)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 14,
//   },
//   avatar: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#999',
//     marginRight: 10,
//   },
//   textBlock: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   name: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   subText: {
//     color: '#888',
//     fontSize: 12,
//     marginTop: 2,
//   },
//   time: {
//     fontSize: 11,
//     color: '#aaa',
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
//     backgroundColor: '#000',
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

// export default ActivityCenterScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native';

import CallIcon from '../assets/svgs/Call';
import MessageIcon from '../assets/svgs/Message';
import CrossIcon from '../assets/svgs/CrossButton';

const { width } = Dimensions.get('window');

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
        { backgroundColor: isDark ? '#111' : '#f9f9f9' },
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
            <CrossIcon width={16} height={16} color="#fff" />
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
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },
  clearAllWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  clearAll: {
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  cardWrapper: {
    width: 335,
    height: 75,
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 18,
  },
  card: {
    flex: 1,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  textBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  subText: {
    fontSize: 12,
    marginTop: 2,
  },
  time: {
    fontSize: 11,
    marginRight: 8,
  },
  iconWrapper: {
    backgroundColor: '#D6721E',
    borderRadius: 20,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossBtn: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  defaultIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
