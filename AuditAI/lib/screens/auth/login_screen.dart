import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../../theme.dart';
import '../../main_navigation.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Icon(Icons.shield_outlined, size: 64, color: AuditTheme.goldAccent),
              const SizedBox(height: 16),
              const Text('Welcome Back', textAlign: TextAlign.center, style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: AuditTheme.textWhite)),
              const SizedBox(height: 40),
              const TextField(decoration: InputDecoration(labelText: 'Work Email', prefixIcon: Icon(Icons.email_outlined, color: AuditTheme.textMuted))),
              const SizedBox(height: 16),
              const TextField(decoration: InputDecoration(labelText: 'Password', prefixIcon: Icon(Icons.lock_outline, color: AuditTheme.textMuted)), obscureText: true),
              const SizedBox(height: 32),
              ElevatedButton(onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const MainNavigation())), child: const Text('Sign In')),
            ],
          ).animate().fade().slideY(begin: 0.1, end: 0),
        ),
      ),
    );
  }
}
