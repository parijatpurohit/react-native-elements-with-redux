import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, ThemeProvider } from 'react-native-elements';
import { connect } from 'react-redux';
import I18n from '../i18n';
import style from '../App_style';
import sample from '../redux/actions/sample';

export class MainContainer extends React.Component {
  componentDidMount() {
    console.log('mounted');
    const { dispatch } = this.props;
    console.log(sample());
    dispatch(sample());
  }

  render() {
    return (
      <ThemeProvider style={style.container}>
        <Button title="Hey!" />
        <View>
          <Text>{I18n.t('mainText')}</Text>
          <Avatar
            onPress={() => console.log('pressed')}
                //   onClick={() => }
            size="large"
            containerStyle={style.avatar}
            rounded
            source={{
              uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  sampleResponse: state.sample,
});
export default connect(mapStateToProps)(MainContainer);
