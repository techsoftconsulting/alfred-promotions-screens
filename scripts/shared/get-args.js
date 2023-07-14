function getArgs() {
    const args = process.argv.slice(2);

    // const { 0: fileName } = args;
    const currentPath = args[args.length - 1];

    return {
     //   fileName,
        currentPath,
        args: args,
    };
}

exports.getArgs = getArgs;
