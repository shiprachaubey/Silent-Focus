// src/components/CustomTabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabData = [
  { name: 'Home', icon: require('../assets/svgs/HomeIcon') },
  { name: 'Missed', icon: require('../assets/svgs/ActivityIcon')},
  { name: 'Control', icon: require('../assets/svgs/SettingIcon') },
  { name: 'Accounts', icon: require('../assets/svgs/ProfileIcon') },
];

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTabButton]}
          >
            {isFocused ? (
              <View style={styles.activeInner}>
                {/* Use your SVG/icon components instead of emoji */}
                <Text style={styles.iconText}>⚙️</Text>
                <Text style={styles.label}>{label}</Text>
              </View>
            ) : (
              <View style={styles.iconOnly}>
                {/* Use your SVG/icon components instead of emoji */}
                <Text style={styles.iconOnlyText}>⚙️</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(85, 85, 85, 0.12)',
    margin: 16,
    borderRadius: 42,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 65,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOnly: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOnlyText: {
    fontSize: 20,
    color: 'white',
  },
  activeTabButton: {
    width: 110,
    height: 47,
    borderRadius: 42,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 65,
    shadowOffset: { width: 0, height: 4 },
    elevation: 12,
  },
  activeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  iconText: {
    fontSize: 20,
    color: '#FFA43A',
  },
  label: {
    color: '#FFA43A',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default CustomTabBar;
