FROM httpd:2.4

# Install mod_wsgi and Python
RUN apt-get update && \
    apt-get install -y python3 python3-pip libapache2-mod-wsgi-py3 && \
    apt-get clean

COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

WORKDIR /app
