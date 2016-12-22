import * as actions from 'redux/modules/votes'
import reducer from 'redux/modules/votes'
import * as types from 'constants/ActionTypes'

describe("Voting", () => {
  describe("Actions", () => {
    it('should create an action to make a new vote', () => {
      const quest = 0
      const playerLimit = 4
      const expectedAction = {
        type: types.ADD_VOTE,
        quest,
        playerLimit
      }
      expect(actions.addVote(quest, playerLimit)).toEqual(expectedAction)
    })
    it('should create an action to vote for a player', () => {
      const deviceId = 0
      const expectedAction = {
        type: types.VOTE_PLAYER,
        deviceId
      }
      expect(actions.votePlayer(deviceId)).toEqual(expectedAction)
    })
  })

  describe("Reducer", () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([])
    })
    it('should add a new vote', () => {
      expect(
        reducer([], {
          type: types.ADD_VOTE,
          quest: 0,
          playerLimit: 4,
        })
      ).toEqual([
        {
          quest: 0,
          playerLimit: 4,
          players: {}
        }
      ])
    })
    it('should add a second vote', () => {
      expect(
        reducer([
          {
            quest: 0,
            playerLimit: 4,
            players: {}
          }
        ], {
          type: types.ADD_VOTE,
          quest: 1,
          playerLimit: 5,
        })
      ).toEqual([
        {
          quest: 0,
          playerLimit: 4,
          players: {}
        }, {
          quest: 1,
          playerLimit: 5,
          players: {}
        }
      ])
    })
    it('should vote for a new player', () => {
      expect(
        reducer([
          {
            quest: 0,
            playerLimit: 4,
            players: {}
          }
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0
        })
      ).toEqual([
        {
          quest: 0,
          playerLimit: 4,
          players: {
            0: true
          }
        }
      ])
    })
    it('should vote for a player that has been chosen before', () => {
      expect(
        reducer([
          {
            quest: 0,
            playerLimit: 4,
            players: {
              0: false,
            }
          }
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0
        })
      ).toEqual([
        {
          quest: 0,
          playerLimit: 4,
          players: {
            0: true
          }
        }
      ])
    })
    it('should unvote for a player', () => {
      expect(
        reducer([
          {
            quest: 0,
            playerLimit: 4,
            players: {
              0: true,
            }
          }
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0
        })
      ).toEqual([
        {
          quest: 0,
          playerLimit: 4,
          players: {
            0: false
          }
        }
      ])
    })
  })
  describe('Selectors', () => {
    describe('getPlayerCount', () => {
      it('should return 0 if no players selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
              }
            }
          ]
        })).toEqual(0)
      })
      it('should return 0 if no players are true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
                0: false,
                1: false,
              }
            }
          ]
        })).toEqual(0)
      })
      it('should return 1 if one player is true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
                1: true,
              }
            }
          ]
        })).toEqual(1)
      })
      it('should return 3 if three players are true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
                1: true,
                2: true,
                3: true,
                5: false
              }
            }
          ]
        })).toEqual(3)
      })
    })
    describe('atLimit', () => {
      it('should return false if below limit', () => {
        expect(actions.atLimit({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
                1: true,
                2: true,
                3: true,
                5: false
              }
            }
          ]
        })).toEqual(false)
      })
      it('should return true if at limit', () => {
        expect(actions.atLimit({
          votes:[
            {
              quest: 0,
              playerLimit: 4,
              players: {
                1: true,
                2: true,
                3: true,
                5: true
              }
            }
          ]
        })).toEqual(true)
      })
    })
  })
})
