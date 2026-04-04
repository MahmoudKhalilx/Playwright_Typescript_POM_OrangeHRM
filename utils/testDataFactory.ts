export function buildRuntimeUserData(baseName = 'Mahmoud') {
  const timeStamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14); // YYYYMMDDHHmmss
  return {
    username: `${baseName}_${timeStamp}`,
    password: `A!${timeStamp}a`,
  } as const;
}