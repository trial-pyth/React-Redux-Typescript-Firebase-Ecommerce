import { shallow, mount, render } from "enzyme";
import Spinner from "./spinner.component";

it("expect to render Spinner component", () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
