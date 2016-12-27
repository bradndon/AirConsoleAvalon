import * as actions from 'redux/modules/game'
import reducer from 'redux/modules/game'
import * as types from 'constants/ActionTypes'

describe("Game", ()=> {
  describe("Reducer", ()=> {
    it("should return the initial game state", ()=> {
      expect(reducer(undefined, {}))
        .toEqual({
          currentQuest: 1
        })
    })
    it("should increase the quest by 1 on quest finish", ()=> {
      expect(reducer({currentQuest: 1}, {type:types.QUEST_FINISH}))
        .toEqual({currentQuest: 2})
    })
  })
})
