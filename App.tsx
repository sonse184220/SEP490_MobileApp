/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "./global.css"
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import LoginScreenDemo from './src/test/LoginScreenDemo';
export default function App() {
  return (
    // <SafeAreaProvider>
    <LoginScreenDemo />

  );
}
// export default function App() {
//   return (
//     <View
//       className="flex-1 items-center justify-center bg-blue-500"
//     // style={{ backgroundColor: 'red' }} // Fallback để test
//     >
//       <Text
//         className="text-white text-2xl font-bold"
//       // style={{ color: 'yellow' }} // Fallback để test
//       >
//         Hello Tailwind!
//       </Text>
//     </View>
//     // <View className="flex-1 items-center justify-center bg-blue-500">
//     //   <Text className="text-blue text-2xl font-bold">Hello Tailwind!</Text>
//     // </View>
//   );
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
