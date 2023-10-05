import { SectionList, View, Text } from 'react-native';
import { List } from 'react-native-paper';
import MyStyle from './MyStyle';
import data from './Dados';
import MyIconButton from './MyIconButton';
import Questao02 from './ModalQuestao02';

const Questao01 = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedPurchase, setSelectedPurchase] = useState(null);

    const openModal = (purchaseData) => {
    setSelectedPurchase(purchaseData);
    setModalVisible(true);
    };

    const closeModal = () => {
    setModalVisible(false);
    };

  return (
    <View style={MyStyle.container}>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            title={item.purchaseName}
            description={`Horário: ${item.purchaseTime} - Valor: ${item.purchaseValue}`}
            left={(props) => <List.Icon {...props} icon={item.iconName} />}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={MyStyle.title}>{title}</Text>
        )}
      />

        <MyIconButton
            icon="cart"
            onPress={() => openModal(item)}
        />

        <Questao02
            isVisible={isModalVisible}
            closeModal={closeModal}
            purchaseData={selectedPurchase}
        />
    </View>
  );
};

export default Questao01;
