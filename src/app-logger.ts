import * as winston from 'winston'
import { LoggerService as LS } from '@nestjs/common';
import { Logger } from "winston";

export class LoggerService implements LS {

	private logger: Logger;

	constructor() {
		this.logger = winston.createLogger({
			level: 'info',
			format: winston.format.combine(
		    winston.format.timestamp({format: 'DD.MM.YYYY HH:mm:ss'}),
		    winston.format.json(),
		    winston.format.prettyPrint(),
		  ),
			defaultMeta: { service: 'citadel' },
			transports: [
				new winston.transports.File({ filename: 'error.log', level: 'error' })
			]
		});
	}

	log(message: string) {
		this.logger.info(message);
		// console.log(message)
	}
	error(message: string, trace: string) {
		console.log(message)
		console.log(trace)
		this.logger.defaultMeta = { trace: trace }
		this.logger.error(message, trace);
	}
	warn(message: string) {
		this.logger.warning(message);
	}
	debug(message: string) {
		this.logger.debug(message);
	}
	verbose(message: string) {
		this.logger.verbose(message);
	}
}