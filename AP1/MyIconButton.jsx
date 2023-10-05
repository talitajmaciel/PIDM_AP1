import { View } from "react-native"
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper"
import MyStyle from "./MyStyle"

const MyIconButton = () => {
    return (
        <PaperProvider>
            <View style={MyStyle.iconButton}>
                <IconButton
                    icon="cart"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="medical-bag"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                />
                <IconButton
                    icon="tools"
                    iconColor={MD3Colors.tertiary0}
                    size={30}
                    onPress={() => console.log('Pressed')}
                    mode="contained"
                    disabled={true}
                />
            </View>
        </PaperProvider>

    )
}

export default MyIconButton