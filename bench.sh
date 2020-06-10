#!/bin/bash
set -x
# Patching CDK to allow for stack trace collection to be disabled
grep -RE '^function captureStackTrace' node_modules -l | xargs -n1 sed -i -e 's#below =#if (process.env.NO_STACKS) { return []; }\'$'\n''    below=#'

NUMBER_OF_CONSTRUCTS=1000 time npm run-script cdk synth > /dev/null
NO_STACKS=true NUMBER_OF_CONSTRUCTS=1000 time npm run-script cdk synth > /dev/null
NUMBER_OF_CONSTRUCTS=10000 time npm run-script cdk synth > /dev/null
NO_STACKS=true NUMBER_OF_CONSTRUCTS=10000 time npm run-script cdk synth > /dev/null
