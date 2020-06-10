# Example project to show effect that captureStackTrace has on synth time

To set up run
```
npm install
```

To show how the time to run a synth is influenced by the number of constructs
and stack trace collection run

```
./bench.sh
```

This will patch the CDK code to allow stack trace collection to be disabled
and run a synth with and without it.
