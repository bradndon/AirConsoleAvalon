import * as actions from 'redux/modules/game'
import reducer from 'redux/modules/game'
import * as types from 'constants/ActionTypes'

describe("Game", ()=> {
  describe("Action Creators", () => {
    it("should create an action to go to the next quest", ()=> {
      expect(actions.nextQuest()).toEqual({type:types.NEXT_QUEST})
    })
  })
  describe("Reducer", ()=> {
    it("should return the initial game state", ()=> {
      expect(reducer(undefined, {}))
        .toEqual({
          currentQuest: 1
        })
    })
    it("should increase the quest by 1", ()=> {
      expect(reducer({currentQuest: 1}, {type:types.NEXT_QUEST}))
        .toEqual({currentQuest: 2})
    })
  })
})
