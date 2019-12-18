import React from 'react';
import { configure , shallow} from 'enzyme';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';
import Layout from "../components/Layout";
configure({ adapter: new Adapter() });

// test for  input type change
it("Updates the state", () => {
    const wrapper = shallow(<Layout/>);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: 6 } });  // 'value' instead of 'num'
    expect(input.props().value).toEqual(1);
    const p = wrapper.find("p");
    expect(p.props()).toEqual({ children: 6 });
});


// test for change state using button
describe('The Count Up Button', () => {
  it('increments state count by 1 on click', () => {
    const wrapper = shallow(<Layout/>);
    wrapper.find('button').props().onClick();
    expect(wrapper.state().num).toEqual(5); // 'value' instead of 'num'
    const input = wrapper.find("input");
    expect(input.props().value).toEqual(5);
  });
});

 

describe('snapshort', () => {
  it('code for test using snapshort', () => {
    const tree = renderer.create(<h1>Snapshort Testing</h1>).toJSON()
    expect(tree).toMatchSnapshot()
  });
});


// test for check className on button change
describe('The Count Up Button', () => {
  it('increments state count by 1 on click', () => {
    const wrapper = shallow(<Layout/>);
    wrapper.find('a').props().onClick();
    const a=wrapper.find('a');
    expect(a.hasClass('btn btn-info')).toEqual(true);
  });
});


// test for get single h2 tag data
describe('The Count Up Button', () => {
  it('increments state count by 1 on click', () => {
    const wrapper = shallow(<Layout/>);
    const a=wrapper.find('.hello1');
  });
});




 