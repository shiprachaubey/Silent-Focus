

import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  useColorScheme,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen2 = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const descColor = colorScheme === 'dark' ? '#ccc' : '#444';

  const handleTap = () => {
    navigation.replace('Welcome3');
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />

        <Animated.View
          style={[
            styles.animatedContent,
            {
              opacity: animation,
              transform: [{ scale: animation }],
            },
          ]}
        >
          <Text style={[styles.title, { color: textColor }]}>
            Stay Automation{'\n'}Your Way
          </Text>

          <Image
            source={require('../assets/images/home2.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={[styles.description, { color: descColor }]}>
            Whether you're attending a meeting or entering a quiet zone, your phone will switch to silent mode automatically.
          </Text>

          <View style={styles.dotsWrapper}>
            {colorScheme === 'dark' && (
              <LinearGradient
                colors={['rgba(184, 115, 51, 0)', 'rgba(184, 115, 51, 0.08)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientGlow}
              />
            )}
            <View style={styles.dots}>
              <View style={styles.dot} />
              <View style={styles.activeDot} />
              <View style={styles.dot} />
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default WelcomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedContent: {
    alignItems: 'center',
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
    fontFamily: 'Roboto',
  },
  image: {
    width: '90%',
    height: 300,
    marginBottom: 24,
    marginTop: -30,
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 24,
    marginBottom: 40,
    fontFamily: 'Roboto',
  },
  dotsWrapper: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  gradientGlow: {
    position: 'absolute',
    bottom: -30,
    width: '100%',
    height: 100,
    borderRadius: 60,
    zIndex: -1,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C4A484',
  },
  activeDot: {
    width: 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F08A2C',
  },
});
