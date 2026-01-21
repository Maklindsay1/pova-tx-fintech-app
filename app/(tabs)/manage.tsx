import React from 'react';
import { StyleSheet, View, Text, ScrollView, Switch } from 'react-native';
import { Container, Card, Button, Input } from '@/components/ui';
import { colors, spacing, typography } from '@/constants/design';
import { Ionicons } from '@expo/vector-icons';

export default function ManageScreen() {
  const [isPublic, setIsPublic] = React.useState(true);

  return (
    <Container safeArea style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Bot Management</Text>
          <Text style={styles.subtitle}>Create and configure your trading bots</Text>
        </View>

        <Card style={styles.createCard}>
          <View style={styles.createHeader}>
            <Ionicons name="add-circle" size={32} color={colors.primary} />
            <Text style={styles.createTitle}>Create New Bot</Text>
          </View>
          
          <View style={styles.form}>
            <Input label="Bot Name" placeholder="e.g. Trend Follower X" />
            
            <View style={styles.marketGrid}>
              {['Forex', 'Crypto', 'Metals', 'Synthetics'].map((market) => (
                <Button key={market} variant="outline" size="sm" style={styles.marketButton}>
                  {market}
                </Button>
              ))}
            </View>

            <Input label="Strategy Description" placeholder="Describe your bot's logic..." multiline numberOfLines={3} />
            
            <View style={styles.settingsRow}>
              <View>
                <Text style={styles.settingLabel}>Public Bot</Text>
                <Text style={styles.settingDesc}>Allow others to follow and copy</Text>
              </View>
              <Switch 
                value={isPublic} 
                onValueChange={setIsPublic} 
                trackColor={{ false: colors.border, true: colors.primary }}
              />
            </View>

            <Button variant="primary" style={styles.publishButton}>Publish Bot</Button>
          </View>
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Active Bots</Text>
        </View>

        <Card style={styles.botCard}>
          <View style={styles.botRow}>
            <View style={styles.botIcon}>
              <Ionicons name="rocket" size={24} color={colors.primary} />
            </View>
            <View style={styles.botInfo}>
              <Text style={styles.botName}>Scalp Master 2.0</Text>
              <Text style={styles.botMarket}>Forex • EURUSD</Text>
            </View>
            <View style={styles.botStats}>
              <Text style={styles.botProfit}>+12.4%</Text>
              <Text style={styles.botFollowers}>128 Followers</Text>
            </View>
          </View>
          <View style={styles.botActions}>
            <Button variant="ghost" size="sm" leftIcon={<Ionicons name="settings-outline" />}>Settings</Button>
            <Button variant="ghost" size="sm" leftIcon={<Ionicons name="pause-outline" />}>Pause</Button>
          </View>
        </Card>
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
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  createCard: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 24,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },
  createHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  createTitle: {
    ...typography.h3,
    color: colors.text,
  },
  form: {
    gap: spacing.md,
  },
  marketGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  marketButton: {
    flex: 1,
    minWidth: '45%',
    borderRadius: 12,
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  settingLabel: {
    ...typography.bodyBold,
    color: colors.text,
  },
  settingDesc: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  publishButton: {
    marginTop: spacing.sm,
    height: 56,
    borderRadius: 16,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
  },
  botCard: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  botRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  botIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(26, 115, 232, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botInfo: {
    flex: 1,
  },
  botName: {
    ...typography.bodyBold,
    color: colors.text,
  },
  botMarket: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  botStats: {
    alignItems: 'flex-end',
  },
  botProfit: {
    ...typography.bodyBold,
    color: colors.success,
  },
  botFollowers: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  botActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.sm,
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingTop: spacing.sm,
  },
});
