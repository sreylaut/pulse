/**
 * @format
 */
 import { Provider as PaperProvider } from 'react-native-paper';
 import { AppRegistry } from 'react-native';
 import App from './App';
 import { name as appName } from './app.json';
export default function Main() {
    return (
      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }
AppRegistry.registerComponent(appName,()=>Main);
