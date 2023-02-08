import React, { useState } from 'react';
import {
  View,
  Text, StyleSheet, TextInput, FlatList, TouchableOpacity,
} from 'react-native';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
  Button,
  HStack,
  Stack,
  Pressable,
  Box
} from '@react-native-material/core';
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import { color } from 'native-base/lib/typescript/theme/styled-system';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Titulo 1',
    desc: 'Hola1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Titulo 2',
    desc: 'Hola2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Titulo 3',
    desc: 'Hola3'
  },
  {

    title: 'Titulo 4',
    desc: 'Hola4'
  },
  {

    title: 'Titulo 5',
    desc: 'Hola5'
  },
  {

    title: 'Titulo 6',
    desc: 'Hola6'
  },
  {

    title: 'Tadeo',
    desc: 'Hola6'
  },
  {

    title: 'Tadeo',
    desc: 'Hola6'
  },
];


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
      <View style={style.container}>
        <FlatList
        style={{marginBottom:'10%'}}
          data={DATA}
          renderItem={({ item, index }) => (

            <TouchableOpacity
              /*onPress={() =>}*/
              style={{
                padding: 15,
                width: '65%',
                margin: 5,
                backgroundColor: "#FFFFFF",
                borderRadius: 10
              }}
            >
              <HStack>
              <Box w={92} h={92} m={4} style={{ backgroundColor: '#F2C94C'}}
              />
              <Stack
              style={{
                    marginHorizontal: '5%'
                  }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#333333',
                    fontWeight: 'bold',
                    letterSpacing: 1,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginRight:'25%',
                    marginBottom:'2%',
                    fontSize: 15,
                    color: '#333333',
                    fontWeight: 'normal',
                    letterSpacing: 1,
                  }}>
                  {item.desc}
                </Text>
              </Stack>

              </HStack>
            </TouchableOpacity>

          )}
        >

        </FlatList>
      </View>


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
  container: {
    margin: 5,
    width: 600,
    backgroundColor: "#E8E8E8",
  },
  card: {
    marginHorizontal: 12,
    marginTop: 5,
    width: 380,
    height: 180,

    backgroundColor: '#F2C94C',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },

});

export default App;