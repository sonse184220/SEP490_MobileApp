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

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleRegister = () => {
  };

  const handleSignIn = () => {
  };

  const handleGoogleRegister = () => {
  };

  const handleFacebookRegister = () => {
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

      {/* Gradient Background */}
      <View className="flex-1" style={{ backgroundColor: '#7C3AED' }}>
        <View className="flex-1 items-center justify-center px-8 pt-16 pb-16">
          {/* App Logo */}
          <View className="items-center mb-16">
            <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-6 shadow-lg">
              <Text className="text-purple-600 text-2xl font-bold">📱</Text>
            </View>

            <Text className="text-white text-3xl font-bold mb-2">
              Create Account
            </Text>
            <Text className="text-purple-100 text-center text-base">
              Sign up to get started with your account
            </Text>
          </View>

          {/* Register Form Card */}
          <View className="flex-1 w-full bg-white rounded-3xl p-6 overflow-hidden shadow-lg">
            <KeyboardAwareScrollView
              contentContainerStyle={{ paddingBottom: 20 }}
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              extraScrollHeight={20}
              showsVerticalScrollIndicator={false}
            >
              {/* Form Title */}
              <Text className="text-gray-800 text-2xl font-bold text-center mb-8">
                Sign Up
              </Text>

              {/* Name Input */}
              <View className="mb-6">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Full Name
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your full name"
                    placeholderTextColor="#9CA3AF"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="words"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Phone Number Input */}
              <View className="mb-6">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Phone Number
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Enter your phone number"
                    placeholderTextColor="#9CA3AF"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

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
              <View className="mb-6">
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

              {/* Confirm Password Input */}
              <View className="mb-6">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Confirm Password
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200 flex-row items-center">
                  <TextInput
                    className="flex-1 px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="Confirm your password"
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

              {/* Birthday Input */}
              <View className="mb-8">
                <Text className="text-gray-600 text-sm font-medium mb-2">
                  Birthday
                </Text>
                <View className="bg-gray-50 rounded-xl border border-gray-200">
                  <TextInput
                    className="px-4 py-4 text-gray-800 text-base rounded-xl"
                    placeholder="MM/DD/YYYY"
                    placeholderTextColor="#9CA3AF"
                    value={birthday}
                    onChangeText={setBirthday}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
              </View>

              {/* Register Button */}
              <TouchableOpacity
                className="rounded-xl py-4 mb-6"
                style={{ backgroundColor: '#7C3AED' }}
                onPress={handleRegister}
                activeOpacity={0.8}
              >
                <Text className="text-white text-center text-lg font-bold">
                  Create Account
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center mb-6">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-gray-500 text-sm">
                  Or sign up with
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
              </View>

              {/* Social Login Buttons */}
              <View className="flex-row justify-between mb-8">
                <TouchableOpacity
                  className="flex-1 border border-gray-300 rounded-xl py-3 mr-2 flex-row items-center justify-center"
                  onPress={handleGoogleRegister}
                  activeOpacity={0.8}
                >
                  <Text className="text-red-500 text-lg mr-2">G</Text>
                  <Text className="text-gray-700 text-sm font-medium">Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 border border-gray-300 rounded-xl py-3 ml-2 flex-row items-center justify-center"
                  onPress={handleFacebookRegister}
                  activeOpacity={0.8}
                >
                  <Text className="text-blue-600 text-lg mr-2">f</Text>
                  <Text className="text-gray-700 text-sm font-medium">Facebook</Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Link */}
              <View className="flex-row justify-center items-center">
                <Text className="text-gray-600 text-base">
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={handleSignIn}>
                  <Text className="text-purple-600 text-base font-bold">
                    Sign In
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

export default RegisterScreen;