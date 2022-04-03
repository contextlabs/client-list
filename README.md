Steps:
1. Navigate to `server` folder and install dependencies.
2. Start json-server by running `npm run dev`. It will run on http://localhost:5000
3. Navigate to `web` folder and install dependencies.
4. Start server by running `npm run dev`. It will run http://localhost:3000


Assumptions:
1. Name in the client.json(db.json) is the primary key. It is used as a unique identifier when navigating. It could be easily replaced with id when it is available.
2. Provided client.json is just a snapshot of the millions of record present on the backend. So filtering on the frontend won't be sufficient and that is reason it is handled on the backend. 
3. Seperate navigation route is used for Details page so it could be shared externally. 

Install dependencies.

```bash
npm install
```

Serve with hot reload at http://localhost:3000.

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```
