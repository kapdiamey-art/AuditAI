import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../theme.dart';
import 'auth/login_screen.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My Profile')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(children: [
          const CircleAvatar(radius: 40, backgroundColor: AuditTheme.surfaceLighter, child: Text('AX', style: TextStyle(color: AuditTheme.textWhite, fontSize: 28, fontWeight: FontWeight.bold))),
          const SizedBox(height: 40),
          OutlinedButton(onPressed: () => Navigator.of(context, rootNavigator: true).pushReplacement(MaterialPageRoute(builder: (_) => const LoginScreen())), child: const Text('Sign Out')),
        ]),
      ),
    );
  }
}
