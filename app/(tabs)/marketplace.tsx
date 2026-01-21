import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, TextInput } from 'react-native';
import { Container, Card, Button, Input } from '@/components/ui';
import { colors, spacing, typography } from '@/constants/design';
import { Ionicons } from '@expo/vector-icons';

const MARKETS = ['All', 'Forex', 'Crypto', 'Metals', 'Synthetics'];

export default function MarketplaceScreen() {
  const [selectedMarket, setSelectedMarket] = React.useState('All');

  const BOTS = [
    { id: '1', name: 'Alpha FX', market: 'Forex', profit: '+124%', winRate: '72%', drawdown: '5.2%', followers: 1240 },
    { id: '2', name: 'Crypto Pulse', market: 'Crypto', profit: '+450%', winRate: '64%', drawdown: '12.4%', followers: 850 },
    { id: '3', name: 'Gold Rush', market: 'Metals', profit: '+88%', winRate: '81%', drawdown: '3.1%', followers: 2100 },
    { id: '4', name: 'Synth Master', market: 'Synthetics', profit: '+210%', winRate: '69%', drawdown: '8.5%', followers: 560 },
  ];

  return (
    <Container safeArea style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marketplace</Text>
        <Text style={styles.subtitle}>Discover top performing trading bots</Text>
      </View>

      <View style={styles.searchContainer}>
        <Input 
          placeholder="Search bots, masters..." 
          leftIcon={<Ionicons name="search" size={20} color={colors.textSecondary} />}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {MARKETS.map((market) => (
            <Button
              key={market}
              variant={selectedMarket === market ? 'primary' : 'ghost'}
              size="sm"
              onPress={() => setSelectedMarket(market)}
              style={[styles.filterButton, selectedMarket !== market && styles.inactiveFilter]}
            >
              {market}
            </Button>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={BOTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Card style={styles.botCard}>
            <View style={styles.botHeader}>
              <View style={styles.botInfo}>
                <Text style={styles.botName}>{item.name}</Text>
                <View style={styles.marketBadge}>
                  <Text style={styles.marketText}>{item.market}</Text>
                </View>
              </View>
              <Text style={styles.botProfit}>{item.profit}</Text>
            </View>
            
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Win Rate</Text>
                <Text style={styles.statValue}>{item.winRate}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Drawdown</Text>
                <Text style={styles.statValue}>{item.drawdown}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Followers</Text>
                <Text style={styles.statValue}>{item.followers}</Text>
              </View>
            </View>

            <View style={styles.cardActions}>
              <Button variant="outline" size="sm" style={styles.actionButton}>Details</Button>
              <Button variant="primary" size="sm" style={[styles.actionButton, styles.followButton]}>Copy Bot</Button>
            </View>
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
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  searchInput: {
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
  },
  filterContainer: {
    paddingLeft: spacing.md,
    marginBottom: spacing.md,
  },
  filterButton: {
    marginRight: spacing.sm,
    borderRadius: 12,
  },
  inactiveFilter: {
    backgroundColor: colors.backgroundSecondary,
  },
  listContent: {
    padding: spacing.md,
  },
  botCard: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  botHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  botInfo: {
    flex: 1,
  },
  botName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: 4,
  },
  marketBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(26, 115, 232, 0.1)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 6,
  },
  marketText: {
    ...typography.tiny,
    color: colors.primary,
    fontWeight: '600',
  },
  botProfit: {
    ...typography.h3,
    color: colors.success,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    ...typography.tiny,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  statValue: {
    ...typography.captionBold,
    color: colors.text,
  },
  cardActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionButton: {
    flex: 1,
    borderRadius: 12,
  },
  followButton: {
    backgroundColor: colors.primary,
  },
});
