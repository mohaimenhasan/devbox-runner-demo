# DevBox Runner Demo

This is a demo repository showcasing the use of Microsoft DevBox as a self-hosted GitHub Actions runner.

## Project Structure

- `index.js`: A simple Express.js application
- `test.js`: Basic test suite using Jest
- `.github/workflows/basic.yml`: GitHub Actions workflow configuration

## Setup Instructions

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```
4. Start the application:
   ```bash
   npm start
   ```

### Setting up DevBox as a Self-hosted Runner

1. On your DevBox, download the latest runner package:
   ```bash
   mkdir actions-runner && cd actions-runner
   curl -o actions-runner-linux.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
   ```

2. Extract the installer:
   ```bash
   tar xzf ./actions-runner-linux.tar.gz
   ```

3. Create the runner:
   ```bash
   ./config.sh --url https://github.com/YOUR_USERNAME/devbox-runner-demo --token YOUR_TOKEN
   ```

4. Install and start the service:
   ```bash
   sudo ./svc.sh install
   sudo ./svc.sh start
   ```

## GitHub Actions Workflow

The workflow is configured to:
- Run on pull requests using GitHub-hosted runners
- Run on pushes to main using your DevBox self-hosted runner
- Install dependencies
- Run tests
- Build the application
- Display runner information

## License

MIT 