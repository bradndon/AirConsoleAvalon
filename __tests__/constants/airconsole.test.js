import airconsole from 'screen/constants/airconsole'
import store from 'redux/store'
import {addPlayer} from 'redux/modules/players'

describe("airconsole", function() {
  it("should dispatch the action it recieves onMessage", ()=> {
    airconsole.onMessage(1, addPlayer("Brandon", 1))
    expect(store.getState().players[1]).toEqual({"deviceId": 1, "name": "Brandon", "role": ""})
  })
})
