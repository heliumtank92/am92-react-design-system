export function hexToRgbA(
    hexCode: string | undefined = '',
    alpha: number = 1
  ): string {
    if (/^#([A-Fa-f0-9]{6})$/.test(hexCode)) {
      const hex: any = hexCode.replace('#', '0x')
      return `rgba(${(hex >> 16) & 255},${(hex >> 8) & 255},${
        hex & 255
      },${alpha})`
    }
    return hexCode
  }