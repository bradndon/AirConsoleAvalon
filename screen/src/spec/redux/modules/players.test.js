import * as actions from 'redux/modules/players'
import reducer from 'redux/modules/players'
import * as types from 'constants/ActionTypes'

describe('Players', ()=> {
  describe('Actions', ()=> {
    it('should create an action to add a player', () => {
      const name = "Tester"
      const deviceId = 0
      const expectedAction = {
        type: types.ADD_PLAYER,
        name,
        deviceId,
      }
      expect(actions.addPlayer(name,deviceId)).toEqual(expectedAction)
    })
    it('should create an action to add a role to a player', () => {
      const role = "Good Guy"
      const deviceId = 1
      const expectedAction = {
        type: types.ADD_ROLE,
        role,
        deviceId
      }
      expect(actions.addRole(role, deviceId)).toEqual(expectedAction)
    })
  })
  describe('Reducer', () => {
    it('should return the initial state', ()=> {
      expect(reducer(undefined, {})).toEqual({})
    })
    it('should add a first player', ()=> {
      expect(reducer({}, {
        type: types.ADD_PLAYER,
        name: "Brandon",
        deviceId: 0,
      })).toEqual({
        0: {
          role: '',
          name: "Brandon",
          deviceId: 0,

        }
      })
    })
    it('should add another player', ()=> {
      expect(reducer({
        0: {
          role: '',
          name: "Brandon",
          deviceId: 0,

        }
      }, {
        type: types.ADD_PLAYER,
        name: "Isaac",
        deviceId: 1,
      })).toEqual({
        0: {
          role: '',
          name: "Brandon",
          deviceId: 0,

        },
        1: {
          role: '',
          name: "Isaac",
          deviceId: 1,

        }
      })
    })
    it('should add a role to a player', ()=> {
      expect(
        reducer({
          0: {
            role: '',
            name: "Brandon",
            deviceId: 0,

          }
        },
        {
          type: types.ADD_ROLE,
          role: "Good Guy",
          deviceId: 0,
        })
      ).toEqual(
        {
          0: {
            role: 'Good Guy',
            name: "Brandon",
            deviceId: 0,
          }
        }
      )
    })
  })
  describe('Selectors', () => {
    describe('getPlayerNames', () => {
      it('should return an empty array if there are no players', () => {
        expect(actions.getPlayerNames({players: {}})).toEqual([])
      })
      it('should return an array with the proper player names', () => {
        expect(actions.getPlayerNames({
          players:{
            0: {
              name: "Brandon"
            },
            1: {
              name: "Isaac"
            },
            2: {
              name: "Jacob"
            }
          }
        })).toEqual(["Brandon", "Isaac", "Jacob"])
      })
    })
  })
})
