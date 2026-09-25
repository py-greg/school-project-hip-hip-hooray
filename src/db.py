import pymysql
from src.models import User, Link, File

#TODO: get a database connection
#TODO: add an "update_user" function
#TODO: add a "delete_user" function

_DB_CONFIG = {
    "host": "xxxxxx",
    "port": 1234,
    "user": "xxxxxx",
    "password": "xxxxxx",
    "database": "xxxxxx",
    "cursorclass": pymysql.cursors.DictCursor,
    "autocommit": True,
}

#user-related functions begin here
def get_users() -> list[User]:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM users")
            return cursor.fetchall()

def get_user_by_id(user_id: int) -> User:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
            return cursor.fetchone()

def create_user(user: User) -> User:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            password_hash = hash_password(user.password)
            cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (user.name, user.email, user.password))
            user_id = cursor.lastrowid
        conn.commit()
        return User(
            id=user_id,
            name=user.name,
            email=user.email,
            password=password_hash
        )

def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), salt.encode("utf-8"), 100_000
    )
    return f"{salt}${digest.hex()}"


#file-related functions begin here
def get_links() -> list[Link]:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM links")
            return cursor.fetchall()

def get_link_by_id(link_id: int) -> Link:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM links WHERE id = %s", (link_id,))
            return cursor.fetchone()


def create_link(link: Link) -> Link:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("INSERT INTO links (url) VALUES (%s)", (link.url,))
            link_id = cursor.lastrowid
            conn.commit()
            return Link(id=link_id, url=link.url)


def get_files() -> list[File]:
    with pymysql.connect(**_DB_CONFIG) as conn:
        with conn.cursor() as cursor:
            cursor.execute("SELECT * FROM files")
            return cursor.fetchall()


