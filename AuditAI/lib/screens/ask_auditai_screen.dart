import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../theme.dart';

class AskAuditAiScreen extends StatelessWidget {
  const AskAuditAiScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Ask AuditAI')),
      body: Column(
        children: [
          Expanded(child: ListView(padding: const EdgeInsets.all(16), children: [const Text('Hello Alex. I am AuditAI.', style: TextStyle(color: AuditTheme.textWhite))])),
          Container(
            padding: const EdgeInsets.all(16),
            child: const TextField(decoration: InputDecoration(hintText: 'Ask about anomalies...', contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 12))),
          ),
        ],
      ),
    );
  }
}
