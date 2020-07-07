# import the base image
FROM python:3.7

#set  the env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
    #django env vars
ENV DJANGO_SECRET_KEY z+ksf@)0d^qojbh4rnp4b1to$$hq&*tt(3bs$$gf(3i267g$$k9ln
ENV DEBUG True
# ENV STRIPE_TEST_PUBLISHABLE_KEY key_here
# ENV STRIPE_TEST_SECRET_KEY key_here

# set the workdir

WORKDIR /code

#install dependencies
COPY Pipfile Pipfile.lock /code/
RUN python -m pip install -U pip
RUN pip install pipenv && pipenv install --system

#copy the project

COPY . /code/
