FROM node:14

# RUN mkdir class_build 굳이 따로 만들 필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start




# RUN CMD 차이 : CMD는 한번 밖에 못쓴다. RUN은 계속 쓸 수 있다
# 미리 해놓고 저장해 놓는 명령어들에서 CMD는 빠진다. (CMD는 압축 최적화에서 제외)