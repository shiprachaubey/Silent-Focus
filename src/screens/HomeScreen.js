
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Platform,
} from 'react-native';

import ModernSilentButton from '../components/ModernSilentButton';
import ScheduleCard from '../components/ScheduleCard';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [silentMode, setSilentMode] = useState(false);
  const [timer, setTimer] = useState(900); // 15 minutes
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    let interval;
    if (silentMode && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
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
    return `00:${minutes}:${seconds}`;
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111111' : '#ffffff' }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.greeting, { color: isDark ? 'white' : '#000000' }]}>
          Hi Shipra!
        </Text>

        <TouchableOpacity onPress={toggleSilentMode} style={styles.silentButtonWrapper}>
          <ModernSilentButton silentMode={silentMode} timerFormatted={formatTime(timer)} />
        </TouchableOpacity>

        {silentMode ? (
          timer > 0 && (
            <View style={styles.missedSection}>
              <Text style={[styles.missedTitle, { color: isDark ? 'white' : '#000' }]}>
                You Missed
              </Text>
              <Text style={styles.seeAll}>See all</Text>
              {[1, 2, 3].map((_, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.missedItem,
                    { backgroundColor: isDark ? '#222' : '#f6f6f6' },
                  ]}
                >
                  <Text style={[styles.sender, { color: isDark ? 'white' : '#000' }]}>
                    Steve Jobs
                  </Text>
                  <View style={styles.callRow}>
                    <Text style={[styles.type, { color: '#aaa' }]}>CALL</Text>
                    <Text style={[styles.time, { color: '#aaa' }]}>5 min ago</Text>
                  </View>
                </View>
              ))}
            </View>
          )
        ) : (
          <View style={styles.scheduleSection}>
            <ScheduleCard />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // ensure scroll space
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginTop: 20,
  },
  silentButtonWrapper: {
    alignItems: 'center',
    marginVertical: 30,
  },
  callRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  missedSection: {
    marginTop: 10,
  },
  missedTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  seeAll: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#D6721E',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  missedItem: {
    marginTop: 15,
    borderRadius: 12,
    padding: 15,
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
  },
  scheduleSection: {
    marginTop: 20,
  },
});
