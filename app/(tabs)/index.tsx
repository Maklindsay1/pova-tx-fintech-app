import React from 'react';
import { StyleSheet, View, Text, ScrollView, RefreshControl } from 'react-native';
import { Container, Card, Button } from '@/components/ui';
import { colors, spacing, typography, shadows } from '@/constants/design';
import { Ionicons } from '@expo/vector-icons';

import { useTradingSimulation } from '@/hooks/useTradingSimulation';

export default function DashboardScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const { totalEquity } = useTradingSimulation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <Container safeArea style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
        }
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.brandText}>POVA TX</Text>
          </View>
          <Button variant="ghost" size="sm" leftIcon={<Ionicons name="notifications-outline" size={24} color={colors.text} />} onPress={() => {}} />
        </View>

        <Card variant="elevated" style={styles.mainBalanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Total Equity</Text>
            <View style={styles.profitBadge}>
              <Text style={styles.profitText}>+12.5%</Text>
            </View>
          </View>
          <Text style={styles.balanceAmount}>${totalEquity.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
          <View style={styles.balanceFooter}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Win Rate</Text>
              <Text style={styles.statValue}>68%</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Drawdown</Text>
              <Text style={styles.statValue}>4.2%</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Active Bots</Text>
              <Text style={styles.statValue}>3</Text>
            </View>
          </View>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Performance</Text>
          <Button variant="ghost" size="sm" onPress={() => {}}>View All</Button>
        </View>

        {/* Simulated Chart Placeholder */}
        <Card style={styles.chartPlaceholder}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Equity Curve</Text>
            <Text style={styles.chartPeriod}>Last 30 Days</Text>
          </View>
          <View style={styles.chartViz}>
             {/* We will add a real chart component later if available, otherwise a beautiful mockup */}
             <View style={styles.mockupChart}>
                {[1,2,3,4,5,6,7,8,9,10].map((_, i) => (
                  <View key={i} style={[styles.chartBar, { height: 20 + Math.random() * 80, backgroundColor: i > 5 ? colors.success : colors.primary }]} />
                ))}
             </View>
          </View>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Masters</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          {[1, 2, 3].map((item) => (
            <Card key={item} style={styles.masterCard}>
              <View style={styles.masterHeader}>
                <View style={styles.masterAvatar} />
                <View>
                  <Text style={styles.masterName}>Master {item}</Text>
                  <Text style={styles.masterMarket}>Forex • Crypto</Text>
                </View>
              </View>
              <Text style={styles.masterProfit}>+45.2%</Text>
              <Button variant="primary" size="sm" style={styles.followButton}>Follow</Button>
            </Card>
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  welcomeText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  brandText: {
    ...typography.h2,
    color: colors.text,
  },
  mainBalanceCard: {
    backgroundColor: colors.backgroundSecondary,
    padding: spacing.lg,
    borderRadius: 24,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  balanceLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  profitBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: spacing.xs,
  },
  profitText: {
    ...typography.tiny,
    color: colors.success,
    fontWeight: '700',
  },
  balanceAmount: {
    ...typography.display,
    fontSize: 36,
    color: colors.text,
    marginBottom: spacing.md,
  },
  balanceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  statItem: {
    alignItems: 'flex-start',
  },
  statLabel: {
    ...typography.tiny,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  statValue: {
    ...typography.bodyBold,
    color: colors.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
  },
  chartPlaceholder: {
    backgroundColor: colors.backgroundSecondary,
    height: 200,
    borderRadius: 20,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  chartTitle: {
    ...typography.captionBold,
    color: colors.text,
  },
  chartPeriod: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  chartViz: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mockupChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 100,
  },
  chartBar: {
    width: '8%',
    borderRadius: 4,
  },
  horizontalScroll: {
    paddingRight: spacing.md,
  },
  masterCard: {
    width: 200,
    backgroundColor: colors.backgroundSecondary,
    marginRight: spacing.md,
    padding: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  masterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  masterAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.border,
    marginRight: spacing.sm,
  },
  masterName: {
    ...typography.captionBold,
    color: colors.text,
  },
  masterMarket: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  masterProfit: {
    ...typography.h3,
    color: colors.success,
    marginBottom: spacing.sm,
  },
  followButton: {
    borderRadius: 12,
  },
});
