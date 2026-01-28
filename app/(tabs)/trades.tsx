import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Container, Card, Button } from '@/components/ui';
import { colors, spacing, typography } from '@/constants/design';
import { Ionicons } from '@expo/vector-icons';
import { useTradingSimulation } from '@/hooks/useTradingSimulation';

export default function TradesScreen() {
  const [activeTab, setActiveTab] = React.useState('Active');
  const { activeTrades } = useTradingSimulation();

  const HISTORY = [
    { id: '4', symbol: 'US30', type: 'SELL', lot: '0.50', entry: '37500', exit: '37420', pl: '+$40.00', status: 'History', bot: 'Synth Master' },
  ];

  const displayTrades = activeTab === 'Active' ? (activeTrades || []).map(t => ({
    ...t,
    lot: '0.10',
    entry: '1.0854',
    current: '1.0892',
    pl: ((t?.pl || 0) >= 0 ? '+' : '') + '$' + Math.abs(t?.pl || 0).toFixed(2),
    status: 'Active',
    bot: t?.symbol === 'EURUSD' ? 'Alpha FX' : t?.symbol === 'BTCUSD' ? 'Crypto Pulse' : 'Gold Rush'
  })) : HISTORY;

  return (
    <Container safeArea style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Live Trades</Text>
        <View style={styles.tabContainer}>
          <Button 
            variant={activeTab === 'Active' ? 'primary' : 'ghost'} 
            size="sm" 
            onPress={() => setActiveTab('Active')}
            style={styles.tabButton}
          >
            Active
          </Button>
          <Button 
            variant={activeTab === 'History' ? 'primary' : 'ghost'} 
            size="sm" 
            onPress={() => setActiveTab('History')}
            style={styles.tabButton}
          >
            History
          </Button>
        </View>
      </View>

      <FlatList
        data={displayTrades}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="swap-horizontal-outline" size={64} color={colors.border} />
            <Text style={styles.emptyText}>No trades found</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card style={styles.tradeCard}>
            <View style={styles.tradeHeader}>
              <View>
                <View style={styles.symbolRow}>
                  <Text style={styles.symbolText}>{item.symbol}</Text>
                  <View style={[styles.typeBadge, { backgroundColor: item.type === 'BUY' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }]}>
                    <Text style={[styles.typeText, { color: item.type === 'BUY' ? colors.success : colors.error }]}>{item.type}</Text>
                  </View>
                </View>
                <Text style={styles.botText}>via {item.bot}</Text>
              </View>
              <Text style={[styles.plText, { color: item.pl?.startsWith('+') ? colors.success : colors.error }]}>{item.pl}</Text>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Size</Text>
                <Text style={styles.detailValue}>{item.lot}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Entry</Text>
                <Text style={styles.detailValue}>{item.entry}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>{item.status === 'Active' ? 'Current' : 'Exit'}</Text>
                <Text style={styles.detailValue}>{item.status === 'Active' ? item.current : item.exit}</Text>
              </View>
            </View>
            
            {item.status === 'Active' && (
              <Button variant="outline" size="sm" style={styles.closeButton} leftIcon={<Ionicons name="close-circle-outline" size={18} />}>
                Close Position
              </Button>
            )}
          </Card>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.md,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.md,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 12,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    borderRadius: 8,
  },
  listContent: {
    padding: spacing.md,
  },
  tradeCard: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tradeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  symbolRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  symbolText: {
    ...typography.h4,
    color: colors.text,
  },
  typeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typeText: {
    ...typography.tiny,
    fontWeight: '700',
  },
  botText: {
    ...typography.tiny,
    color: colors.textSecondary,
    marginTop: 2,
  },
  plText: {
    ...typography.h3,
    fontWeight: '700',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    ...typography.tiny,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  detailValue: {
    ...typography.captionBold,
    color: colors.text,
  },
  closeButton: {
    marginTop: spacing.sm,
    borderColor: colors.error,
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
