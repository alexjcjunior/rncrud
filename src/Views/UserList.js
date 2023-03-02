import {StackRouter} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';
import UsersConxtext from '../context/UsersContext';

export default props => {
  const {state, dispatch} = useContext(UsersConxtext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuario', 'Deseja excluir o usuario?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActionItem(user) {
    return (
      <>
        {/* <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        /> */}
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem data={user.id} onPress={() => props.navigation.navigate('')}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Title>{user.name}</ListItem.Title>
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        <Button
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => {
            confirmUserDeletion(user);
          }}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={users => users.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
