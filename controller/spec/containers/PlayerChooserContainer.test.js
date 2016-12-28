import React from 'react'
import { shallow } from 'enzyme'
import { PlayerChooserContainer } from 'containers/PlayerChooser/PlayerChooserContainer'

function setup (players, vote, playerCount) {
  const props = {
    players,
    vote,
    playerCount
  }
  const context = { router: { isActive: (a, b) => true } };
  const enzymeWrapper = shallow(<PlayerChooserContainer {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("Containers", ()=> {
  describe("PlayerChooserContainer", ()=> {
    it("should render itself", ()=> {
      const {enzymeWrapper} = setup([], {}, 2)
      console.log(enzymeWrapper.children())
      expect(enzymeWrapper.find('LeaderQuestInfo').exists()).toBe(true)
    })
    // it("should send the right props to the LeaderQuestInfo component", ()=> {
    //   const { enzymeWrapper} = setup(["Brandon", "Isaac"], {
    //     players: {},
    //     quest: {},
    //     playerLimit: 4,
    //   }, 1)
    //   expect(enzymeWrapper.find('LeaderQuestInfo').props().numLeft).toBe(3)
    //   expect(enzymeWrapper.find('LeaderQuestInfo').props().isReady).toBe(false)
    // })
  })
})
