## Cod3a News

### to setup StepZen:

```
# Install the StepZen CLI
npm install -g stepzen

# Log in with your StepZen account
stepzen login -a YOUR_USER

# Enter your Admin Key when prompted
YOUR_KEY_HERE

```

### Build your endpoint with StepZen:

```
# Initialize your project
stepzen init --endpoint=api/getting-started

# Import your configured REST backend
stepzen import curl --request GET 'https://jsonplaceholder.typicode.com/todos/1'  --query-name=typicodeQuery --query-type=Typicode --name=typicodeQuery

# Type stepzen start in your terminal
stepzen start
```
