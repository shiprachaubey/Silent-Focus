
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CalenderIcon from '../assets/svgs/Calender';
import LocationIcon from '../assets/svgs/Location';
import NotificationIcon from '../assets/svgs/Notification';
import Toggle from '../assets/svgs/Toggle';

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

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Text style={[styles.title, { color: textColor }]}>
          You Stay in{'\n'}Control
        </Text>
        <Text style={[styles.description, { color: subtitleColor }]}>
          To automate silent mode based on where you are and what’s on your calendar, we need a few permissions.
        </Text>

        {/* Location Permission */}
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
          <TouchableOpacity onPress={() => setLocationEnabled(prev => !prev)}>
            <Toggle isOn={locationEnabled} />
          </TouchableOpacity>
        </View>

        {/* Calendar Permission */}
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
          <TouchableOpacity onPress={() => setCalendarEnabled(prev => !prev)}>
            <Toggle isOn={calendarEnabled} />
          </TouchableOpacity>
        </View>

        {/* Notification Permission */}
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
          <TouchableOpacity onPress={() => setNotificationsEnabled(prev => !prev)}>
            <Toggle isOn={notificationsEnabled} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: orange }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  content: {
    padding: 24,
    paddingBottom: 120,
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
    backgroundColor: 'rgba(85, 85, 85, 0.12)',
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
  button: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
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
