import React from 'react';
import { configure , shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDo from "../components/pages/toDo/ToDo";
configure({ adapter: new Adapter() });


describe("<ToDo />",()=>{
  it("test case for mount code",()=>{
      const wrapper = shallow(<ToDo/>);
      const li = wrapper.find('li');
      expect(li.length).toEqual(2);
  })

  it("test case for add new ToDo",()=>{
    
    const wrapper = mount(<ToDo />);
    wrapper.find("input[type='text']").getDOMNode().value = "New item";
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(wrapper.find("li")).toHaveLength(3);
  })

  it("test case for Done single last li",()=>{
    const wrapper = shallow(<ToDo />);
    const a= wrapper.find(".btn-done").simulate("click");
    expect(a).toHaveLength(1);
  })


  it("test case for delete last li",()=>{
    const wrapper = mount(<ToDo />);
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(wrapper.find("li")).toHaveLength(1);
  })



})






 