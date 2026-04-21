import 'package:flutter/material.dart';
import 'theme.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const AuditAiApp());
}

class AuditAiApp extends StatelessWidget {
  const AuditAiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AUDITAI',
      debugShowCheckedModeBanner: false,
      theme: AuditTheme.themeData,
      home: const SplashScreen(),
    );
  }
}
