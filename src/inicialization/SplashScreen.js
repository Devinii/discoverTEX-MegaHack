import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import Presentation from './src/../../pages/presentation';
const SplashScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {loading ? (
          <LottieView
            source={require('../../loading.json')}
            autoPlay
            // onAnimationFinish={() => setLoading(false)}
          />
        ) : (
          <Presentation />
        )}
      </View>
    </>
  );
};

export default SplashScreen;
