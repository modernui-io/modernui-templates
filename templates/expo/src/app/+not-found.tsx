import { Text } from "@/components/ui/text";
import { Link, Stack } from "expo-router";
import { Fragment } from "react";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>This screen doesn't exist.</Text>

        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </Fragment>
  );
}
