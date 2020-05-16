# Languages

![issue badge](https://img.shields.io/badge/language-PUG-orange.svg)
![issue badge](https://img.shields.io/badge/language-CSS-informational.svg)
![issue badge](https://img.shields.io/badge/language-JS-yellow.svg)
![issue badge](https://img.shields.io/badge/language-Node-peru.svg)

# Youtube-Clone

Cloning Youtube with Vanilla and NodeJS

## Summary
- `Front-End`는 `Vanilla JS`로 구현
- `Back-End`는 `Node.js`를 사용하며 웹서버 구축에 사용된 웹프레임워크는 `Express`를 사용
- `JS` 파일들의 네트워크 병목현상을 최소화 하기위해 `webpack` 모듈 번들러 사용
- `CSS`는 `webpack`을 이용하여 `SCSS`파일을 변환하여 적용

## Design Pattern(MVC)
- ### Model
  - 데이터스키마를 관리하는 데이터베이스는 `MongoDB`
  - `JS`와 `MongoDB`의 연결은 `Mongoose`를 사용
  - 만들어지는 스키마는 총 세 개 (댓글, 사용자, 비디오)
  - `MongoDB`는 `MongoDB Atlas`로 관리되며, 영상과 이미지파일들은 인터넷 스토리지 서비스인 `Amazon S3`에 저장


- ### View
  - `Express`에서 View(template)는 `PUG`를 사용
  
- ### Controller
  - Data, 즉 `Model`을 보여주기위한 함수들의 집합으로 `JS`로 구현

## Result    

https://tranquil-journey-66023.herokuapp.com/

## Pages :

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] User Detail
- [X] Edit Profile
- [X] Change Password
- [X] Upload
- [x] Video Detail
- [X] Edit Video

