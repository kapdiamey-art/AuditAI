import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../theme.dart';
import 'flag_detail_screen.dart';
import 'receipt_scanner_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('LiveAudit Feed')),
      body: ListView.builder(
        padding: const EdgeInsets.all(20),
        itemCount: 10,
        itemBuilder: (context, index) {
          final isCritical = index % 3 == 0;
          return _AnomalyCard(
            vendor: isCritical ? 'Acme Corp' : 'Supplies Inc',
            department: 'Marketing',
            timeAgo: '${index + 1}m ago',
            amount: isCritical ? '\$45,200.00' : '\$1,500.00',
            reason: isCritical ? 'Amount 300% above historical average for vendor' : 'Split transaction detected',
            isCritical: isCritical,
          ).animate().fade(delay: (100 * index).ms).slideX(begin: 0.1, end: 0);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const ReceiptScannerScreen())),
        backgroundColor: AuditTheme.goldAccent,
        child: const Icon(Icons.document_scanner, color: AuditTheme.primaryNavy),
      ),
    );
  }
}

class _AnomalyCard extends StatelessWidget {
  final String vendor, department, timeAgo, amount, reason;
  final bool isCritical;

  const _AnomalyCard({required this.vendor, required this.department, required this.timeAgo, required this.amount, required this.reason, required this.isCritical});

  @override
  Widget build(BuildContext context) {
    final borderColor = isCritical ? AuditTheme.alertRed : AuditTheme.watchAmber;
    return GestureDetector(
      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => FlagDetailScreen(vendor: vendor, amount: amount, isCritical: isCritical, reason: reason))),
      child: Container(
        margin: const EdgeInsets.only(bottom: 12),
        decoration: BoxDecoration(color: AuditTheme.surfaceDark, borderRadius: BorderRadius.circular(12), border: Border(left: BorderSide(color: borderColor, width: 4))),
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(vendor, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)), Text(amount, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: borderColor))]),
          Text(reason, style: const TextStyle(color: AuditTheme.textWhite, fontSize: 14)),
        ]),
      ),
    );
  }
}
