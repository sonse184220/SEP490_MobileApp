import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed with:', { email, password });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    // Handle sign up navigation here
    console.log('Sign up pressed');
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login pressed');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
    console.log('Facebook login pressed');
  };

  return (
    // <SafeAreaProvider>
    // <SafeAreaView className="flex-1">
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      {/* Purple Gradient Background */}
      <View className="flex-1" style={{ backgroundColor: '#7C3AED' }}>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Top Section - Logo and Welcome */}
            <View className="flex-1 items-center justify-center px-8 pt-16">
              {/* App Logo */}
              <View className="items-center mb-16">
                <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-6 shadow-lg">
                  <Text className="text-purple-600 text-2xl font-bold">📱</Text>
                </View>

                <Text className="text-white text-3xl font-bold mb-2">
                  Welcome Back
                </Text>
                <Text className="text-purple-100 text-center text-base">
                  Sign in to continue to your account
                </Text>
              </View>

              {/* Login Form Card */}
              <View
                className="w-full bg-white rounded-t-3xl p-8"
                style={{
                  minHeight: height * 0.6,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: -5 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  elevation: 10,
                }}
              >
                {/* Form Title */}
                <Text className="text-gray-800 text-2xl font-bold text-center mb-8">
                  Sign In
                </Text>

                {/* Email Input */}
                <View className="mb-6">
                  <Text className="text-gray-600 text-sm font-medium mb-2">
                    Email
                  </Text>
                  <View className="bg-gray-50 rounded-xl border border-gray-200">
                    <TextInput
                      className="px-4 py-4 text-gray-800 text-base rounded-xl"
                      placeholder="Enter your email"
                      placeholderTextColor="#9CA3AF"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                </View>

                {/* Password Input */}
                <View className="mb-4">
                  <Text className="text-gray-600 text-sm font-medium mb-2">
                    Password
                  </Text>
                  <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                    <TextInput
                      className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                      placeholder="Enter your password"
                      placeholderTextColor="#9CA3AF"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!isPasswordVisible}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                    <TouchableOpacity
                      className="px-4"
                      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      <Text className="text-purple-600 text-sm font-medium">
                        {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Forgot Password */}
                <View className="items-end mb-8">
                  <TouchableOpacity onPress={handleForgotPassword}>
                    <Text className="text-purple-600 text-sm font-medium">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                  className="rounded-xl py-4 mb-6"
                  style={{ backgroundColor: '#7C3AED' }}
                  onPress={handleLogin}
                  activeOpacity={0.8}
                >
                  <Text className="text-white text-center text-lg font-bold">
                    Sign In
                  </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center mb-6">
                  <View className="flex-1 h-px bg-gray-300" />
                  <Text className="mx-4 text-gray-500 text-sm">
                    Or sign in with
                  </Text>
                  <View className="flex-1 h-px bg-gray-300" />
                </View>

                {/* Social Login Buttons */}
                <View className="flex-row justify-between mb-8">
                  <TouchableOpacity
                    className="flex-1 border border-gray-300 rounded-xl py-3 mr-2 flex-row items-center justify-center"
                    onPress={handleGoogleLogin}
                    activeOpacity={0.8}
                  >
                    <Text className="text-red-500 text-lg mr-2">G</Text>
                    <Text className="text-gray-700 text-sm font-medium">Google</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-1 border border-gray-300 rounded-xl py-3 ml-2 flex-row items-center justify-center"
                    onPress={handleFacebookLogin}
                    activeOpacity={0.8}
                  >
                    <Text className="text-blue-600 text-lg mr-2">f</Text>
                    <Text className="text-gray-700 text-sm font-medium">Facebook</Text>
                  </TouchableOpacity>
                </View>

                {/* Sign Up Link */}
                <View className="flex-row justify-center items-center">
                  <Text className="text-gray-600 text-base">
                    Don't have an account?{' '}
                  </Text>
                  <TouchableOpacity onPress={handleSignUp}>
                    <Text className="text-purple-600 text-base font-bold">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
    // </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default LoginScreen;