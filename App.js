import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
  Button,
  HStack,
  Stack,
  Pressable
} from '@react-native-material/core';



const App = () => {
  const [revealed, setRevealed] = useState(false);
  const [text, onChangeText] = React.useState('');

  return (
    <Backdrop
      style={{ backgroundColor: '#333333', }}
      revealed={revealed}
      header={
        <AppBar
          style={{ backgroundColor: '#333333', paddingBottom: 20 }}
          transparent
          leading={props => (
            <HStack style={{ paddingTop: 20 }}>
              <TouchableOpacity>
                <Stack >
                  <Button
                    variant="text"
                    title=""
                    onPress={() => setRevealed(prevState => !prevState)}
                    {...props}
                    leading={props => (
                      <Stack>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F2C94C', paddingLeft: 10 }}>Xidoo</Text>
                      </Stack>
                    )}
                  />
                  <Button
                    variant="text"
                    title=""
                    onPress={() => setRevealed(prevState => !prevState)}
                    {...props}
                    leading={props => (
                      <Stack>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F2C94C', paddingLeft: 10 }}>Rutas</Text>
                      </Stack>
                    )}
                  />

                </Stack>
              </TouchableOpacity>

              <TextInput label="Buscar" style={style.Buscar}
                onChangeText={onChangeText}
                value={text}
                placeholder="Buscar"
              />;
            </HStack>
          )}
        />
      }
      backLayer={
        <View style={{ height: 150 }}>
          <HStack style={style.Hcat}>
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
          </HStack>
          <HStack style={style.Hcat}>
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
            <Button title="" style={style.cat} leading={props => (
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333333', paddingLeft: 10 }}>Prueba</Text>
            )} />
          </HStack>
        </View>
      }>
      <BackdropSubheader
        title="General"
      />
        <Stack>
        <Pressable style={{ width: 380, height: 180, backgroundColor: "skyblue", marginHorizontal: 15, marginTop: 10, borderRadius:10 }}
        leading={props => (
          <HStack>
             <Button title="Contained" />
             <Button title="Contained" />
          </HStack>
        )}/>
        <Pressable style={{ width: 380, height: 180, backgroundColor: "skyblue", marginHorizontal: 15, marginTop: 10, borderRadius:10 }} />
        </Stack>
    </Backdrop>
  );
};

const style = StyleSheet.create({
  Buscar: {
    width: 270,
    height: 50,
    marginTop: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 15
  },
  Hcat: {
    marginTop: 20,
    marginHorizontal: 18,
    spacing: 6,
  },
  cat: {
    marginHorizontal: 12,
    marginTop: 5,
    width: 110,
    fontWeight: 'bold',
    backgroundColor: '#F2C94C',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 90
  },
});

export default App;