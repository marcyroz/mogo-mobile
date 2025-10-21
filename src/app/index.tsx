import { View } from 'react-native';
import { Button } from "../components/ui/button";
import { Text } from "../components/ui/text";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => console.log("Button Pressed")}>
        <Text>Click Me</Text>
      </Button>
    </View>
  )
}
