
import React, { useState, useEffect } from 'react';
import {
  View,ScrollView,
  Text,
  StyleSheet,
  Switch,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
  ActivityIndicator,
  Platform,
} from 'react-native';
import SilentIcon from '../assets/svgs/Silent';
//import SoundIcon from '../assets/svgs/SoundIcon'; // You need to create this similarly
import SilentModeCircle from '../components/SilentModeCircle';
import ModernSilentButton from '../components/ModernSilentButton';
import ScheduleCard from '../components/ScheduleCard';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [silentMode, setSilentMode] = useState(false);
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [timer, setTimer] = useState(900); // 15 mins
  const [showContent, setShowContent] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 1000);
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
  return `00:${minutes}:${seconds}`;
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
       
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
  contentContainerStyle={[
    styles.container,
    { backgroundColor: isDark ? '#111111' : '#ffffff' },
  ]}
>
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
        {silentMode ? 'Hi Shipra!' : 'Hi Shipra!'}
      </Text>

{/* <TouchableOpacity
  onPress={toggleSilentMode}
  style={{ alignItems: 'center', marginVertical: 30 }}
>
  <ModernSilentButton silentMode={silentMode} />
  <Text
    style={{
      color: silentMode ? 'white' : '#FFFFFF',
      fontSize: 16,
      marginTop: 20,
      fontWeight: '600',
      textAlign: 'center',
    }}
  >
    {silentMode ? (timer > 0 ? `${formatTime(timer)}\nSilent Mode ON` : 'Silent Mode ON') : 'Silent Mode OFF'}
  </Text>
</TouchableOpacity> */}

<TouchableOpacity
  onPress={toggleSilentMode}
  style={{ alignItems: 'center', marginVertical: 30 }}
>
  <ModernSilentButton silentMode={silentMode} timerFormatted={formatTime(timer)} />
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
          )}
        </View>
      ) : (
        <View style={styles.scheduleSection}>
         

          {/* <View
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
          > */}
            {/* <View>
              <Text style={[styles.timeText, { color: isDark ? 'white' : '#000' }]}>
                09:00 AM - 05:00 PM
              </Text>
              <Text style={[styles.everydayText, { color: '#AAA' }]}>Everyday</Text>
              <Text style={styles.addSchedule}>Add Schedule +</Text>
            </View> */}
            <View>
  <ScheduleCard />
</View>
            
          </View>
        // </View>
      )}
    </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  callRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 2,
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
     fontFamily: 'Roboto',
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
     fontFamily: 'Roboto',
  },
});
