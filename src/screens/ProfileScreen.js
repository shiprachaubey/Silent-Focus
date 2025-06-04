
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Pressable,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoutIcon from '../assets/svgs/Logout';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const calendarOptions = ['Google Calendar', 'Outlook Calendar'];

const ProfileScreen = () => {
  const [calendarProvider, setCalendarProvider] = useState(null);
  const [isCalendarSynced, setIsCalendarSynced] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

const [phoneNumber, setPhoneNumber] = useState('');
const [isEditingPhone, setIsEditingPhone] = useState(false);

const phoneInputRef = useRef(null);


  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const isDark = colorScheme === 'dark';

  const background = isDark ? '#111' : '#fff';
  const card = isDark ? 'rgba(85,85,85,0.12)' : '#2E3A3E14';
  const text = isDark ? '#eee' : '#999';
  const mutedText = isDark ? '#aaa' : '#999';
  const divider = isDark ? 'rgba(85,85,85,0.35)' : '#ccc';

  const handleSelectProvider = (provider) => {
    setCalendarProvider(provider);
    setIsCalendarSynced(true);
    setModalVisible(false);
  };

  const handleDisconnectCalendar = () => {
    setIsCalendarSynced(false);
    setCalendarProvider(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Account Center</Text>

        {/* Account Info */}
        <Section title="Profile & Account Info" height={125} cardColor={card}>
          <Field label="Name" value="Ayan Hazra" textColor={text} />
          <Separator divider={divider} />
          <Field label="Email" value="jesus722481@gmail.com" textColor={text} />
          <Separator divider={divider} />
        <View style={styles.fieldRow}>
  <View style={styles.fieldRow}>
  <View style={styles.rowHeader}>
    <Text style={[styles.label, { color: text }]}>Phone</Text>
    {isEditingPhone ? (
      <TextInput
        ref={phoneInputRef}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onBlur={() => setIsEditingPhone(false)}
        autoFocus
        keyboardType="phone-pad"
        style={[styles.value, { color: text, padding: 0 }]}
        placeholder="+ Add Phone Number"
        placeholderTextColor="#D6721E"
      />
    ) : (
      <Pressable onPress={() => setIsEditingPhone(true)}>
        <Text style={[styles.value, { color: phoneNumber ? text : '#D6721E' }]}>
          {phoneNumber || '+ Add Phone Number'}
        </Text>
      </Pressable>
    )}
  </View>
</View>

</View>

        </Section>

        {/* Calendar Settings */}
        <Section title="Calender Settings" height={isCalendarSynced ? 200 : 180} cardColor={card}>
          <Field
            label="Calender Sync"
            value={isCalendarSynced ? 'Active' : 'Inactive'}
            color={isCalendarSynced ? '#34A853' : '#999'}
          />
          <Separator divider={divider} />
          <Field label="Event Filters" value="Modify Filters" color="#D6721E" />
          <Separator divider={divider} />

          {isCalendarSynced ? (
            <>
              <Text style={[styles.providerText, { color: mutedText }]}>{calendarProvider}</Text>
              <TouchableOpacity onPress={handleDisconnectCalendar}>
                <Text style={styles.disconnect}>Disconnect Calender</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.syncNow}>+ Sync a Calendar</Text>
            </TouchableOpacity>
          )}
        </Section>

        {/* Privacy */}
        <Section title="Privacy & Permissions" height={109} cardColor={card}>
          <Field
            label="Active Permissions"
            value="Location"            color={mutedText}
          />
          <Separator divider={divider} />
          <Field label="Add or Change Password" textColor={text} />
        </Section>

        {/* Legal */}
        <Section title="Legal & Data Controls" height={109} cardColor={card}>
          <Field label="Terms of Service" textColor={text} />
          <Separator divider={divider} />
          <Field label="Privacy Policy" textColor={text} />
        </Section>

        {/* Logout */}
        <View style={styles.logoutContainer}>
         <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Logo')}>

            <LinearGradient
              colors={['#B87333', '#B06E31', '#523317']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.logoutBtn}
            >
              <LogoutIcon width={16} height={16} />
              <Text style={styles.logoutText}>Logout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Sync Modal */}
        <Modal transparent animationType="fade" visible={modalVisible}>
          <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
            <View style={[styles.modalBox, { backgroundColor: isDark ? '#222' : '#fff' }]}>
              <Text style={[styles.modalTitle, { color: text }]}>Choose Calendar Provider</Text>
              {calendarOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  onPress={() => handleSelectProvider(opt)}
                  style={styles.optionBtn}
                >
                  <Text style={styles.optionText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

// Reusable components
const Section = ({ title, children, height, cardColor }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={[styles.sectionBox, { height, backgroundColor: cardColor }]}>{children}</View>
  </View>
);

const Field = ({ label, value, color, textColor }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const defaultLabelColor = isDark ? '#eee' : '#999';
  const defaultValueColor = isDark ? '#aaa' : '#999';

  return (
    <View style={styles.fieldRow}>
      <View style={styles.rowHeader}>
        <Text style={[styles.label, { color: textColor || defaultLabelColor }]}>{label}</Text>
        <Text style={[styles.value, { color: textColor || color || defaultValueColor }]}>{value}</Text>
      </View>
    </View>
  );
};


const Separator = ({ divider }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: divider || (isDark ? 'rgba(85,85,85,0.35)' : '#bbb'),
        },
      ]}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 140,
    paddingTop: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#D6721E',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    marginBottom: 10,
  },
  sectionBox: {
    width: '100%',
    maxWidth: 335,
    alignSelf: 'center',
    borderRadius: 17,
    padding: 16,
    justifyContent: 'center',
  },
  fieldRow: {
    marginBottom: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
  },
  separator: {
    height: 1,
    marginVertical: 4,
  },
  disconnect: {
    color: '#D6721E',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  providerText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 2,
  },
  syncNow: {
    color: '#D6721E',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 6,
  },
  logoutContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutBtn: {
    width: 151,
    height: 47,
    borderRadius: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 65,
  },
  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 12,
    textAlign: 'center',
  },
  optionBtn: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  optionText: {
    color: '#D6721E',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileScreen;
