#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SlowCdkSynthExampleStack } from '../lib/slow-cdk-synth-example-stack';

const app = new cdk.App();
new SlowCdkSynthExampleStack(app, 'SlowCdkSynthExampleStack');
