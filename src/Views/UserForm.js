import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';

export default props => {
  const [user, setUser] = useState(
    props.route.params ? props.route.params : {},
  );

  return (
    <View style={sytle.form}>
      <Text>Name</Text>
      <TextInput
        style={sytle.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome:"
        value={user.name}
      />
      <Text>Eamil</Text>
      <TextInput
        style={sytle.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o email:"
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={sytle.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a Url do Avatar:"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const sytle = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  form: {
    padding: 15,
  },
});
