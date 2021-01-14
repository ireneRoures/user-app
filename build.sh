#!/bin/sh
VERSION=`cat VERSION`
IMAGE_NAME='ireneroures/cloudappi-test'

docker build -t $IMAGE_NAME:$VERSION . && docker push $IMAGE_NAME:$VERSION