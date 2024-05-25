import cli from 'node:child_process';

cli.exec('git clone https://github.com/appsaeed/appsaeed.git');
cli.exec('mv ./appsaeed/README.md README.md');
cli.exec('rm -rf ./appsaeed');