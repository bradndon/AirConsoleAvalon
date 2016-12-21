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
    it('should vote for a new player', () => {
      expect(
        reducer([
          {
            quest: 0,
            playerLimit: 4,
            players: {}
          }
        ], {
          types: types.VOTE_PLAYER,
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
          types: types.VOTE_PLAYER,
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
          types: types.VOTE_PLAYER,
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
})
