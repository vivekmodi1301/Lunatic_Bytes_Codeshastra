import 'package:flutter/material.dart';
import '../screens/home-screen.dart';
import 'package:firebase_core/firebase_core.dart';

Future main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  // SharedPreferences related code here
  runApp(MyApp());
}

// void main(){

//   runApp(MyApp());
// }

class MyApp extends StatelessWidget {
  // const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Lunatic Byte',
      home: HomeScreen(),
    );
  }
}
