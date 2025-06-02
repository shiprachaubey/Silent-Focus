import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const SettingsScreen = () => {
  const { colors } = useTheme();
  const isDark = useColorScheme() === 'dark';

  const [locationMode, setLocationMode] = useState(false);
  const [calendarMode, setCalendarMode] = useState(true);
  const [customMode, setCustomMode] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: '#D6721E' }]}>Control Center</Text>

      <Text style={[styles.sectionTitle, { color: colors.text }]}>
        SELECT SILENCE FOCUS MODE
      </Text>

      {/* Location Mode */}
      <View style={styles.modeCard}>
        <View style={styles.row}>
          <View>
            <Text style={styles.modeTitle}>Location Mode</Text>
            <Text style={styles.modeDesc}>
              Your phone will be muted automatically when any silent zones detected like
              libraries, offices, or religious places.
            </Text>
          </View>
          <Switch
            value={locationMode}
            onValueChange={setLocationMode}
            trackColor={{ false: '#555', true: '#D6721E' }}
            thumbColor={locationMode ? '#fff' : '#ccc'}
          />
        </View>
      </View>

      {/* Calendar Mode */}
      <View style={styles.modeCard}>
        <View style={styles.row}>
          <View>
            <Text style={styles.modeTitle}>Calender Mode</Text>
            <Text style={styles.modeDesc}>
              Your phone will be muted automatically during scheduled meetings or events.
            </Text>
          </View>
          <Switch
            value={calendarMode}
            onValueChange={setCalendarMode}
            trackColor={{ false: '#555', true: '#D6721E' }}
            thumbColor={calendarMode ? '#fff' : '#ccc'}
          />
        </View>
      </View>

      {/* Custom Mode */}
      <View style={styles.modeCard}>
        <View style={styles.row}>
          <View>
            <Text style={styles.modeTitle}>Custom</Text>
            <Text style={styles.modeDesc}>
              You can add your custom location
            </Text>
          </View>
          <Switch
            value={customMode}
            onValueChange={setCustomMode}
            trackColor={{ false: '#555', true: '#D6721E' }}
            thumbColor={customMode ? '#fff' : '#ccc'}
          />
        </View>
      </View>

      {/* Auto Response Section */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>SET AUTO RESPONSE</Text>

      <View style={styles.modeCard}>
        <Text style={styles.modeSubTitle}>SELECT RESPONSE</Text>
        <TouchableOpacity>
          <Text style={styles.manualText}>Write Manually  ＋</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 6,
  },
  modeCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  modeDesc: {
    color: '#999',
    fontSize: 13,
    maxWidth: 260,
  },
  modeSubTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ccc',
    marginBottom: 8,
  },
  manualText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D6721E',
  },
});

export default SettingsScreen;
