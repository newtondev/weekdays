// Import some code we need
import Moment from 'moment';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

// Create a react component
class Weekdays extends Component {

  render() {
    return <View style={styles.container}>
      { this.days() }
    </View>
  }

  days() {
    const daysItems = [];

    for (let i = 0; i  < 7; i++) {
      const day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem key={day} day={day} daysUntil={i} />
      );
    }

    return daysItems;
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
