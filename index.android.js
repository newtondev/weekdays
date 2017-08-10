// Import some code we need
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

// Days of the week
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
              'Thursday', 'Friday', 'Saturday'];

// Create a react component
class Weekdays extends Component {

  render() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
      { this.days() }
    </View>
  }
  
  days() {
    return DAYS.map((day) => {
      return <DayItem key={day} day={day} />
    });
  }
}

// Style the react component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
