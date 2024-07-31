# ExpressJS Media Uplaod Example

This is a simple example of how to use the [multer](https://www.npmjs.com/package/multer) middleware to upload media files to a server using ExpressJS.

## Installation

```bash
pnpm install
```

Run the server

```bash
pnpm dev
```

## Usage

Upload multiple files to the server by sending a POST request to the `/upload` endpoint.

```bash
curl --location 'http://localhost:3000/upload' \
--form 'media=@"/home/quan/Techlab/tmp/express-media-example/src/tests/fixtures/test1.txt"' \
--form 'media=@"/home/quan/Techlab/tmp/express-media-example/src/tests/fixtures/test2.txt"' \
--form 'media=@"/home/quan/Techlab/tmp/express-media-example/src/tests/fixtures/test3.txt"'
```

The server will respond with a JSON object containing the file names and paths.

```json
{
  "message": "Files uploaded successfully.",
  "files": [
    {
        "fieldname": "media",
        "originalname": "test1.txt",
        "encoding": "7bit",
        "mimetype": "text/plain",
        "destination": "uploads/",
        "filename": "5482daaeb413ec8a56b024d27067c744",
        "path": "uploads/5482daaeb413ec8a56b024d27067c744",
        "size": 9
    }
  ]
}
```
