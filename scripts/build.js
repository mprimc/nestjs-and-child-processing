const { execSync } = require('child_process');
const shortCommitHash = execSync('git rev-parse --short HEAD')
  .toString()
  .trim();
const { npm_package_name, npm_package_version } = process.env;
execSync(
  `pkg -t node10-win,node10-linux -o \"build/${npm_package_name}-${npm_package_version}-${shortCommitHash}\" .`,
  { stdio: [0, 1, 2] },
);
