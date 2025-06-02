import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeIcon from '../assets/svgs/HomeIcon';
import MissedIcon from '../assets/svgs/ActivityIcon';
import ControlIcon from '../assets/svgs/SettingIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';

const icons = {
  Home: <HomeIcon />,
  Missed: <MissedIcon />,
  Control: <ControlIcon />,
  Accounts: <ProfileIcon />,
};

const labels = {
  Home: '',
  Missed: '',
  Control: 'Control',
  Accounts: '',
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <View style={[styles.wrapper, {
      backgroundColor: isDark
        ? 'rgba(85, 85, 85, 0.12)'
        : 'rgba(200, 200, 200, 0.35)',
      paddingBottom: insets.bottom + 10,
    }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = labels[route.name] || route.name;
        const Icon = icons[route.name];

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={isFocused ? styles.activeTab : styles.inactiveTab}
            activeOpacity={0.8}
          >
            {isFocused ? (
              <View style={styles.activeContent}>
                {React.cloneElement(Icon, {
                  width: 22,
                  height: 22,
                  color: '#FFA43A',
                })}
                {label !== '' && (
                  <Text style={styles.activeLabel}>{label}</Text>
                )}
              </View>
            ) : (
              React.cloneElement(Icon, {
                width: 22,
                height: 22,
                color: isDark ? '#fff' : '#000',
              })
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 42,
    marginHorizontal: 16,
    marginTop: 10,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 65,
    elevation: 10,
  },
  activeTab: {
    width: 110,
    height: 47,
    borderRadius: 42,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 65,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
  },
  activeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  activeLabel: {
    color: '#FFA43A',
    fontWeight: '600',
    fontSize: 14,
  },
  inactiveTab: {
    width: 22,
    height: 22,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;
