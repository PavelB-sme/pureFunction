export function healthCheck (playerHealth) {
  if (playerHealth.health > 50) {
    return 'healthy';
  }
  if (playerHealth.health  >= 15 && playerHealth.health  <=50) {
    return 'wounded';
  }
  if (playerHealth.health  > 0 && playerHealth.health  < 15) {
    return 'critical';
  }
  return 'dead'
  
}