# IKEA cloneCording


## 프로젝트 주소
* SA : https://www.notion.so/7-IKEA-081fb84cc30747b981c8720a035b48fb
* 시연 영상 : 


## 프로젝트 기간
2022.09.09 - 2022.09.15


## 팀원
FE : 임연주, 유민아

BE : 전혜진, 송민진, 김성준 


## FE 구현 기능
Login /Singup page
* 로그인
* 회원가입 
* 로그아웃

Main Page
* 카테고리별 제품보기
* 검색기능

Detail Page
* 제품 상세보기
* 장바구니 추가


## Trouble Shooting
* useEffect 무한 렌더링 - useEffect deps[]를 넣지 않아서 무한 렌더링이 생겼는데, 빈 []를 넣었더니 function 기능이 되지않았다. 그래서 []안에 변경되는 값을 넣어 값이 변경될 때만 렌더링하게 하였다.   
* 카테고리 탭 누를시에 깜빡거리면서 제품 변경됨 - useEffect 대신에 useLayoutEffect 사용
