
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ClockIcon from '../assets/svgs/clock';
import Toggle from '../assets/svgs/Toggle';


const ScheduleCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  return (

    <View style={styles.container}>
  <Text style={styles.title}>SET A SCHEDULE</Text>
  <Text style={styles.description}>
    Set to turn on automatically at a set time
  </Text>

  <View style={styles.card}>
    <View style={styles.cardContent}>
      <ClockIcon />
      <View style={styles.timeBlock}>
        <Text style={styles.timeRange}>09:00 AM - 05:00 PM</Text>

        {/* aligned Everyday + line + Add Schedule */}
        <View style={styles.labelBlock}>
          <Text style={styles.everyday}>Everyday</Text>

        <View style={styles.dividerLine} />


          <Text style={styles.addSchedule}>Add Schedule  ＋</Text>
        </View>
      </View>

     <TouchableOpacity onPress={toggleSwitch} style={styles.toggleWrapper}>
  <Toggle isOn={isEnabled} />
</TouchableOpacity>

    </View>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  dividerLine: {
  width: 255,
  height: 1,
  backgroundColor: 'rgba(85, 85, 85, 0.35)',
  marginVertical: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 2, // Android drop-shadow
},
toggleWrapper: {
  marginTop: 4, 
  alignSelf: 'flex-start', 
},


  title: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  description: {
    color: '#FAFAFA',
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1C1C1C',
    borderRadius: 20,
    padding: 18,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  timeRange: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Roboto',
  },

  labelBlock: {
  marginTop: 4,
},

everyday: {
  color: 'rgba(250, 250, 250, 0.45)',
  fontSize: 13,
  fontFamily: 'Roboto',
  marginBottom: 6,
},

addSchedule: {
  color: '#D6721E',
  fontSize: 13,
  fontWeight: '500',
  fontFamily: 'Roboto',
  marginTop: 6,
},

timeBlock: {
  flex: 1,
  marginLeft: 14,
},

});

export default ScheduleCard;
