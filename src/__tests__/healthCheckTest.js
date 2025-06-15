import { healthCheck } from '../js/health';

test.each([
  [{name: 'Маг', health: 90}, 'healthy'],
  [{name: 'Маг', health: 40}, 'wounded'],
  [{name: 'Маг', health: 10}, 'critical']
])('testing level %h health', (levelHealth, expected) => {
  const result = healthCheck(levelHealth);
  expect(result).toBe(expected)
})