class LoggerModule {
    constructor() {
    }

    log(msg, type) {
        const style = {
            color: `green`,
            fontWeight: `normal`
        };

        switch (type) {
            case 'log': {
                style.fontWeight = `bold`;
            }
            break;
            case 'warn': {
                style.color = `red`;
                style.fontWeight = `bold`;
            }
            break;
            case 'info': {
                style.color = `blue`;
            }
        }

        console.log(`%c ${msg}`, `color: ${style.color}; font-weight: ${style.fontWeight}`);
    }
}

const VGLogger = new LoggerModule();

export default VGLogger;
