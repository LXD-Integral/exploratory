/**
 * Engine identity. The ONLY place the engine's name is written as a literal.
 *
 * Decided 2026-11-07: "Exploratory". Packs are titled by prefix, e.g.
 * "Exploratory: AI Stance". To rename the engine, change `name` and `short`
 * here and redeploy; nothing else should hardcode them.
 */
export const ENGINE = {
  name: 'Exploratory',
  short: 'EXP',
  tagline: 'Two-axis concept exploration',
  owner: 'LXD Integral Learning Ltd.',
  contact: 'dan@lxdintegral.com',
  repo: 'https://github.com/LXD-Integral/exploratory',
} as const

/** "Exploratory: AI Stance" */
export function packTitle(packName: string): string {
  return `${ENGINE.name}: ${packName}`
}
