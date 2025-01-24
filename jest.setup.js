import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import {
  TextDecoder,
  TextEncoder
} from 'util';

Object.assign(global, {
  TextDecoder,
  TextEncoder
});
