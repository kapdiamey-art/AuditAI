import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../theme.dart';
import '../../main_navigation.dart';

class RegisterScreen extends StatelessWidget {
  const RegisterScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Create Account')),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const TextField(decoration: InputDecoration(labelText: 'Full Name', prefixIcon: Icon(Icons.person, color: AuditTheme.textMuted))),
              const SizedBox(height: 32),
              ElevatedButton(onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const MainNavigation())), child: const Text('Register')),
            ],
          ).animate().fade().slideY(begin: 0.1, end: 0),
        ),
      ),
    );
  }
}
