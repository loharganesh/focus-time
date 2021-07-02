import { StyleSheet } from 'react-native';
import { spacing,textSize,borders,borderRadius } from '../../styles/sizes';

const focusStyles = StyleSheet.create({
  container: {
    width: '100%',
    padding: spacing.md,
  },
  title: {
    width:'75%',
    fontSize: textSize.lg,
  },
  input: {
    borderWidth: borders.thin,
    borderRadius: borderRadius.smooth,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    paddingRight: spacing.md,
    paddingLeft: spacing.md,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
});

export default focusStyles;
