import React from 'react'
import { shallow } from 'enzyme'
import { Waiting } from 'components/'

function setup (players) {
  const props = {
    players
  }
  const enzymeWrapper = shallow(<Waiting {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("components", ()=> {
  describe("Waiting", ()=> {
    it("should render self", ()=> {
      const {enzymeWrapper} = setup([])

      expect(enzymeWrapper.find('div').hasClass('waiting')).toBe(true)
      expect(enzymeWrapper.find('h2').text()).toBe('Players joined:')
    })
  })
})
