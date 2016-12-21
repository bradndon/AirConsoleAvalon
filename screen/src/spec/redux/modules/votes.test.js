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
})
