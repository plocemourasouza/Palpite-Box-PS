export const fromBase64 = value => {
  const buffer = Buffer.from(value, 'base64')
  return buffer.toString('ascii')
}
