FROM amazonlinux:2
WORKDIR /
# Install necessary packages including make and gzip
RUN yum install -y gcc openssl-devel wget tar gzip make 
RUN yum install -y mesa-libGL
RUN yum update -y && yum install -y ffmpeg libSM libXext
# Install Python 3.9.0
RUN wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tgz
RUN tar -xzvf Python-3.9.0.tgz
WORKDIR /Python-3.9.0
RUN ./configure --enable-optimizations
RUN make install
# Install Python packages
RUN mkdir /packages
RUN echo "opencv-python-headless" >> /packages/requirements.txt
RUN mkdir -p /packages/opencv-python-3.9/python/lib/python3.9/site-packages
RUN pip3 install -r /packages/requirements.txt -t /packages/opencv-python-3.9/python/lib/python3.9/site-packages
