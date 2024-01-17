# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory in the container
WORKDIR /shopping_list
# Copy the requirements file into the container at /mysite
COPY requirements.txt /shopping_list/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /usr/src/app/
COPY . /shopping_list/

# Make port 8000 available to the world outside this container
EXPOSE 8000
