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

const ForgotPasswordScreen2 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleResetPassword = () => {
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
              <Text className="text-purple-600 text-2xl font-bold">🔑</Text>
            </View>

            <Text className="text-white text-3xl font-bold mb-2">
              Reset Password
            </Text>
            <Text className="text-purple-100 text-center text-base">
              Create a new secure password for your account
            </Text>
          </View>

          {/* Reset Password Form Card */}
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
                Create New Password
              </Text>

              {/* Subtitle */}
              <Text className="text-gray-600 text-center text-base mb-8">
                Please enter your new password and confirm it to complete the reset process.
              </Text>

              {/* New Password Input */}
              <View className="mb-6">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your new password"
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

              {/* Confirm Password Input */}
              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your new password"
                    placeholderTextColor="#9CA3AF"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="px-4"
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Text className="text-purple-600 text-sm font-medium">
                      {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your new password"
                    placeholderTextColor="#9CA3AF"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="px-4"
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Text className="text-purple-600 text-sm font-medium">
                      {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your new password"
                    placeholderTextColor="#9CA3AF"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="px-4"
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Text className="text-purple-600 text-sm font-medium">
                      {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your new password"
                    placeholderTextColor="#9CA3AF"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="px-4"
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Text className="text-purple-600 text-sm font-medium">
                      {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm New Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your new password"
                    placeholderTextColor="#9CA3AF"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <TouchableOpacity
                    className="px-4"
                    onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                  >
                    <Text className="text-purple-600 text-sm font-medium">
                      {isConfirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Password Requirements */}
              <View className="mb-8 p-4 bg-gray-50 rounded-xl">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Password Requirements:
                </Text>
                <Text className="text-gray-500 text-xs">
                  • At least 8 characters long{'\n'}
                  • Contains uppercase and lowercase letters{'\n'}
                  • Contains at least one number{'\n'}
                  • Contains at least one special character
                </Text>
              </View>

              {/* Reset Password Button */}
              <TouchableOpacity
                className="rounded-xl py-4 mb-6"
                style={{ backgroundColor: '#7C3AED' }}
                onPress={handleResetPassword}
                activeOpacity={0.8}
              >
                <Text className="text-white text-center text-lg font-bold">
                  Reset Password
                </Text>
              </TouchableOpacity>

              {/* Back to Login Link */}
              <View className="flex-row justify-center items-center mt-4">
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

export default ForgotPasswordScreen2;