import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../theme.dart';

class FlagDetailScreen extends StatelessWidget {
  final String vendor, amount, reason;
  final bool isCritical;

  const FlagDetailScreen({super.key, required this.vendor, required this.amount, required this.isCritical, required this.reason});

  @override
  Widget build(BuildContext context) {
    final color = isCritical ? AuditTheme.alertRed : AuditTheme.watchAmber;
    return Scaffold(
      appBar: AppBar(title: const Text('Anomaly Details')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(vendor, style: Theme.of(context).textTheme.headlineSmall),
          const SizedBox(height: 24),
          Text(amount, style: Theme.of(context).textTheme.displaySmall?.copyWith(color: color, fontWeight: FontWeight.bold)),
          const SizedBox(height: 24),
          Text(reason, style: const TextStyle(color: AuditTheme.textMuted, height: 1.5)),
          const SizedBox(height: 32),
          SizedBox(
            height: 200,
            child: BarChart(BarChartData(maxY: 60, barGroups: [BarChartGroupData(x: 0, barRods: [BarChartRodData(toY: 45, color: color)])])),
          ).animate().scale(delay: 200.ms, duration: 500.ms),
        ]),
      ),
    );
  }
}
