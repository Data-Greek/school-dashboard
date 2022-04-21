FROM python:3.8-slim-buster

# Option pour faire fonctionner la BDD
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2
    
WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "manage.py", "runserver"]