import renderer from 'react-test-renderer'
import EntitiesList from '../components/EntitiesList';
import TestRenderer from 'react-test-renderer';
import { setImmediate } from "timers";

const { act } = TestRenderer;

describe("EntitiesList", () => {
  
  it("renders correctly with data", async () => {
    const wrapper = renderer.create(<EntitiesList
      fetchMethod={() => new Promise(resolve => resolve([{id: 101, name: 'John' }]))}
      propsToDisplay={{ name: 'Name' }} />);
    await act(() => new Promise(setImmediate));
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  })  

  it("renders loading without data", async () => {
    const wrapper = renderer.create(<EntitiesList
      fetchMethod={() => new Promise(resolve => resolve([{id: 101, name: 'John' }]))}
      propsToDisplay={{ name: 'Name' }} />);
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  })  
})