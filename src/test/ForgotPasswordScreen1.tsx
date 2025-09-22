import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { width, height } = Dimensions.get('window');

const ForgotPasswordScreen1 = () => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
  };

  const handleBackToLogin = () => {
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      {/* Gradient Background */}
      <View className="flex-1" style={{ backgroundColor: '#7C3AED' }}>
        <View className="flex-1 items-center justify-center px-8 pt-16 pb-16">
          {/* Header Section */}
          <View className="items-center mb-16">
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-6 shadow-lg">
              <Text className="text-purple-600 text-2xl font-bold">🔒</Text>
            </View>

            <Text className="text-white text-3xl font-bold mb-2">
              Forgot Password?
            </Text>
            <Text className="text-purple-100 text-center text-base">
              Enter your email to receive a verification code
            </Text>
          </View>

          {/* Forgot Password Form Card */}
          <View className="flex-1 w-full bg-white rounded-3xl p-6 overflow-hidden shadow-lg">
            <KeyboardAwareScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              extraScrollHeight={20}
              showsVerticalScrollIndicator={false}
            >
              {/* Form Title */}
              <Text className="text-gray-800 text-2xl font-bold text-center mb-4">
                Reset Password
              </Text>

              {/* Subtitle */}
              <Text className="text-gray-600 text-center text-base mb-8">
                Please enter your email address. We'll send you a verification code to reset your password.
              </Text>

              {/* Email Input */}
              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Email Address
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View> */}

              {/* Send Code Button */}
              <TouchableOpacity
                className="rounded-xl py-4 mb-6"
                style={{ backgroundColor: '#7C3AED' }}
                onPress={handleSendCode}
                activeOpacity={0.8}
              >
                <Text className="text-white text-center text-lg font-bold">
                  Send Verification Code
                </Text>
              </TouchableOpacity>

              {/* Back to Login Link */}
              <View className="flex-row justify-center items-center mt-8">
                <Text className="text-gray-600 text-base">
                  Remember your password?{' '}
                </Text>
                <TouchableOpacity onPress={handleBackToLogin}>
                  <Text className="text-purple-600 text-base font-bold">
                    Back to Login
                  </Text>
                </TouchableOpacity>
              </View>

            </KeyboardAwareScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default ForgotPasswordScreen1;