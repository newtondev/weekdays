// Import some code we need
import React, {
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';

// Create our component
export default class DayItem extends Component {

  render() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
  
}

// Style our component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#00FF'
  }
});
