import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { CustomeCard } from "@/components";


export default function Index() {
  return (
    <View>
    <View style={style.container}>
      <Image 
        style={style.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={style.Textname}>
        Arya Gani Irawan
      </Text>
      <Text style={style.Textdesc}>aryaganiirawan@gmail.com</Text>
      <Link href="/Login">Login</Link>
      <Link href="/Register">Register</Link>
      <Link href="/homepage">Homepage</Link>
    </View>
    <View style={style.border}>
    <CustomeCard nama="arya"/>
    <CustomeCard nama="mulyono"/>
    <CustomeCard nama="adi"/>
    </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "crimson",
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Textname: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  Textdesc: {
    fontSize: 12,
    color: 'white',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  border:{
    top:-25,
    paddingLeft:20,
    paddingRight:25,
  }
});




