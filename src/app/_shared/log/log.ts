import { colors } from './../colors';
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

export enum LogType {
    OK = 'OK',
    FAIL = 'FAIL',
    WARN = 'WARN',
    NEWLINE = 'NEWLINE',
    INFO = 'INFO',
    DEFAULT = 'DEFAULT',
    INLINE = 'INLINE',
  }


export class LOG {
    static icon = '';
    // static process = process;
    static types = {
        [LogType.INLINE]        : { status: '', fg: colors.FgWhite, bg: colors.BgTransparent},
        [LogType.OK]        : { status: '[OK]', fg: colors.FgBlack, bg: colors.BgGreen},
        [LogType.FAIL]      : { status: '[FAIL]', fg: colors.FgWhite, bg: colors.BgRed} ,
        [LogType.WARN]      : { status: '[WARN]', fg: colors.FgWhite, bg: colors.BgYellow} ,
        [LogType.DEFAULT]   : { status: '      ', fg: colors.FgWhite, bg: colors.BgTransparent},
        [LogType.INFO]      : { status: '[INFO]', fg: colors.FgBlack, bg: colors.BgWhite},
    }
    private static output(type, message, icon, newline){
        // console.log(this.process.getuid())
        const color = this.types[type];
        const status = (type === LogType.INLINE) ? `` : `${color.fg}${color.bg}  ${color.status}  ${colors.Reset} `;
        // this.process.stdout.write(`${newline ? '\n' : ''}${status}${icon}${message}`);
        process.stdout.write(`${newline ? '\n' : ''}${status}${icon}${message}`);
    }
    static OK (message: string, newline = true){ this.output(LogType.OK, message, this.icon, newline) }
    static FAIL (message: string, newline = true){  this.output(LogType.FAIL, message, this.icon, newline) }
    static WARN (message: string, newline = true){  this.output(LogType.WARN, message, this.icon, newline) }
    static INFO (message: string, newline = true){  this.output(LogType.INFO, message, this.icon, newline) }
    static DEFAULT (message: string, newline = true){  this.output(LogType.DEFAULT, message, this.icon, newline) }
    static INLINE(message: string){ this.output(LogType.INLINE, message, this.icon, false)}
}