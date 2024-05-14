import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logoutAsync } from '../store/thunks/authThunks';
import { NavigationProps } from '../navigation/NavigationTypes';
import { List, Surface } from 'react-native-paper';
import { toggleTheme } from '../store/slices';
import { AppVersionText, Divider, ListItem, ScreenWrapper } from '../components';

const AccountScreen: React.FC<{ navigation: NavigationProps<'Account'> }> = ({ navigation }) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const dispatch = useAppDispatch();

  const handleThemePress = async () => {
    dispatch(toggleTheme());
  };

  const handleLogoutPress = async () => {
    await dispatch(logoutAsync());
  };

  const GeneralListItems = [
    { title: 'Theme', leftIcon: 'theme-light-dark', rightIcon: 'chevron-right', rightText: isDarkMode ? 'Dark' : 'Light', onPress: handleThemePress },
    { title: 'Language', leftIcon: 'translate', rightIcon: 'chevron-right' },
    { title: 'Help Center', leftIcon: 'help-circle-outline', rightIcon: 'chevron-right' },
    { title: 'Terms & Conditions', leftIcon: 'file-document-outline', rightIcon: 'chevron-right' },
    { title: 'Contact Us', leftIcon: 'chat-processing-outline', rightIcon: 'chevron-right' },
    { title: 'Delete Account', leftIcon: 'account-remove-outline', rightIcon: 'chevron-right' },
    { title: 'Log Out', leftIcon: 'logout', rightIcon: 'chevron-right', onPress: handleLogoutPress },
  ];

  return (
    <ScreenWrapper>
      <View
        style={[styles.container, styles.additionalPadding]}
      >
        <Surface style={styles.surface} mode='flat'>
          <List.Section title="General">
            {GeneralListItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <ListItem
                  title={item.title}
                  leftIcon={item.leftIcon}
                  rightIcon={item.rightIcon}
                  rightText={item.rightText}
                  onPress={item.onPress}
                />
                {index < GeneralListItems.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List.Section>
        </Surface>
      </View>
      <AppVersionText />
    </ScreenWrapper>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignSelf: 'center',
  },
  additionalPadding: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  surface: {
    borderRadius: 16,
  },
});

export default AccountScreen;
