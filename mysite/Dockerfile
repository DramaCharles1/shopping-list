# Use an official Python runtime as a parent image
FROM python:3.8

WORKDIR /shopping_list

COPY requirements.txt /shopping_list/

# Create virtual environment and install dependencies
RUN python3 -m venv /shopping_list/venv && \
    /shopping_list/venv/bin/pip install --upgrade pip && \
    /shopping_list/venv/bin/pip install -r requirements.txt

# Copy application source code
COPY . /shopping_list/

# Expose Django's default port
EXPOSE 8000

# Set the environment variable to use the virtual environment
ENV PATH="/shopping_list/venv/bin:$PATH"