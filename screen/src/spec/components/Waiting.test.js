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
    it("should render the list of names", ()=> {
      const {enzymeWrapper} = setup(["bran", "gen"])
      expect(enzymeWrapper.find('p').at(0).text()).toBe('bran');
      expect(enzymeWrapper.find('p').at(1).text()).toBe('gen');
    })
    it("should render a game ready reminder if there are just enough players", ()=> {
      const {enzymeWrapper} = setup(["bran", "gen", "isaac", "kenz", "kirst"])
      expect(enzymeWrapper.find('h3').text()).toBe('Ready to start!')
    })
    it("should render a game ready reminder if there are almost too many players", ()=> {
      const {enzymeWrapper} = setup(["bran", "gen", "isaac", "kenz", "kirst", "bran", "gen", "isaac", "kenz", "kirst"])
      expect(enzymeWrapper.find('h3').text()).toBe('Ready to start!')
    })
    it("should not render a game ready reminder if there are too many players", ()=> {
      const {enzymeWrapper} = setup(["bran", "gen", "isaac", "kenz", "kirst", "bran", "gen", "isaac", "kenz", "kirst", "asdf"])
      expect(enzymeWrapper.find('h3').isEmpty()).toBe(true)
    })
  })
})
