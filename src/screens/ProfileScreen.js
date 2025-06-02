import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const ProfileScreen = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: '#D6721E' }]}>Account Center</Text>

      {/* Profile Info */}
      <Section title="Profile & Account Info">
        <Field label="Name" value="Ayan Hazra" />
        <Field label="Email" value="jesus722481@gmail.com" />
        <Field
          label="Phone"
          value="+  Add Phone Number"
          isAction
          color={isDark ? '#FFA43A' : '#D6721E'}
        />
      </Section>

      {/* Calendar Settings */}
      <Section title="Calender Settings">
        <Field label="Calender Sync" value="Active" color="green" />
        <Field label="Event Filters" value="Modify Filters" color="#FFA43A" />
        <TouchableOpacity>
          <Text style={[styles.link, { color: '#D6721E' }]}>Disconnect Calender</Text>
        </TouchableOpacity>
      </Section>

      {/* Privacy & Permissions */}
      <Section title="Privacy & Permissions">
        <Field
          label="Active Permissions"
          value="Location, Calender, Notification"
          color="#888"
        />
        <Field label="Add or Change Password" />
      </Section>

      {/* Legal */}
      <Section title="Legal & Data Controls">
        <Field label="Terms of Service" />
        <Field label="Privacy Policy" />
      </Section>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>⎋ Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionBox}>{children}</View>
  </View>
);

const Field = ({ label, value, isAction, color }) => (
  <View style={styles.fieldRow}>
    <Text style={[styles.label]}>{label}</Text>
    <Text style={[styles.value, { color: color || '#999' }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    alignSelf: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#aaa',
  },
  sectionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 16,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#eee',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
  },
  logoutBtn: {
    backgroundColor: '#D6721E',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
