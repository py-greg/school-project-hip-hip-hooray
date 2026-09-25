from pydantic import BaseModel
from datetime import datetime


class User(BaseModel):
    id: int
    name: str
    email: str
    password: str


class Link(BaseModel):
    id: int
    url: str
    created_at: datetime
    updated_at: datetime


class File(BaseModel):
    id: int
    name: str
    path: str
    size: int
    type: str
    created_at: datetime
    updated_at: datetime
