#!/bin/sh
yarn build && aws s3 sync ../build s3://stories-frontend --acl public-read
