FROM node:10.15.0

WORKDIR /
RUN npm install
RUN ng serve



ENV NODE_ENV='production'
ENV LOG_LEVEL='error'

ENV PUBLIC_SERVER_URL='https://cpmadmin.mbagancy.mx'

ENV APP_NAME='Como peras y manzanas Dashboard'

# Use random.org to generate a random string for the APP_ID MASTER_KEY and READ_ONLY_MASTER_KEY
# Example: https://www.random.org/strings/?num=10&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new

 

# Mailgun host (default: 'api.mailgun.net'). 
# When using the EU region, the host should be set to 'api.eu.mailgun.net'
ENV MAILGUN_HOST='api.mailgun.net'
ENV PUSH_ANDROID_SENDER_ID='YOUR_ANDROID_SENDER_ID'
ENV PUSH_ANDROID_API_KEY='YOUR_ANDROID_API_KEY'
ENV PUSH_IOS_BUNDLE_ID='com.pumpun.prueba'
ENV MAX_REQUEST_SIZE='20mb'
ENV DOKKU_LETSENCRYPT_EMAIL='dev@quanlabs.com'
ENV ENTRYPOINT = [""]