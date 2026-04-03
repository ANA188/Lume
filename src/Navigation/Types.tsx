import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStack = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
};

export type NavProps = NativeStackNavigationProp<RootStack>;