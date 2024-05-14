import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { List, Text } from 'react-native-paper';

interface ListItemProps {
  title: string;
  description?: string;
  leftIcon?: string;
  rightIcon?: string;
  rightText?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ListItem = ({ title, description, style, leftIcon, rightIcon, rightText, onPress }: ListItemProps) => {
  return (
    <List.Item
      title={title}
      description={description}
      style={style}
      left={(props) => (leftIcon ? <List.Icon {...props} icon={leftIcon} /> : null)}
      right={(props) => (
        rightIcon || rightText ? (
          <View style={{ flexDirection: 'row' }}>
            {rightText && <Text>{rightText}</Text>}
            {rightIcon && <List.Icon {...props} icon={rightIcon} />}
          </View>
        ) : null
      )}
      onPress={onPress}
    />
  );
};

export default ListItem;
