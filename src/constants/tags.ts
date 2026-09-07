export const TAGS = ["Serif","Sans-Serif","Script","Display","Monospace","Hand-Painted","Other"] as const
export type Tag = typeof TAGS[number]
