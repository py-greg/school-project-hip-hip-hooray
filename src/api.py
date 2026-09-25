from fastapi.routing import APIRouter
from fastapi import File, Link
router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    return {"message": "File uploaded successfully"}

@router.get("/link/{link_id}")
async def get_file(link_id: int):
    return {"message": "Link retrieved successfully"}

