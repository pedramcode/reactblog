import jwt
from datetime import datetime, timedelta,date
from django.conf import settings
from rest_framework.response import Response
from constants import values


class Token:

    @staticmethod
    def __encode_date(date):
        return 
    @staticmethod
    def create(username):
        now = datetime.now()
        cdate = f"{str(now.year)}-{str(now.month)}-{str(now.day)}-{str(now.hour)}-{str(now.minute)}-{str(now.second)}"
        edate = now + timedelta(days=10)
        edate = f"{str(edate.year)}-{str(edate.month)}-{str(edate.day)}-{str(edate.hour)}-{str(edate.minute)}-{str(edate.second)}"
        key = settings.SECRET_KEY
        
        token = jwt.encode({
            "username":username,
            "create":cdate,
            "expire":edate,
        },key = key)
        return token

    @staticmethod
    def validation(token):
        try:
            key = settings.SECRET_KEY

            data = jwt.decode(token, key=key)
            res = data["expire"].split('-')
            expdate =  datetime(year=int(res[0]),month=int(res[1]),day=int(res[2]),hour=int(res[3]),minute=int(res[4]),second=int(res[5]))
            
            print(expdate)

            if expdate < datetime.now():
                return False
            return data["username"]
        except:
            return False

    @staticmethod
    def authenticated(func):
        def inner(self, request):
            if not 'HTTP_AUTHORIZATION' in request.META:
                return Response("Unauthorized", values.HTTP_UNAUTHORIZED)
            token = request.META["HTTP_AUTHORIZATION"]
            token = token.replace('bearer','').replace('bearer ','').replace('Bearer','').replace(' ','').replace('\n','')
            username = Token.validation(token)
            if not username:
                return Response("Unauthorized", values.HTTP_UNAUTHORIZED)
            self.username = username
            return func(self, request)
        return inner