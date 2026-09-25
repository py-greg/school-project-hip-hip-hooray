from fastapi import FastAPI

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


if __name__ == '__main__':
    import uvicorn
    ensure_indexes()
    #runs the server
    uvicorn.run(app, host="0.0.0.0", port=4444)