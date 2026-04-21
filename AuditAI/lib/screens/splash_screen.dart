import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../theme.dart';
import 'auth/login_screen.dart';
import 'auth/register_screen.dart';

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Spacer(),
              const Icon(Icons.shield_outlined, size: 100, color: AuditTheme.goldAccent)
              .animate(onPlay: (c) => c.repeat(reverse: true))
              .shimmer(duration: 2.seconds, color: AuditTheme.goldLight),
              
              const SizedBox(height: 24),
              Text('AUDITAI', textAlign: TextAlign.center, style: Theme.of(context).textTheme.displayLarge?.copyWith(letterSpacing: 4, fontSize: 40))
              .animate().fade(duration: 800.ms).slideY(begin: 0.5, end: 0),
              
              const SizedBox(height: 12),
              Text('Financial anomaly intelligence', textAlign: TextAlign.center, style: Theme.of(context).textTheme.bodyLarge?.copyWith(color: AuditTheme.goldAccent, letterSpacing: 1.5))
              .animate().fade(delay: 400.ms),
              
              const Spacer(),
              ElevatedButton(onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const LoginScreen())), child: const Text('Sign In')),
              const SizedBox(height: 16),
              OutlinedButton(onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const RegisterScreen())), child: const Text('Create Account'), style: OutlinedButton.styleFrom(side: const BorderSide(color: AuditTheme.surfaceLighter))),
              const SizedBox(height: 32),
            ],
          ),
        ),
      ),
    );
  }
}
