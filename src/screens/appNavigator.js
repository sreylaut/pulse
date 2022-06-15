import React from 'react';
import { Text, View } from 'react-native';

const AppNavigator = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}


export default AppNavigator;


// import React from 'react';
// import { createAppContainer, NavigationActions } from 'react-navigation';
// import { connect } from 'react-redux';
// import NetInfo from '@react-native-community/netinfo';
// import NavStack from 'navigations:navStack';
// import { AppSettingsHelper } from 'lib';

// const AppContainer = createAppContainer(NavStack);

// class AppNavigator extends React.Component {
//   navigator = null;

  // componentDidMount = () => {
  //   NetInfo.isConnected.addEventListener('connectionChange', this.onConnectionChanged);
  // };

  // componentWillUnmount = () => {
  //   NetInfo.isConnected.removeEventListener('connectionChange', this.onConnectionChanged);
  // };

  // onConnectionChanged = (isConnected) => {
  //   const index = this.navigator && this.navigator.state.nav.index;

  //   if (index !== 0 && !isConnected) {
  //     let navAction = NavigationActions.navigate({ routeName: 'NoInternetScreen' });
  //     this.navigator && this.navigator.dispatch(navAction);
  //   }
  // };

//   render = () => {
//     const { theme, language } = this.props;

//     return (
//       <AppContainer
//         // ref={(navigator) => {
//         //   this.navigator = navigator;
//         // }}
//         screenProps={{
//           theme: AppSettingsHelper.getAppTheme(theme),
//           fonts: AppSettingsHelper.getAppFonts(language),
//           language: AppSettingsHelper.getAppLanguage(language)
//         }}
//       />
//     );
//   };
// }

// const mapStateToProps = ({ AppReducer }) => ({
//   theme: AppReducer.theme,
//   language: AppReducer.language,
//   selectedMapPosition: AppReducer.selectedMapPosition
// });

// export default (AppNavigator);
