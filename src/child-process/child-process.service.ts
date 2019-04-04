import { Injectable } from '@nestjs/common';
// tslint:disable:no-var-requires
const { fork } = require('child_process');
const path = require('path');

// tslint:disable:no-console

@Injectable()
export class ChildProcessService {
  private childFork = null;
  private forkNestDBModuleApp = null;

  forkChildFile() {
    if (!this.childFork) {
      this.childFork = fork(path.resolve(__dirname, './child'));
      this.childFork.on('message', msg => {
        console.log('Message from child', msg);
      });
    }

    this.childFork.send({ hello: 'world' });
  }
  getForkedNestJsDBModuleApp() {
    if (!this.forkNestDBModuleApp) {
      this.forkNestDBModuleApp = fork(path.resolve(__dirname, '../db/child-db-service'));
    }
    return this.forkNestDBModuleApp;
  }
}
