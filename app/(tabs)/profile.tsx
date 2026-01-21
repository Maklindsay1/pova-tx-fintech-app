import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Card, Button, Avatar } from '@/components/ui';
import { colors, spacing, typography } from '@/constants/design';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [role, setRole] = React.useState('Follower');

  const MENU_ITEMS = [
    { icon: 'wallet-outline', label: 'Billing & Subscriptions', color: colors.text },
    { icon: 'shield-checkmark-outline', label: 'Security & Brokers', color: colors.text },
    { icon: 'color-palette-outline', label: 'Theme Customization', color: colors.text },
    { icon: 'help-circle-outline', label: 'Help & Support', color: colors.text },
    { icon: 'log-out-outline', label: 'Sign Out', color: colors.error },
  ];

  return (
    <Container safeArea style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Avatar 
            size="xl" 
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200' }} 
            style={styles.avatar}
          />
          <Text style={styles.username}>Alex Trader</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>{role}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>12</Text>
            <Text style={styles.profileStatLabel}>Following</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>$24.5k</Text>
            <Text style={styles.profileStatLabel}>Net Profit</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.profileStat}>
            <Text style={styles.profileStatValue}>8</Text>
            <Text style={styles.profileStatLabel}>Active Bots</Text>
          </View>
        </View>

        <Card style={styles.roleCard}>
          <View style={styles.roleInfo}>
            <Text style={styles.roleTitle}>Switch to Master Mode</Text>
            <Text style={styles.roleDesc}>Create bots and earn from followers</Text>
          </View>
          <Button 
            variant="primary" 
            size="sm" 
            onPress={() => setRole(role === 'Master' ? 'Follower' : 'Master')}
          >
            Switch
          </Button>
        </Card>

        <View style={styles.menuContainer}>
          {MENU_ITEMS.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon as any} size={22} color={item.color} />
                <Text style={[styles.menuLabel, { color: item.color }]}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.versionText}>POVA TX v1.0.0</Text>
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
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  avatar: {
    marginBottom: spacing.md,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  username: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  roleBadge: {
    backgroundColor: colors.backgroundSecondary,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  roleText: {
    ...typography.captionBold,
    color: colors.primary,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  profileStat: {
    flex: 1,
    alignItems: 'center',
  },
  profileStatValue: {
    ...typography.h3,
    color: colors.text,
  },
  profileStatLabel: {
    ...typography.tiny,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.border,
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(26, 115, 232, 0.1)',
    borderRadius: 20,
    padding: spacing.md,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(26, 115, 232, 0.2)',
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    ...typography.bodyBold,
    color: colors.text,
  },
  roleDesc: {
    ...typography.tiny,
    color: colors.textSecondary,
  },
  menuContainer: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 20,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  menuLabel: {
    ...typography.body,
  },
  versionText: {
    ...typography.tiny,
    color: colors.textTertiary,
    textAlign: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
});
