FROM node:10.15.0

WORKDIR /
RUN npm install



ENV NODE_ENV='production'
ENV LOG_LEVEL='error'

ENV PUBLIC_SERVER_URL='https://cpmadmin.mbagancy.mx'
ENV PARSE_SERVER_MOUNT '/api'

ENV APP_NAME='Como peras y manzanas Dashboard'

# Use random.org to generate a random string for the APP_ID MASTER_KEY and READ_ONLY_MASTER_KEY
# Example: https://www.random.org/strings/?num=10&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new

ENV APP_ID='PgftxcVqjt'
ENV MASTER_KEY='YOUR_MASTER_KEY'
ENV READ_ONLY_MASTER_KEY='YOUR_READ_ONLY_MASTER_KEY'
 

# Mailgun host (default: 'api.mailgun.net'). 
# When using the EU region, the host should be set to 'api.eu.mailgun.net'
ENV MAILGUN_HOST='api.mailgun.net'

ENV GOOGLE_MAPS_API_KEY='AIzaSyCjHLmY0d158JByOAGOAbMJYpwQIf8jk6w'

ENV PUSH_ANDROID_SENDER_ID='YOUR_ANDROID_SENDER_ID'
ENV PUSH_ANDROID_API_KEY='YOUR_ANDROID_API_KEY'

ENV PUSH_IOS_BUNDLE_ID='com.pumpun.prueba'

ENV MAX_REQUEST_SIZE='20mb'
ENV DOKKU_LETSENCRYPT_EMAIL='dev@quanlabs.com'

# Generate an encrypted password for your parse dashboard user
# https://bcrypt-generator.com/
ENV PARSE_DASHBOARD_USER='admin'
ENV PARSE_DASHBOARD_PASS='$2y$12$FjjhORnNdorLBNbkhVTP0e..HwP3fRKov9wYmo.2mGsJ4y96AviZm'

ENV PARSE_DASHBOARD_USER_READ_ONLY 'admin1'
ENV PARSE_DASHBOARD_PASS_READ_ONLY '$2y$12$6b7CuxcN7oZ4tkd7iQetOOdJOaVDajPiDrq2tjfxo0QP7DEbcirKW'

ENV ENTRYPOINT[""]