import { healthCheck } from '../js/health';

test.each([
  [{name: 'Маг', health: 100}, 'healthy'],
  [{name: 'Маг', health: 51}, 'healthy'],
  [{name: 'Маг', health: 50}, 'wounded'],
  [{name: 'Маг', health: 30}, 'wounded'],
  [{name: 'Маг', health: 16}, 'wounded'],
  [{name: 'Маг', health: 15}, 'wounded'],
  [{name: 'Маг', health: 10}, 'critical'],
  [{name: 'Маг', health: 1}, 'critical'],
  [{name: 'Маг', health: 0}, 'dead'],
  [{name: 'Маг', health: -1}, 'dead']
])('testing level %h health', (levelHealth, expected) => {
  const result = healthCheck(levelHealth);
  expect(result).toBe(expected)
})