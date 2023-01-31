import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
  Button,
  HStack,
  TextInput,
} from '@react-native-material/core';

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      style={{backgroundColor: '#474747'}}
      revealed={revealed}
      header={
        <AppBar
          style={{backgroundColor: '#474747'}}
          transparent
          leading={props => (
            <HStack>
              <Button
                style={style.XR}
                variant="text"
                title="XidooRutas"
                onPress={() => setRevealed(prevState => !prevState)}
                {...props}
              />
              <TextInput label="Buscar" style={style.Buscar} />;
            </HStack>
          )}
        />
      }
      backLayer={
        <View style={{height: 150}}>
          <HStack style={style.Hcat}>
            <Button title="Restaurantes" style={style.cat} />
            <Button title="1" style={style.cat} />
            <Button title="1" style={style.cat} />
          </HStack>
          <HStack style={style.Hcat}>
            <Button title="1" style={style.cat} />
            <Button title="1" style={style.cat} />
            <Button title="1" style={style.cat} />
          </HStack>
        </View>
      }>
      <BackdropSubheader title="Subheader" />
    </Backdrop>
  );
};

const style = StyleSheet.create({
  XR: {
    marginTop: 20,
  },
  Buscar: {
    width: 238,
    height: 10,
    marginTop: 10,
  },
  Hcat: {
    marginTop: 20,
    marginHorizontal: 10,
    spacing: 6,
  },
  cat: {
    marginHorizontal: 5,
    marginTop: 5,
    width: 118,
    fontWeight: 'bold',
    backgroundColor: '#FFD127',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
});

export default App;
