React를 이용해서 TodoList 만들기

2023/10/23 목표 설정
- 특정 목표를 CRUD 할 수 있어야 함, 각각의 목표에는 [제목, 간단한 요약, 중요도, 데드라인]이 최소한 포함되어 있어야 함
- 저장된 목표는 다른 DB에 놓여 있어서 반영구적으로 존재해야하며, 맨 처음에 시작했을 때 기존에 작성했던 내용들이 로딩되어야 함

*개략적인 component 구상
1. <Show> : 기존에 존재하는 목표들을 나타내는 창
2. <CreateGoal> : 새로운 목표 생성
3. <UpdateGoal> : 기존 목표 수정
4. <DeleteGoal> : 다 된 목표 삭제
5. <Goal> : 각 목표의 정보를 보여주는 태그 -> 누르면 그 창으로 이동함


2023.11.03

한 것 : 기본 틀 만들기 - MainPage, UpdatePage를 오갈 수 있게 설정, Update 페이지의 기본적인 틀 완성

과제 : UpdateGoal을 통해서 새로운 Goal을 만들었을 떄 이것을 GoalItemList에 추가하기


2023.11.06

한 것 : 
UpdateGoal을 통해서 새로운 Goal을 만드는 경우, UpdatePage에서 GoalList.json의 파일을 받은 후,
GoalList를 props로 넘겨준 뒤에 해당 props에 UpdateGoal 태그에서 추가하는 것으로 설정
근데 다시 생각해보니까 이게 update가 아니고 create여서 이름 싹 다시 수정함

각 항목마다 데이터 삭제할 수 있는 버튼을 생성 - 이는 GoalItemList에서 각 Goal의 props로 onClick함수를 넘김(해당 정보가 전부 지워지게)

과제 : 데이터 정렬, 수정 - 따로 UpdatePage를 만들어서 / Update 버튼을 만든다?

의문점 : 삭제가 되긴 하는데 이게 create 갔다가 오면은 기존에 디폴트로 설정해 둔 값이 다시 살아나 있음 - 이거는 DB를 직접 사용해봐야지 알 듯