export function getAdapter<T>(
  type: AdapterType | string = AdapterTypes.ELEMENT,
  adapterMap: Record<AdapterType | string, T>
): T {
  return adapterMap[type] || adapterMap[AdapterTypes.ELEMENT];
}

export const AdapterTypes = {
  DEFAULT: 'element',
  ELEMENT: 'element',
  ANTDV: 'antdv',
} as const;

export type AdapterType = typeof AdapterTypes[keyof typeof AdapterTypes];
