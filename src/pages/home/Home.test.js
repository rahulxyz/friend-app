import Home from "./Home";
import { shallow, mount } from "enzyme";

describe("Home", () => {
    it("should render without error", () => {
        const component = <Home />;
        const shallowWrapper = shallow(component);
        expect(shallowWrapper).toBeDefined();
    });

    it("should mount without error", () => {
        const component = <Home />;
        const mountWrapper = mount(component);
        expect(mountWrapper).toBeDefined();
    });

    it("should have correct props for add friend field", () => {
        const component = <Home />;
        const mountWrapper = mount(component);
        const input = mountWrapper.find("#test-add-input");

        expect(input.props()).toEqual({ autoComplete: "off", id: "test-add-input", name: "friendName", onChange: expect.any(Function), onKeyDown: expect.any(Function), placeholder: "Add New Friend", type: "text", value: "" });
    });
});
