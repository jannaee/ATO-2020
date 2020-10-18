// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#jest-enzyme-environment
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });