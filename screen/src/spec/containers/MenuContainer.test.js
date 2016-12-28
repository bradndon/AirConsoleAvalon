import React from 'react'
import { shallow } from 'enzyme'
import { MenuContainer } from 'containers/Menu/MenuContainer'

function setup (players) {
  const props = {
    players
  }
  const enzymeWrapper = shallow(<MenuContainer {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("Containers", ()=> {
  describe("MenuContainer", ()=> {
    it("should render itself", ()=> {
      const {enzymeWrapper} = setup([])
      console.log(enzymeWrapper)
      expect(enzymeWrapper.find('Waiting').exists()).toBe(true)
    })
    it("should send the players prop to the Waiting component", ()=> {
      const {props, enzymeWrapper} = setup(["Brandon", "Isaac"])
      expect(enzymeWrapper.find('Waiting').props().players).toBe(props.players)
    })
  })
})
