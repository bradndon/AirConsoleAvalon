import React from 'react'
import { shallow } from 'enzyme'
import { PlayerChooserContainer, mapStateToProps } from 'controller/containers/PlayerChooser/PlayerChooserContainer'

function setup (players, vote, playerCount) {
  const props = {
    players,
    vote,
    playerCount
  }
  const context = { router: { isActive: (a, b) => true } };
  const enzymeWrapper = shallow(<PlayerChooserContainer {...props}/>, {context})

  return {
    props,
    enzymeWrapper
  }
}


describe("Containers", ()=> {
  describe("PlayerChooserContainer", ()=> {
    it("should render itself", ()=> {
      const {enzymeWrapper} = setup([], {
          players: {},
          quest: {},
          playerLimit: 4,
        }, 2)
      expect(enzymeWrapper.find('LeaderQuestInfo').exists()).toBe(true)
    })
    it("should send the right props to the LeaderQuestInfo component", ()=> {
      const { enzymeWrapper} = setup([{name: "Brandon", deviceId: 1}, {name: "Isaac", deviceId: 2}], {
        players: {},
        quest: {},
        playerLimit: 4,
      }, 1)
      expect(enzymeWrapper.find('LeaderQuestInfo').props().numLeft).toBe(3)
      expect(enzymeWrapper.find('LeaderQuestInfo').props().isReady).toBe(true)
    })
    it("should render the correct amount of player cards", ()=> {
      const { enzymeWrapper} = setup([{name: "Brandon", deviceId: 1}, {name: "Isaac", deviceId: 2}], {
        players: {},
        quest: {},
        playerLimit: 4,
      }, 1)
      expect(enzymeWrapper.find('PlayerCard').length).toBe(2)
    })
    describe("mapStateToProps", ()=> {
      it("should return the proper list of players", ()=> {
        expect(mapStateToProps({
            players: {
              '1': {
                deviceId: 1,
                name: 'Brandon',
                role: ''
              }
            },
            votes: [
              {
                players: {1: true},
                quest: {},
                playerLimit: 0
              }
            ],
            quests: {},
            game: {
              currentQuest: 1
            }
          }, {})).toEqual(
            {
              players: [{deviceId: 1, name: 'Brandon', role: ''}],
              vote: {
                players: {1:true},
                quest: {},
                playerLimit: 0
              },
              playerCount: 1
            })
      })
    })
  })
})
