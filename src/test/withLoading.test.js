import renderer from "react-test-renderer";
import TestRenderer from "react-test-renderer";
import withLoading from "../components/withLoading";
import { setImmediate } from "timers";

function EntityDetailsForTest({ data, propsToDisplay }) {
  return (
    <div className="center">
      <h3>{data.name} Details:</h3>
      {Object.entries(propsToDisplay).map((entry) => (
        <div key={entry[1]}>
          {" "}
          {entry[1]}: <strong>{data[entry[0]]}</strong>
        </div>
      ))}
    </div>
  );
}

const EntityDetails = withLoading(EntityDetailsForTest);

const { act } = TestRenderer;

describe("EntityDetails", () => {
  it("renders correctly with data", async () => {
    const wrapper = renderer.create(
      <EntityDetails
        fetchMethod={() =>
          new Promise((resolve) =>
            resolve({ id: 101, name: "John", email: "john@gmail.com" })
          )
        }
        propsToDisplay={{ name: "Name" }}
      />
    );
    await act(() => new Promise(setImmediate));

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("renders loading without data", async () => {
    const wrapper = renderer.create(
      <EntityDetails
        fetchMethod={() =>
          new Promise((resolve) =>
            resolve({ id: 101, name: "John", email: "john@gmail.com" })
          )
        }
        propsToDisplay={{ name: "Name" }}
      />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
