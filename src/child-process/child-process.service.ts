import { Injectable } from '@nestjs/common';
// tslint:disable-next-line:no-var-requires
const { fork } = require('child_process');
// tslint:disable:no-console

@Injectable()
export class ChildProcessService {
  private childFork = null;
  private forkNestDBModuleApp = null;

  forkChildFile() {
    if (!this.childFork) {
      this.childFork = fork(__dirname + '/child');
      this.childFork.on('message', msg => {
        console.log('Message from child', msg);
      });
    }

    this.childFork.send({ hello: 'world' });
  }
  getForkedNestJsDBModuleApp() {
    if (!this.forkNestDBModuleApp) {
      const currentPath = process.cwd();
      this.forkNestDBModuleApp = fork(currentPath + '/src/db/child-db-service');
    }
    return this.forkNestDBModuleApp;
  }
}
