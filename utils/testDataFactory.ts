export function buildRuntimeUserData(baseName = 'Mahmoud') {
  const ts = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14); // YYYYMMDDHHmmss
  return {
    username: `${baseName}_${ts}`,
    password: `A!${ts}a`,
  } as const;
}