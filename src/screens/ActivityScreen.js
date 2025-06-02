import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

// Dummy icons — replace with your actual SVGs
const TypeIcon = ({ type }) => {
  return (
    <View style={styles.iconWrapper}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
        {type === 'CALL' ? '📞' : type === 'SMS' ? '💬' : '🟢'}
      </Text>
    </View>
  );
};

const ChatScreen = () => {
  const { colors } = useTheme();
  const isDark = useColorScheme() === 'dark';

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

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity Center</Text>
        {logs.length > 0 && (
          <TouchableOpacity onPress={handleClearAll}>
            <Text style={styles.clearAll}>clear all</Text>
          </TouchableOpacity>
        )}
      </View>

      {logs.map((log) => (
        <View key={log.id} style={styles.card}>
          <View style={styles.avatar}></View>
          <View style={styles.textBlock}>
            <Text style={styles.name}>{log.name}</Text>
            <Text style={styles.subText}>{log.type}</Text>
          </View>
          <Text style={styles.time}>{log.time}</Text>
          <TypeIcon type={log.type} />
          <TouchableOpacity onPress={() => handleDelete(log.id)}>
            <View style={styles.closeBtn}>
              <Text style={{ color: '#fff', fontSize: 12 }}>✕</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#D6721E',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  clearAll: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#222',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#999',
    marginRight: 12,
  },
  textBlock: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  subText: {
    color: '#888',
    fontSize: 13,
  },
  time: {
    fontSize: 11,
    color: '#aaa',
    marginRight: 8,
  },
  iconWrapper: {
    backgroundColor: '#D6721E',
    padding: 6,
    borderRadius: 10,
    marginRight: 8,
  },
  closeBtn: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
