import isArray from 'lodash/isArray';

type CommandArg = string | [string, string] | [string, string, string];

export function formatTerraformArguments(args: CommandArg[]) {
  return args
    .map((arg) => {
      if (!isArray(arg)) {
        return arg;
      }

      if (arg.length === 2) {
        return `${arg[0]}=${arg[1]}`;
      }

      return `${arg[0]}="${arg[1]}=${arg[2]}"`;
    })
    .map((arg) => `-${arg}`);
}
