FROM httpd:2.4

# Install dependencies for building mod_wsgi
RUN apt-get update && \
    apt-get install -y python3 python3-dev python3-pip apache2-dev build-essential && \
    apt-get clean

# --break-system-packages safe in containers
# Install mod_wsgi and explicitly specify the correct module directory
RUN pip3 install mod_wsgi --break-system-packages && \
    mod_wsgi-express install-module --modules-dir /usr/local/apache2/modules/ > /usr/local/apache2/conf/mod_wsgi.load && \
    mv /usr/local/apache2/modules/mod_wsgi-py*.so /usr/local/apache2/modules/mod_wsgi.so


# Copy the Apache configuration file
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

# Set working directory
WORKDIR /app