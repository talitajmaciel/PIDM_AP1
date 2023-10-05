import { Modal, View, Text, Button } from 'react-native';
import MyStyle from './MyStyle';

const Questao02 = ({ isVisible, closeModal, purchaseData }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={MyStyle.modal}>
        <View style={MyStyle.modal}>
          <Text>{purchaseData.date}</Text>
          <Button title="Fechar Modal" onPress={closeModal} />
          <Text>Ícone da compra</Text>
          <Text>Nome da compra: {purchaseData.purchaseName}</Text>
          <Text>Valor: {purchaseData.purchaseValue}</Text>
          <Text>Data: {purchaseData.date}</Text>
          <Text>Hora: {purchaseData.time}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Questao02;
