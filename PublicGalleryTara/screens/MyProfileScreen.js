import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Profile from '../components/Profile';
import {useUserContext} from '../contexts/UserConext';
import IconRightButton from '../components/IconRightButton';
import {Icon} from 'react-native-vector-icons/Icon';

function MyProfileScreen() {
  const {user} = useUserContext();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: user.displayName,
      headerRight: () => (
        <IconRightButton
          name="settings"
          onPress={() => navigation.push('Setting')}
        />
      ),
    });
  }, [navigation, user]);

  return <Profile userId={user.id} />;
}

export default MyProfileScreen;
