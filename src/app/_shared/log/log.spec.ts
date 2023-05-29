import { LOG } from './log'; // Import the module containing the LOG class
import { colors } from './../colors' 
import {
    mockProcessStdout,
    // mockProcessStderr,
    // mockConsoleLog,
  } from "jest-mock-process";

test('LOG.OK', () => {
    const mockStdout = mockProcessStdout();
    LOG.OK('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`\n${colors.FgBlack}${colors.BgGreen}  [OK]  ${colors.Reset} XXX`);
    mockStdout.mockRestore();
});
test('LOG.FAIL', () => {
    const mockStdout = mockProcessStdout();
    LOG.FAIL('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`\n${colors.FgWhite}${colors.BgRed}  [FAIL]  ${colors.Reset} XXX`);
    mockStdout.mockRestore();
});
test('LOG.WARN', () => {
    const mockStdout = mockProcessStdout();
    LOG.WARN('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`\n${colors.FgWhite}${colors.BgYellow}  [WARN]  ${colors.Reset} XXX`);
    mockStdout.mockRestore();
});
test('LOG.INFO', () => {
    const mockStdout = mockProcessStdout();
    LOG.INFO('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`\n${colors.FgBlack}${colors.BgWhite}  [INFO]  ${colors.Reset} XXX`);
    mockStdout.mockRestore();
});
test('LOG.DEFAULT', () => {
    const mockStdout = mockProcessStdout();
    LOG.DEFAULT('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`\n${colors.FgWhite}${colors.BgTransparent}          ${colors.Reset} XXX`);
    mockStdout.mockRestore();
});
test('LOG.INLINE', () => {
    const mockStdout = mockProcessStdout();
    LOG.INLINE('XXX');
    expect(mockStdout).toHaveBeenCalledWith(`XXX`);
    mockStdout.mockRestore();
});