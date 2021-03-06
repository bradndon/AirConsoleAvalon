import * as actions from 'redux/modules/game'
import reducer from 'redux/modules/game'
import * as types from 'constants/ActionTypes'

describe("Game", ()=> {
  describe("Action Creators", ()=> {
    it("should create an action to set the state", ()=> {
      const state = {players: {}}
      const expectedAction = {
        type: types.SET_STATE,
        state,
      }
      expect(actions.setState(state)).toEqual(expectedAction)
    })
    it("should create an action to start the game", ()=> {
      const deviceId = 1
      const playerCount = 5
      const expectedAction = {
        type: types.START_GAME,
        deviceId,
        playerCount,
        route: '/role',
      }
      expect(actions.startGame(deviceId, playerCount)).toEqual(expectedAction)
    })
  })
  describe("Reducer", ()=> {
    it("should return the initial game state", ()=> {
      expect(reducer(undefined, {}))
        .toEqual({
          currentQuest: 1,
        })
    })
    it("should increase the quest by 1 on quest finish", ()=> {
      expect(reducer({currentQuest: 1}, {type:types.QUEST_FINISH}))
        .toEqual({currentQuest: 2})
    })
    it("should set the state to the passed in values", ()=> {
      expect(reducer({}, {type: types.SET_STATE, state: {
        game: {0: 1}}})).toEqual({0: 1})
    })
    it("should set the state to the passed in values without affecting other values", ()=> {
      expect(reducer({
        hasJoined: true,
      }, {type: types.SET_STATE, state: {
        game: {0: 1}}})).toEqual({hasJoined: true, 0: 1})
    })
    it("should set the state overwriting current values", ()=> {
      expect(reducer({
        hasJoined: true,
      }, {type: types.SET_STATE, state: {
        game: {hasJoined: false, 0: 1}}})).toEqual({hasJoined: false, 0: 1})
    })
  })
})
