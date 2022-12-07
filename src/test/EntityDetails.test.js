import renderer from 'react-test-renderer'
import EntityDetails from '../components/EntityDetails';
import TestRenderer from 'react-test-renderer';
import { setImmediate } from "timers";

const { act } = TestRenderer;

describe("EntityDetails", () => {
 
  it("renders correctly with data", async () => {
    const wrapper = renderer.create(<EntityDetails
      fetchMethod={() => new Promise(resolve => resolve({id: 101, name: 'John', email: 'john@gmail.com' }))}
      propsToDisplay={{ name: 'Name' }} />);
    await act(() => new Promise(setImmediate));
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  })  

  it("renders loading without data", async () => {
    const wrapper = renderer.create(<EntityDetails
      fetchMethod={() => new Promise(resolve => resolve({id: 101, name: 'John', email: 'john@gmail.com' }))}
      propsToDisplay={{ name: 'Name' }} />);
    
    expect(wrapper.toJSON()).toMatchSnapshot();
  })  
})