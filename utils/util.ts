import { isUndefined } from "lodash";

export const allDefined = (...args) => {
	return args.every((arg) => !isUndefined(arg));
};
