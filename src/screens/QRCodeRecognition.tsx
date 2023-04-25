import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRCodeRecognition = () => {
    const cameraRef = useRef<RNCamera>(null);

    const handleScanQRCode = async () => {
        if (cameraRef.current) {
        const options = {
            quality: 0.7,
            base64: true,
            pauseAfterCapture: true,
            fixOrientation: true,
            forceUpOrientation: true,
            width: 500,
        };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.base64);
        }
    };
  

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancelar',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permissão para gravar áudio',
          message: 'Precisamos da sua permissão para gravar áudio',
          buttonPositive: 'OK',
          buttonNegative: 'Cancelar',
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleScanQRCode}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default QRCodeRecognition;