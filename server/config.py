class DebugConfig(object):
    DEBUG = True
    CSRF_ENABLED = True
    SQLALCHEMY_DATABASE_URI = "postgresql://kiwi@localhost:5432"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
