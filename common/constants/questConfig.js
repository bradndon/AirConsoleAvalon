function createQuests(playerCounts) {
  return {
    1: {
      playerCount: playerCounts[0],
      votes: {},
      success: 0,
      fail: 0
    },
    2: {
      playerCount: playerCounts[1],
      votes: {},
      success: 0,
      fail: 0
    },
    3: {
      playerCount: playerCounts[2],
      votes: {},
      success: 0,
      fail: 0
    },
    4: {
      playerCount: playerCounts[3],
      votes: {},
      success: 0,
      fail: 0
    },
    5: {
      playerCount: playerCounts[4],
      votes: {},
      success: 0,
      fail: 0
    }
  }
}

export default {
  5: createQuests([2,2,3,2,3]),
  6: createQuests([2,2,3,2,3]),
  7: createQuests([2,3,4,3,4]),
  8: createQuests([2,2,3,2,3]),
  9: createQuests([2,2,3,2,3]),
  10: createQuests([2,2,3,2,3]),
}
