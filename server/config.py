from sqlalchemy.pool import NullPool
import os


class DebugConfig(object):
    DEBUG = True
    CSRF_ENABLED = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "POSTGRES_URL", "postgresql://kiwi@localhost:5432?client_encoding=utf8"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ENGINE_OPTIONS = {
        "poolclass": NullPool,
    }
