import * as actions from 'redux/modules/quests'
import reducer from 'redux/modules/quests'
import * as types from 'constants/ActionTypes'

describe("Quests", ()=> {
  describe("Reducer", ()=> {
    it("should return the inital state", ()=> {
      expect(reducer(undefined, {})).toEqual({
        1: {
          votes: {}
        },
        2: {
          votes: {}
        },
        3: {
          votes: {}
        },
        4: {
          votes: {}
        },
        5: {
          votes: {}
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
    it("should set a successful quest", () => {
      expect(reducer({1: {}},
      {
        type: types.QUEST_SUCCESS,
        questId: 1
      })).toEqual({
        1: {
          hasSucceeded: true
        }
      })
    })
    it("should set a failure quest", () => {
      expect(reducer({1: {}},
      {
        type: types.QUEST_FAILURE,
        questId: 1
      })).toEqual({
        1: {
          hasSucceeded: false
        }
      })
    })

  })
})
