import daisyuiColors from 'daisyui/src/colors/themes'

export function uiColors(activeTheme) {
  return {
    themeName: activeTheme,
    accent: daisyuiColors['[data-theme=' + activeTheme + ']'].accent,
    base100: daisyuiColors['[data-theme=' + activeTheme + ']']["base-100"],
    base200: daisyuiColors['[data-theme=' + activeTheme + ']']["base-200"],
    base300: daisyuiColors['[data-theme=' + activeTheme + ']']["base-300"],
    baseContent: daisyuiColors['[data-theme=' + activeTheme + ']']["base-content"],
    neutral: daisyuiColors['[data-theme=' + activeTheme + ']'].neutral,
    primary: daisyuiColors['[data-theme=' + activeTheme + ']'].primary,
    secondary: daisyuiColors['[data-theme=' + activeTheme + ']'].secondary,
    success: daisyuiColors['[data-theme=' + activeTheme + ']'].success,
    error: daisyuiColors['[data-theme=' + activeTheme + ']'].error,
    info: daisyuiColors['[data-theme=' + activeTheme + ']'].info,
    warning: daisyuiColors['[data-theme=' + activeTheme + ']'].warning,
  }
}
