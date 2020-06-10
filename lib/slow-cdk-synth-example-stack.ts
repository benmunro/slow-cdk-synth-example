import * as cdk from '@aws-cdk/core';

export class SlowCdkSynthExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    for (let i = 1; i < parseInt(process.env.NUMBER_OF_CONSTRUCTS!); i++) {
      new cdk.CfnWaitCondition(this, `Wait${i}`);
    }
  }
}
