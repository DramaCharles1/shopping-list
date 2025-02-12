FROM httpd:2.4

# Set working directory
WORKDIR /app

# Install dependencies for building mod_wsgi and mysqlclient
RUN apt-get update && \
    apt-get install -y python3 python3-dev python3-pip apache2-dev build-essential \
    pkg-config libmariadb-dev && \
    apt-get clean

COPY requirements.txt /app/

RUN pip3 install -r requirements.txt --break-system-packages

# --break-system-packages safe in containers
# Install mod_wsgi and explicitly specify the correct module directory
RUN pip3 install mod_wsgi --break-system-packages && \
    mod_wsgi-express install-module --modules-dir /usr/local/apache2/modules/ > /usr/local/apache2/conf/mod_wsgi.load && \
    mv /usr/local/apache2/modules/mod_wsgi-py*.so /usr/local/apache2/modules/mod_wsgi.so

RUN mkdir -p /var/run/apache2 && chmod -R 0755 /var/run/apache2 && \
    chown -R www-data:www-data /var/run/apache2

RUN mkdir -p /var/www/static/ && \
    chown -R www-data:www-data /var/www/static/ && \
    chmod -R 755 /var/www/static/

# Copy the Apache configuration file
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

COPY .htaccess /var/www/static/