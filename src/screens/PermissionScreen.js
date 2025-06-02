import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Switch,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MapPin, Calendar, Bell } from 'lucide-react-native'; 
import CalenderIcon from '../assets/svgs/Calender';
import LocationIcon from '../assets/svgs/Location';
import NotificationIcon from '../assets/svgs/Notification';

const PermissionScreen = () => {
    const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [calendarEnabled, setCalendarEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const subtitleColor = isDark ? '#aaa' : '#555';
  const cardColor = isDark ? '#1a1a1a' : '#f3f3f3';
  const orange = '#D67D33';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
  <StatusBar
    backgroundColor={backgroundColor}
    barStyle={isDark ? 'light-content' : 'dark-content'}
  />

  <View style={styles.content}>
    <Text style={[styles.title, { color: textColor }]}>You Stay in{'\n'}Control</Text>
    <Text style={[styles.description, { color: subtitleColor }]}>
      To automate silent mode based on where you are and what’s on your calendar, we need a few permissions.
    </Text>

    {/* Permission cards */}
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <View style={styles.icon}>
        <LocationIcon width={24} height={24} color={orange} />
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Access your Location</Text>
        <Text style={[styles.cardDescription, { color: subtitleColor }]}>
          To detect silent zones like libraries, offices, or religious places.
        </Text>
      </View>
      <Switch
        value={locationEnabled}
        onValueChange={setLocationEnabled}
        thumbColor="#fff"
         trackColor={{
    false: 'rgba(0, 0, 0, 0.33)',
    true: 'rgba(240, 138, 44, 0.35)',
  }}
  style={styles.switch}
      />
    </View>

    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <View style={styles.icon}>
        <CalenderIcon width={24} height={24} color={orange} />
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Access your calendar</Text>
        <Text style={[styles.cardDescription, { color: subtitleColor }]}>
          To mute your phone automatically during scheduled meetings or events.
        </Text>
      </View>
      <Switch
        value={calendarEnabled}
        onValueChange={setCalendarEnabled}
        thumbColor="#fff"
         trackColor={{
    false: 'rgba(0, 0, 0, 0.33)',
    true: 'rgba(240, 138, 44, 0.35)',
  }}
  style={styles.switch}
      />
    </View>

    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <View style={styles.icon}>
        <NotificationIcon width={24} height={24} color={orange} />
      </View>
      <View style={styles.textBlock}>
        <Text style={[styles.cardTitle, { color: textColor }]}>Notification access</Text>
        <Text style={[styles.cardDescription, { color: subtitleColor }]}>
          To notify you about missed calls and messages after silent mode ends.
        </Text>
      </View>
      <Switch
        value={notificationsEnabled}
        onValueChange={setNotificationsEnabled}
        thumbColor="#fff"
         trackColor={{
    false: 'rgba(0, 0, 0, 0.33)',
    true: 'rgba(240, 138, 44, 0.35)',
  }}
  style={styles.switch}
      />
    </View>
  </View>

  {/* Continue Button */}
  <TouchableOpacity style={[styles.button, { backgroundColor: orange }]}
  onPress={() => navigation.navigate('Login')}>
    <Text style={styles.buttonText}>Continue</Text>
  </TouchableOpacity>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 120, // Space for bottom button
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Roboto',
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 22,
    fontFamily: 'Roboto',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 17,
    backgroundColor: 'rgba(85, 85, 85, 0.12)', // consistent with design
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
    marginTop: 6,
  },
  textBlock: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: '#AEAEAE',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '300',
    color: '#555',
    lineHeight: 20,
  },
  switch: {
    alignSelf: 'center',
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  button: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    backgroundColor: '#D67D33',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});


export default PermissionScreen;
