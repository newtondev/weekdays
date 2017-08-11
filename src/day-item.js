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
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  }

  style() {
    console.log(this.props.daysUntil);
    return {
      color: this.color(),
      //fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  color() {
    let opacity = 1 / this.props.daysUntil;
    opacity = Math.min(Math.max(0, opacity), 1);
    return `rgba(0, 0, 0, ${opacity})`;
  }

  fontWeight() {
    const weight = 7 - this.props.daysUntil;
    return weight * 100;
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }
}
