import * as actions from 'redux/modules/votes'
import reducer from 'redux/modules/votes'
import * as types from 'constants/ActionTypes'

describe("Voting", () => {
  describe("Actions", () => {
    it('should create an action to make a new vote', () => {
      const quest = 0
      const leader = 1
      const expectedAction = {
        type: types.ADD_VOTE,
        quest,
        leader,
      }
      expect(actions.addVote(quest, leader)).toEqual(expectedAction)
    })
    it('should create an action to vote for a player', () => {
      const deviceId = 0
      const expectedAction = {
        type: types.VOTE_PLAYER,
        deviceId,
      }
      expect(actions.votePlayer(deviceId)).toEqual(expectedAction)
    })
    it('should create an action to set the vote for a player', ()=> {
      const deviceId = 1
      const isApproving = true
      const expectedAction = {
        type: types.VOTE_SET_VOTE,
        deviceId,
        isApproving,
      }
      expect(actions.setVote(deviceId, isApproving)).toEqual(expectedAction)
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
          leader: 1,
        })
      ).toEqual([
        {
          quest: 0,
          players: {},
          leader: 1,
          votes: {},
        },
      ])
    })
    it('should add a second vote', () => {
      expect(
        reducer([
          {
            quest: 0,
            players: {},
          },
        ], {
          type: types.ADD_VOTE,
          quest: 1,
          leader: 2,
        })
      ).toEqual([
        {
          quest: 0,
          players: {},
        }, {
          quest: 1,
          players: {},
          leader: 2,
          votes: {},
        },
      ])
    })
    it('should start the game', () => {
      expect(
        reducer([], {
          type: types.START_GAME,
          deviceId: 1,
        })
      ).toEqual([
        {
          quest: 1,
          players: {},
          leader: 1,
          votes: {},
        },
      ])
    })
    it('should vote for a new player', () => {
      expect(
        reducer([
          {
            quest: 0,
            players: {
              1:true,
            },
          },
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0,
        })
      ).toEqual([
        {
          quest: 0,
          players: {
            0: true,
            1:true,
          },
        },
      ])
    })
    it('should vote for a player that has been chosen before', () => {
      expect(
        reducer([
          {
            quest: 0,
            players: {
              0: false,
            },
          },
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0,
        })
      ).toEqual([
        {
          quest: 0,
          players: {
            0: true,
          },
        },
      ])
    })
    it('should unvote for a player', () => {
      expect(
        reducer([
          {
            quest: 0,
            players: {
              0: true,
            },
          },
        ], {
          type: types.VOTE_PLAYER,
          deviceId: 0,
        })
      ).toEqual([
        {
          quest: 0,
          players: {
            0: false,
          },
        },
      ])
    })
    it("should set the vote for a given player", ()=>{
      expect(
        reducer([
          {
            quest: 0,
            votes: {},
          },
        ], {
          type: types.VOTE_SET_VOTE,
          deviceId: 0,
          isApproving: false,
        })
      ).toEqual([
        {
          quest: 0,
          votes: {
            0: false,
          },
        },
      ])
    })
    it("should set the state to the passed in values", ()=> {
      expect(reducer({}, {type: types.SET_STATE, state: {
        votes: [{0:1}]}})).toEqual([{0:1}])
    })

  })
  describe('Selectors', () => {
    describe('currentLimit', () => {
      it("should return the limit based on the quest", ()=> {
        expect(actions.currentLimit({
          votes:[
            {
              quest: 1,
              players: {
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toBe(4)
      })
    })
    describe('getPlayerCount', () => {
      it('should return 0 if no players selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 1,
              players: {},
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(0)
      })
      it('should return 0 if no players are true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 1,
              players: {
                0: false,
                1: false,
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(0)
      })
      it('should return 1 if one player is true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 1,
              players: {
                1: true,
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(1)
      })
      it('should return 3 if three players are true selected in current vote', () => {
        expect(actions.getPlayerCount({
          votes:[
            {
              quest: 1,
              players: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(3)
      })
    })
    describe('getPlayersOnQuest', ()=> {
      it("should return the players on the quest", ()=> {
        expect(actions.getPlayersOnQuest({
          votes:[
            {
              players: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
          players: {
            1: 1,
            2: 2,
            3: 3,
            5: 5,
          },
        })).toEqual([1,2,3])
      })
    })
    describe('getPlayersOffQuest', ()=> {
      it("should return the players off the quest", ()=> {
        expect(actions.getPlayersOffQuest({
          votes:[
            {
              players: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
          players: {
            hasJoined: true,
            1: {1: 1},
            2: {2: 2},
            3: {3: 3},
            5: {5: 5},
            6: {6: 6},
          },
        })).toEqual([{5: 5}, {6: 6}])
      })
    })
    describe('voteCount', ()=> {
      it('should return the number of votes in', ()=>{
        expect(actions.voteCount({
          votes:[
            {
              votes: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
        })).toEqual(4)
      })
      it('should return 0 if no votes', ()=>{
        expect(actions.voteCount({
          votes:[
            {
              votes: {},
            },
          ],
        })).toEqual(0)
      })
    })
    describe('hasSucceeded', ()=> {
      it('should succeed if more than half the votes are yes', ()=>{
        expect(actions.hasSucceeded({
          votes:[
            {
              votes: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
        })).toEqual(true)
      })
      it('should fail half the votes are yes', ()=>{
        expect(actions.hasSucceeded({
          votes:[
            {
              votes: {
                1: true,
                2: false,
                3: true,
                5: false,
              },
            },
          ],
        })).toEqual(false)
      })
    })
    describe('atLimit', () => {
      it('should return false if below limit', () => {
        expect(actions.atLimit({
          votes:[
            {
              quest: 1,
              players: {
                1: true,
                2: true,
                3: true,
                5: false,
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(false)
      })
      it('should return true if at limit', () => {
        expect(actions.atLimit({
          votes:[
            {
              quest: 1,
              players: {
                1: true,
                2: true,
                3: true,
                5: true,
              },
            },
          ],
          quests: {
            1: {
              playerCount: 4,
            },
          },
        })).toEqual(true)
      })
    })
  })
})
