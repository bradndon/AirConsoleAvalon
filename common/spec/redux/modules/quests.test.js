import * as actions from 'redux/modules/quests'
import reducer from 'redux/modules/quests'
import * as types from 'constants/ActionTypes'

describe("Quests", ()=> {
  describe("Action Creators", ()=> {
    it("should create an action to add a vote", () => {
      const questId = 1
      const voteId = 1
      const expectedAction = {
        type: types.QUEST_ADD_VOTE,
        questId,
        voteId
      }
      expect(actions.questAddVote(questId, voteId)).toEqual(expectedAction)
    })
    it("should create an action to set a vote", () => {
      const questId = 1
      const voteId = 1
      const expectedAction = {
        type: types.QUEST_SET_VOTE,
        questId,
        voteId
      }
      expect(actions.questSetVote(questId, voteId)).toEqual(expectedAction)
    })
    it("should create an action to finish a quest", () => {
      const questId = 1
      const hasSucceeded = false
      const expectedAction = {
        type: types.QUEST_FINISH,
        questId,
        hasSucceeded
      }
      expect(actions.questFinish(questId, hasSucceeded)).toEqual(expectedAction)
    })
    it("should create an action to add a success", () => {
      const questId = 1
      const expectedAction = {
        type: types.QUEST_ADD_SUCCESS,
        questId
      }
      expect(actions.questAddSuccess(questId)).toEqual(expectedAction)
    })
    it("should create an action to add a success", () => {
      const questId = 1
      const expectedAction = {
        type: types.QUEST_ADD_FAIL,
        questId
      }
      expect(actions.questAddFail(questId)).toEqual(expectedAction)
    })
  })
  describe("Reducer", ()=> {
    it("should return the inital state", ()=> {
      expect(reducer(undefined, {})).toEqual({})
    })
    it("should start the game with the right number of players", ()=> {
      expect(reducer({},{
        type: types.START_GAME,
        playerCount: 5
      })).toEqual({
        1: {
          playerCount: 2,
          votes: {},
          success: 0,
          fail: 0
        },
        2: {
          playerCount: 2,
          votes: {},
          success: 0,
          fail: 0
        },
        3: {
          playerCount: 3,
          votes: {},
          success: 0,
          fail: 0
        },
        4: {
          playerCount: 2,
          votes: {},
          success: 0,
          fail: 0
        },
        5: {
          playerCount: 3,
          votes: {},
          success: 0,
          fail: 0
        }
      })
    })
    it("should add a vote id to a quest", ()=> {
      expect(reducer({
        1: {
          votes: {}
        }
      }, {
        type: types.QUEST_ADD_VOTE,
        questId: 1,
        voteId: 1
      })).toEqual({
        1: {
          votes: {1: true}
        }
      })
    })
    it("should set a vote to the official vote", () => {
      expect(reducer({
        1: {}
      }, {
        type: types.QUEST_SET_VOTE,
        voteId: 1,
        questId: 1
      })).toEqual({
        1: {
          finalVote: 1,
        }
      })
    })
    it("should finish a successful quest", () => {
      expect(reducer({1: {}},
      {
        type: types.QUEST_FINISH,
        questId: 1,
        hasSucceeded: true
      })).toEqual({
        1: {
          hasSucceeded: true
        }
      })
    })
    it("should finish a failed quest", () => {
      expect(reducer({1: {}},
      {
        type: types.QUEST_FINISH,
        questId: 1,
        hasSucceeded: false
      })).toEqual({
        1: {
          hasSucceeded: false
        }
      })
    })
    it("should add a success to the want pile", ()=> {
      expect(reducer({1: {success: 0}}, {
        type: types.QUEST_ADD_SUCCESS,
        questId: 1
      })).toEqual({1: {success: 1}})
    })
    it("should add a fail to the want pile", ()=> {
      expect(reducer({1: {fail: 0}}, {
        type: types.QUEST_ADD_FAIL,
        questId: 1
      })).toEqual({1: {fail: 1}})
    })
    it("should set the state to the passed in values", ()=> {
      expect(reducer({}, {type: types.SET_STATE, state: {
        quests: {0: 1}}})).toEqual({0: 1})
    })
    it("should set the state to the passed in values without affecting other values", ()=> {
      expect(reducer({
        hasJoined: true
      }, {type: types.SET_STATE, state: {
        quests: {0: 1}}})).toEqual({hasJoined: true, 0: 1})
    })
    it("should set the state overwriting current values", ()=> {
      expect(reducer({
        hasJoined: true
      }, {type: types.SET_STATE, state: {
        quests: {hasJoined: false, 0: 1}}})).toEqual({hasJoined: false, 0: 1})
    })
  })
})
